<?php

namespace App\Controller;

use DateTime;
use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Evento;
use App\Entity\Reserva;
use App\Form\UserFormType;
use App\Service\EventoService;
use App\Service\MailerService;
use App\Entity\DetallesReserva;
use App\Repository\TourRepository;
use App\Repository\EventoRepository;
use App\Form\DetallesReservaFormType;
use App\Repository\ReservaRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\BlogCategoriaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ReservaController extends AbstractController
{
    private EntityManagerInterface $em;
    private RequestStack $rs;

    public function __construct(EntityManagerInterface $em, RequestStack $rs)
    {
        $this->em = $em;
        $this->rs = $rs;
    }

    #[Route('/reserva/{id}/{_locale}', name: 'show')]
    public function show(
        Request $request,
        EntityManagerInterface $em,
        Tour $tour,
        TourRepository $tourRepository,
        EventoService $es,
        MailerService $mailerService,
        BlogCategoriaRepository $blogCategoriaRepository,
        EventoRepository $eventoRepository,
        TranslatorInterface $translator
    ) {
        if (!$tour) {
            return $this->redirectToRoute('home');
        }

        $locale = $request->getLocale();

        // Navbar categorias
        $categorias = $blogCategoriaRepository->findAll();
        $categoriaId = null;
        foreach ($categorias as $categoriaTmp) {
            $categoriaId = $categoriaTmp->getId();
        }
        $categoria = $categoriaId ? $blogCategoriaRepository->findOneBy(['id' => $categoriaId]) : null;

        $detallesReserva = new DetallesReserva();
        // Fecha por defecto (hoy)
        $detallesReserva->setFechaEvento(new DateTime());

        $tours = $tourRepository->findAll();

        $reserva = new Reserva();
        $user = $this->getUser();

        $reserva->setUser($user)
            ->setEstado('Añadir guía')
            ->setReferencia(uniqid())
            ->addTour($tour);

        $form = $this->createForm(DetallesReservaFormType::class, $detallesReserva);
        $form->handleRequest($request);

        // Cantidades y total
        $cantidadAdultos = $detallesReserva->getCantidadAdultos();
        $cantidadKids = $detallesReserva->getCantidadKids();
        $precio = $tour->getPrecio();

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidad = $cantidadAdultos + $cantidadKids;
            $totalReserva = $cantidad * $precio;
        } else {
            $cantidad = 0;
            $totalReserva = 0;
        }

        /**
         * ========= LÓGICA DATEPICKER (del código 2) =========
         * $fechasNoDisponibles, $fechasActivas, $plazasDisponibles
         */
        $fechasNoDisponibles = [];
        $fechasActivas = [];
        $plazasDisponibles = [];

        // Eventos existentes del tour
        $eventos = $eventoRepository->findBy(['tour' => $tour]);
        foreach ($eventos as $eventoTmp) {
            $fechaEvento = $eventoTmp->getFechaEvento()->format('Y-m-d');
            $stock = $tour->getStock();
            $cantidadEvento = $eventoTmp->getCantidad();

            if ($eventoTmp->isCerrado() || $cantidadEvento >= $stock) {
                $fechasNoDisponibles[] = $fechaEvento;
            } else {
                $fechasActivas[] = $fechaEvento;
                $plazasDisponibles[$fechaEvento] = $stock - $cantidadEvento;
            }
        }

        // Horarios del tour (tal cual lógica del código 2)
        $horarios = $tour->getHorarios();
        foreach ($horarios as $horario) {
            $fechaHorario = $horario->getFechaTour()->format('Y-m-d');

            if ($horario->isActivo()) {
                $fechasNoDisponibles[] = $fechaHorario;
            } else {
                $fechasActivas[] = $fechaHorario;
            }
        }

        // Unificar (evitar repetidos)
        $fechasNoDisponibles = array_values(array_unique($fechasNoDisponibles));
        $fechasActivas = array_values(array_unique($fechasActivas));

        if ($form->isSubmitted() && $form->isValid()) {
            $detallesReserva->setCantidad($cantidad)
                ->setTotalReserva($totalReserva);

            /**
             * ========= FECHA (robusta) =========
             * - Si viene del datepicker en POST (fecha_evento), usarla y setTime(0,0,0)
             * - Si no, usar la del formulario
             */
            $fechaReservaRaw = $request->request->get('fecha_evento');
            if ($fechaReservaRaw) {
                $fechaReservaDateTime = DateTime::createFromFormat('Y-m-d', $fechaReservaRaw);
                if ($fechaReservaDateTime) {
                    $fechaReservaDateTime->setTime(0, 0, 0);
                    $detallesReserva->setFechaEvento($fechaReservaDateTime);
                } else {
                    // fallback: mantener la del form
                    $fechaReservaDateTime = (clone $detallesReserva->getFechaEvento())->setTime(0, 0, 0);
                    $detallesReserva->setFechaEvento($fechaReservaDateTime);
                }
            } else {
                $fechaReservaDateTime = (clone $detallesReserva->getFechaEvento())->setTime(0, 0, 0);
                $detallesReserva->setFechaEvento($fechaReservaDateTime);
            }

            $fechaReserva = $fechaReservaDateTime->format('Y-m-d');
            $fechaActual = (new DateTime('now'))->format('Y-m-d');

            if ($fechaReserva < $fechaActual) {
                $mensaje = $translator->trans('The date of the event cannot be earlier than the current date, please modify the date of the reservation');
                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('show', [
                    'id' => $tour->getId(),
                    '_locale' => $locale
                ]);
            }

            // Si el evento está cerrado
            $evento = $eventoRepository->findOneBy([
                'tour' => $tour,
                'fecha_evento' => $fechaReservaDateTime
            ]);

            if ($evento && $evento->isCerrado()) {
                $mensaje = $translator->trans('The event is closed and cannot receive further reservations');
                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('show', [
                    'id' => $tour->getId(),
                    '_locale' => $locale
                ]);
            }

            // (Tal cual lo tenías) Validación por horarios (ojo: mantiene tu lógica original)
            $horarios = $tour->getHorarios();
            foreach ($horarios as $horario) {
                $fechaHorario = $horario->getFechaTour()->format('Y-m-d');
                if ($fechaReserva === $fechaHorario) {
                    $toursHorario = $horario->getTours();
                    foreach ($toursHorario as $tourHorario) {
                        $titulo = $tourHorario->getTitulo();

                        // Mantengo tu condición original (aunque es mejorable)
                        if ($titulos[$titulo] = $tourHorario->getId()) {
                            $mensaje = $translator->trans('Ups! We do not have a visit this day for this tour, please modify the booking date');
                            $this->addFlash('danger', $mensaje);

                            return $this->redirectToRoute('show', [
                                'id' => $tour->getId(),
                                '_locale' => $locale
                            ]);
                        }
                    }
                }
            }

            $reserva->setDetallesReserva($detallesReserva);

            /**
             * ========= GESTIÓN DE STOCK (del código 2) =========
             * - Condiciones con (stock + 1)
             */
            if ($detallesReserva->getCantidad() >= ($tour->getStock() + 1)) {
                $mensaje = $translator->trans('Sorry! The maximum number of participants for this event has been reached');
                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('show', [
                    'id' => $tour->getId(),
                    '_locale' => $locale
                ]);
            }

            $evento = $this->em->getRepository(Evento::class)->findOneBy([
                'tour' => $tour,
                'fecha_evento' => $fechaReservaDateTime
            ]);

            if ($evento) {
                $cantidadEvento = $evento->getCantidad();
                $cantidadTotal = $cantidadEvento + $cantidad;
                $stock = $tour->getStock();
                $cantidadRestante = $stock - $cantidadEvento;

                if ($cantidadTotal >= ($stock + 1)) {
                    $mensaje = $translator->trans(
                        'We inform you that there are only ' . $cantidadRestante . ' places left free for today\'s activity'
                    );
                    $this->addFlash('danger', $mensaje);

                    return $this->redirectToRoute('show', [
                        'id' => $tour->getId(),
                        '_locale' => $locale
                    ]);
                }
            }

            $em->persist($reserva);
            $em->flush();

            // Traducciones del asunto (se mantiene tu versión multi-idioma)
            $subjects = [
                'es' => 'Confirmación de su reserva – %s',
                'fr' => 'Confirmation de votre réservation – %s',
                'en' => 'Booking confirmation – %s',
            ];
            $template = $subjects[$locale] ?? $subjects['en'];
            $tourName = $tour->getTitulo();
            $subject = sprintf($template, $tourName);

            // Email al cliente
            $mailerService->send(
                $reserva->getUser()->getEmail(),
                $subject,
                'confirmation_nueva_reserva_email.html.twig',
                [
                    'user' => $user,
                    'tour' => $tour,
                    'reserva' => $reserva,
                    'locale' => $locale
                ]
            );

            // Email admin
            $mailerService->send(
                'reserva@freetourparis.com',
                'Nueva reserva realizada',
                'notification_nueva_reserva_email.html.twig',
                [
                    'reserva' => $reserva,
                    'user' => $user
                ]
            );

            $es->updateEventFromReserva($reserva, $detallesReserva, $tour);

            $mensaje = $translator->trans('Your booking has been confirmed, an e-mail has been sent, please check the spam');
            $this->addFlash('success', $mensaje);

            return $this->redirectToRoute('validar_reserva', [
                'id' => $reserva->getId(),
                '_locale' => $locale
            ]);
        }

        return $this->render('reserva/show.html.twig', [
            'tours' => $tours,
            'form' => $form,
            'detallesReserva' => $detallesReserva,
            'categoria' => $categoria,
            'cantidad' => $cantidad,
            'totalReserva' => $totalReserva,
            'reserva' => $reserva,
            'cantidadAdultos' => $cantidadAdultos,
            'fechasNoDisponibles' => $fechasNoDisponibles,
            'fechasActivas' => $fechasActivas,
            'plazasDisponibles' => $plazasDisponibles,
            'id' => $detallesReserva->getId(),
            '_locale' => $locale
        ]);
    }

    #[Route('edit_reserva/{id}/{_locale}', name: 'editar', methods: ['GET', 'POST'])]
    public function editar(
        Request $request,
        EntityManagerInterface $em,
        RequestStack $rs,
        Reserva $reserva,
        MailerService $mailerService,
        TourRepository $tourRepository,
        BlogCategoriaRepository $blogCategoriaRepository,
        EventoRepository $eventoRepository,
        TranslatorInterface $translator
    ): Response {
        $detallesReserva = $reserva->getDetallesReserva();
        $tour = $reserva->getTours()->first();
        $eventoAnterior = $reserva->getEvento();

        $tours = $tourRepository->findAll();
        $user = $this->getUser();
        $locale = $request->getLocale();

        // Navbar categorias
        $categorias = $blogCategoriaRepository->findAll();
        $categoriaId = null;
        foreach ($categorias as $categoriaTmp) {
            $categoriaId = $categoriaTmp->getId();
        }
        $categoria = $categoriaId ? $blogCategoriaRepository->findOneBy(['id' => $categoriaId]) : null;

        $form = $this->createForm(DetallesReservaFormType::class, $detallesReserva);
        $form->handleRequest($request);

        $cantidadAdultos = $detallesReserva->getCantidadAdultos();
        $cantidadKids = $detallesReserva->getCantidadKids();
        $precio = $tour->getPrecio();

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidad = $cantidadAdultos + $cantidadKids;
            $totalReserva = $cantidad * $precio;
        } else {
            $cantidad = 0;
            $totalReserva = 0;
        }

        /**
         * ========= LÓGICA DATEPICKER (del código 2) TAMBIÉN EN EDITAR =========
         */
        $fechasNoDisponibles = [];
        $fechasActivas = [];
        $plazasDisponibles = [];

        $eventos = $eventoRepository->findBy(['tour' => $tour]);
        foreach ($eventos as $eventoTmp) {
            $fechaEvento = $eventoTmp->getFechaEvento()->format('Y-m-d');
            $stock = $tour->getStock();
            $cantidadEvento = $eventoTmp->getCantidad();

            if ($eventoTmp->isCerrado() || $cantidadEvento >= $stock) {
                $fechasNoDisponibles[] = $fechaEvento;
            } else {
                $fechasActivas[] = $fechaEvento;
                $plazasDisponibles[$fechaEvento] = $stock - $cantidadEvento;
            }
        }

        $horarios = $tour->getHorarios();
        foreach ($horarios as $horario) {
            $fechaHorario = $horario->getFechaTour()->format('Y-m-d');

            if ($horario->isActivo()) {
                $fechasNoDisponibles[] = $fechaHorario;
            } else {
                $fechasActivas[] = $fechaHorario;
            }
        }

        $fechasNoDisponibles = array_values(array_unique($fechasNoDisponibles));
        $fechasActivas = array_values(array_unique($fechasActivas));

        if ($form->isSubmitted() && $form->isValid()) {
            $detallesReserva->setCantidad($cantidad)
                ->setTotalReserva($totalReserva);

            // Fecha desde datepicker si existe
            $fechaReservaRaw = $request->request->get('fecha_evento');
            if ($fechaReservaRaw) {
                $fechaReservaDateTime = DateTime::createFromFormat('Y-m-d', $fechaReservaRaw);
                if ($fechaReservaDateTime) {
                    $fechaReservaDateTime->setTime(0, 0, 0);
                    $detallesReserva->setFechaEvento($fechaReservaDateTime);
                } else {
                    $fechaReservaDateTime = (clone $detallesReserva->getFechaEvento())->setTime(0, 0, 0);
                    $detallesReserva->setFechaEvento($fechaReservaDateTime);
                }
            } else {
                $fechaReservaDateTime = (clone $detallesReserva->getFechaEvento())->setTime(0, 0, 0);
                $detallesReserva->setFechaEvento($fechaReservaDateTime);
            }

            $fechaReserva = $fechaReservaDateTime->format('Y-m-d');
            $fechaActual = (new DateTime('now'))->format('Y-m-d');

            if ($fechaReserva < $fechaActual) {
                $mensaje = $translator->trans('The date of the event cannot be earlier than the current date, please modify the date of the reservation');
                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('editar', [
                    'id' => $reserva->getId(),
                    '_locale' => $locale
                ]);
            }

            // Si el evento de la NUEVA fecha está cerrado
            $evento = $eventoRepository->findOneBy([
                'tour' => $tour,
                'fecha_evento' => $fechaReservaDateTime
            ]);

            if ($evento && $evento->isCerrado()) {
                $mensaje = $translator->trans('The event is closed and cannot receive further reservations');
                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('editar', [
                    'id' => $reserva->getId(),
                    '_locale' => $locale
                ]);
            }

            /**
             * ========= GESTIÓN DE STOCK (del código 2) EN EDITAR =========
             */
            if ($detallesReserva->getCantidad() >= ($tour->getStock() + 1)) {
                $mensaje = $translator->trans('Sorry! The maximum number of participants for this event has been reached');
                $this->addFlash('danger', $mensaje);

                return $this->redirectToRoute('editar', [
                    'id' => $reserva->getId(),
                    '_locale' => $locale
                ]);
            }

            $evento = $this->em->getRepository(Evento::class)->findOneBy([
                'tour' => $tour,
                'fecha_evento' => $fechaReservaDateTime
            ]);

            if ($evento) {
                $cantidadEvento = $evento->getCantidad();
                $cantidadTotal = $cantidadEvento + $cantidad;
                $stock = $tour->getStock();
                $cantidadRestante = $stock - $cantidadEvento;

                if ($cantidadTotal >= ($stock + 1)) {
                    $mensaje = $translator->trans(
                        'We inform you that there are only ' . $cantidadRestante . ' places left free for today\'s activity'
                    );
                    $this->addFlash('danger', $mensaje);

                    return $this->redirectToRoute('editar', [
                        'id' => $reserva->getId(),
                        '_locale' => $locale
                    ]);
                }
            }

            $em->persist($reserva);
            $em->flush();

            // Email cliente
            $mailerService->send(
                $reserva->getUser()->getEmail(),
                'Modificacion de su reserva',
                'confirmation_modification_reserva_email.html.twig',
                [
                    'user' => $user,
                    'tour' => $tour,
                    'reserva' => $reserva,
                    'locale' => $locale
                ]
            );

            // Email admin
            $mailerService->send(
                'reserva@freetourparis.com',
                'Modificacion reserva realizada',
                'notification_modification_reserva_email.html.twig',
                [
                    'reserva' => $reserva,
                    'user' => $user
                ]
            );

            $esService = new EventoService($em, $rs);
            $esService->updateEventFromReserva($reserva, $detallesReserva, $tour);

            // Mantengo tu limpieza de evento anterior si se queda sin reservas
            if ($eventoAnterior && $eventoAnterior->getReservas()->count() === 0) {
                $em->remove($eventoAnterior);
                $em->flush();
            }

            $mensaje = $translator->trans('Your booking has been successfully modified, you can find the details on your profile');
            $this->addFlash('success', $mensaje);

            return $this->redirectToRoute('validar_reserva', [
                'id' => $reserva->getId(),
                '_locale' => $locale
            ]);
        }

        return $this->render('reserva/editar.html.twig', [
            'tours' => $tours,
            'tour' => $tour,
            'form' => $form->createView(),
            'detallesReserva' => $detallesReserva,
            'cantidad' => $cantidad,
            'totalReserva' => $totalReserva,
            'reserva' => $reserva,
            'cantidadAdultos' => $cantidadAdultos,
            'fechasNoDisponibles' => $fechasNoDisponibles,
            'fechasActivas' => $fechasActivas,
            'plazasDisponibles' => $plazasDisponibles,
            'categoria' => $categoria,
            '_locale' => $locale
        ]);
    }

    #[Route('delete_reserva/{id}/{_locale}', name: 'delete_reserva')]
    public function deleteReserva($id, TranslatorInterface $translator, Request $request)
    {
        $reserva = $this->em->getRepository(Reserva::class)->find($id);
        $locale = $request->getLocale();

        if (!$reserva) {
            throw $this->createNotFoundException('No se encontró la reserva con el id ' . $id);
        }

        $this->em->remove($reserva);
        $this->em->flush();

        $mensaje = $translator->trans('Booking cancelled or deleted');
        $this->addFlash('info', $mensaje);

        return $this->redirectToRoute('reservas', [
            '_locale' => $locale
        ]);
    }

    #[Route('/validar_reserva/{id}/{_locale}', name: 'validar_reserva')]
    public function validarReserva(
        $id,
        ReservaRepository $repo,
        Request $request,
        BlogCategoriaRepository $blogCategoriaRepository,
        TourRepository $tourRepository
    ) {
        $reserva = $repo->find($id);
        $locale = $request->getLocale();

        $categorias = $blogCategoriaRepository->findAll();
        $categoriaId = null;
        foreach ($categorias as $categoriaTmp) {
            $categoriaId = $categoriaTmp->getId();
        }
        $categoria = $categoriaId ? $blogCategoriaRepository->findOneBy(['id' => $categoriaId]) : null;

        $tours = $tourRepository->findAll();

        if (!$reserva) {
            throw $this->createNotFoundException('Reserva no encontrada');
        }

        $user = new User();
        $form = $this->createForm(UserFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();
            $nombre = $user->getNombre();
            $apellidos = $user->getApellidos();
            $user->setNombre($nombre)->setApellidos($apellidos);

            $this->em->persist($user);
            $this->em->flush();
        }

        return $this->render('app/validar_reserva.html.twig', [
            'reserva' => $reserva,
            'tours' => $tours,
            'categoria' => $categoria,
            '_locale' => $locale,
            'userForm' => $form->createView()
        ]);
    }
}
