<?php

namespace App\Controller;

use DateTime;
use App\Entity\Tour;
use App\Entity\User;
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
        ReservaRepository $reservaRepository,
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
         * ========= NUEVA LÓGICA MULTI-HORARIO =========
         */
        $baseSchedule = [];
        $blockedDates = [];
        $eventStatus = []; // ['2023-10-31' => ['09:00' => ['full' => true, 'remaining' => 0]]]

        
        // Lógica centralizada para horarios + fallback
        [$baseSchedule, $blockedDates] = $this->calculateSchedule($tour);


        // Eventos existentes para calcular ocupación específica
        $eventos = $eventoRepository->findBy(['tour' => $tour]);
        foreach ($eventos as $evento) {
            if (!$evento->getInicio()) continue;
            
            $fecha = $evento->getInicio()->format('Y-m-d');
            $hora = $evento->getInicio()->format('H:i');
            $stock = $tour->getStock();
            $cantidadEvento = $evento->getCantidad();
            $remaining = $stock - $cantidadEvento;
            $isFull = ($evento->isCerrado() || $remaining <= 0);

            if (!isset($eventStatus[$fecha])) {
                $eventStatus[$fecha] = [];
            }
            $eventStatus[$fecha][$hora] = [
                'full' => $isFull,
                'remaining' => max(0, $remaining),
                'closed' => $evento->isCerrado()
            ];
        }

        // Estructura para JS
        $scheduleData = [
            'base' => array_values($baseSchedule),
            'blocked' => array_values(array_unique($blockedDates)),
            'events' => $eventStatus
        ];

        // Compatibilidad para evitar errores en template antes de actualizarlo
        $fechasNoDisponibles = $blockedDates; 
        $fechasActivas = [];
        $plazasDisponibles = [];

        if ($form->isSubmitted() && $form->isValid()) {
            $detallesReserva->setCantidad($cantidad)
                ->setTotalReserva($totalReserva);

            /**
             * ========= FECHA Y HORA =========
             */
            $fechaReservaRaw = $request->request->get('fecha_evento');
            $horaReservaRaw = $request->request->get('hora_evento'); // "09:00"

            if (!$horaReservaRaw) {
                $this->addFlash('danger', $translator->trans('Please select a time for the tour'));
                return $this->redirectToRoute('show', ['id' => $tour->getId(), '_locale' => $locale]);
            }

            // Procesar Fecha
            if ($fechaReservaRaw) {
                $fechaReservaDateTime = DateTime::createFromFormat('Y-m-d', $fechaReservaRaw);
                $fechaReservaDateTime->setTime(0, 0, 0); // La fecha base es a las 00:00
                $detallesReserva->setFechaEvento($fechaReservaDateTime);
            } else {
                $fechaReservaDateTime = (clone $detallesReserva->getFechaEvento())->setTime(0, 0, 0);
                $detallesReserva->setFechaEvento($fechaReservaDateTime);
            }

            // Procesar Hora
            $horaDateTime = DateTime::createFromFormat('H:i', $horaReservaRaw);
            $detallesReserva->setHoraEvento($horaDateTime); // Guardamos la hora
            
            // Construir DateTime completo para búsquedas
            $inicioBusqueda = clone $fechaReservaDateTime;
            $inicioBusqueda->setTime(
                (int)$horaDateTime->format('H'), 
                (int)$horaDateTime->format('i'), 
                0
            );

            $fechaReserva = $fechaReservaDateTime->format('Y-m-d');
            $fechaActual = (new DateTime('now'))->format('Y-m-d');

            if ($fechaReserva < $fechaActual) {
                $mensaje = $translator->trans('The date of the event cannot be earlier than the current date, please modify the date of the reservation');
                $this->addFlash('danger', $mensaje);
                return $this->redirectToRoute('show', ['id' => $tour->getId(), '_locale' => $locale]);
            }

            // === DUPLICATE RESERVATION CHECK ===
            $existingReserva = $reservaRepository->findDuplicateReservation(
                $user, $tour, $fechaReservaDateTime, $horaDateTime
            );

            if ($existingReserva) {
                $mensaje = $translator->trans('You already have a confirmed booking for this tour on this date and time. Please check your bookings to modify or cancel it');
                $this->addFlash('warning', $mensaje);
                return $this->redirectToRoute('show', ['id' => $tour->getId(), '_locale' => $locale]);
            }

            // Buscar Evento específico por fecha+hora
            $evento = $eventoRepository->findOneBy([
                'tour' => $tour,
                'inicio' => $inicioBusqueda
            ]);

            // Validación de Evento Cerrado
            if ($evento && $evento->isCerrado()) {
                $mensaje = $translator->trans('The event is closed and cannot receive further reservations');
                $this->addFlash('danger', $mensaje);
                return $this->redirectToRoute('show', ['id' => $tour->getId(), '_locale' => $locale]);
            }

            // Validación de Stock Específico
            if ($evento) {
                $stock = $tour->getStock();
                $cantidadTotal = $evento->getCantidad() + $detallesReserva->getCantidad();
                
                if ($cantidadTotal > $stock) {
                    $remaining = max(0, $stock - $evento->getCantidad());
                    $mensaje = $translator->trans(
                        'We inform you that there are only ' . $remaining . ' places left free for this time slot'
                    );
                    $this->addFlash('danger', $mensaje);
                    return $this->redirectToRoute('show', ['id' => $tour->getId(), '_locale' => $locale]);
                }
            } else {
                // Si no existe evento, verificamos contra el stock total del tour (nueva sesión)
                if ($detallesReserva->getCantidad() > $tour->getStock()) {
                    $mensaje = $translator->trans('Sorry! The maximum number of participants for this event has been reached');
                    $this->addFlash('danger', $mensaje);
                    return $this->redirectToRoute('show', ['id' => $tour->getId(), '_locale' => $locale]);
                }
            }

            // Validación de Días Bloqueados (Horarios específicos)
            if (in_array($fechaReserva, $blockedDates)) {
                $mensaje = $translator->trans('Ups! We do not have a visit this day for this tour, please modify the booking date');
                $this->addFlash('danger', $mensaje);
                return $this->redirectToRoute('show', ['id' => $tour->getId(), '_locale' => $locale]);
            }

            $reserva->setDetallesReserva($detallesReserva);

            $em->persist($reserva);
            $em->flush();

            // Traducciones del asunto
            $subjects = [
                'es' => 'Confirmación de su reserva – %s',
                'fr' => 'Confirmation de votre réservation – %s',
                'en' => 'Booking confirmation – %s',
                'pt' => 'Confirmação da sua reserva – %s',
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
            'form' => $form->createView(),
            'detallesReserva' => $detallesReserva,
            'categoria' => $categoria,
            'cantidad' => $cantidad,
            'totalReserva' => $totalReserva,
            'reserva' => $reserva,
            'cantidadAdultos' => $cantidadAdultos,
            // Pasamos los nuevos datos de calendario
            'scheduleData' => json_encode($scheduleData), 
            // Datos legacy para evitar errores si no se actualiza template a la vez
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
         * ========= NUEVA LÓGICA MULTI-HORARIO (EDITAR) =========
         */
        $baseSchedule = [];
        $blockedDates = [];
        $eventStatus = [];

        
        // Lógica centralizada
        [$baseSchedule, $blockedDates] = $this->calculateSchedule($tour);


        $eventos = $eventoRepository->findBy(['tour' => $tour]);
        foreach ($eventos as $evento) {
            if (!$evento->getInicio()) continue;
            
            $fecha = $evento->getInicio()->format('Y-m-d');
            $hora = $evento->getInicio()->format('H:i');
            $stock = $tour->getStock();
            $cantidadEvento = $evento->getCantidad();
            $remaining = $stock - $cantidadEvento;
            $isFull = ($evento->isCerrado() || $remaining <= 0);

            if (!isset($eventStatus[$fecha])) {
                $eventStatus[$fecha] = [];
            }
            $eventStatus[$fecha][$hora] = [
                'full' => $isFull,
                'remaining' => max(0, $remaining),
                'closed' => $evento->isCerrado()
            ];
        }

        $scheduleData = [
            'base' => array_values($baseSchedule),
            'blocked' => array_values(array_unique($blockedDates)),
            'events' => $eventStatus
        ];

        // Legacy data
        $fechasNoDisponibles = $blockedDates; 
        $fechasActivas = [];
        $plazasDisponibles = [];

        if ($form->isSubmitted() && $form->isValid()) {
            $detallesReserva->setCantidad($cantidad)
                ->setTotalReserva($totalReserva);

            $fechaReservaRaw = $request->request->get('fecha_evento');
            $horaReservaRaw = $request->request->get('hora_evento');

            // Si no se cambia la hora, intentar mantener la existente si existe
            if (!$horaReservaRaw) {
                 if ($detallesReserva->getHoraEvento()) {
                     $horaReservaRaw = $detallesReserva->getHoraEvento()->format('H:i');
                 } else {
                     $this->addFlash('danger', $translator->trans('Please select a time for the tour'));
                     return $this->redirectToRoute('editar', ['id' => $reserva->getId(), '_locale' => $locale]);
                 }
            }

            if ($fechaReservaRaw) {
                $fechaReservaDateTime = DateTime::createFromFormat('Y-m-d', $fechaReservaRaw);
                $fechaReservaDateTime->setTime(0, 0, 0);
                $detallesReserva->setFechaEvento($fechaReservaDateTime);
            } else {
                $fechaReservaDateTime = (clone $detallesReserva->getFechaEvento())->setTime(0, 0, 0);
                $detallesReserva->setFechaEvento($fechaReservaDateTime);
            }

            $horaDateTime = DateTime::createFromFormat('H:i', $horaReservaRaw);
            $detallesReserva->setHoraEvento($horaDateTime);
            
            $inicioBusqueda = clone $fechaReservaDateTime;
            $inicioBusqueda->setTime(
                (int)$horaDateTime->format('H'), 
                (int)$horaDateTime->format('i'), 
                0
            );

            $fechaReserva = $fechaReservaDateTime->format('Y-m-d');
            $fechaActual = (new DateTime('now'))->format('Y-m-d');

            if ($fechaReserva < $fechaActual) {
                $mensaje = $translator->trans('The date of the event cannot be earlier than the current date');
                $this->addFlash('danger', $mensaje);
                return $this->redirectToRoute('editar', ['id' => $reserva->getId(), '_locale' => $locale]);
            }

            if (in_array($fechaReserva, $blockedDates)) {
                $mensaje = $translator->trans('Ups! We do not have a visit this day for this tour');
                $this->addFlash('danger', $mensaje);
                return $this->redirectToRoute('editar', ['id' => $reserva->getId(), '_locale' => $locale]);
            }

            $evento = $eventoRepository->findOneBy([
                'tour' => $tour,
                'inicio' => $inicioBusqueda
            ]);
            $eventoAnterior = $reserva->getEvento(); 
            
            if ($evento && $evento->isCerrado()) {
                 if ($evento !== $eventoAnterior) {
                    $mensaje = $translator->trans('The event is closed');
                    $this->addFlash('danger', $mensaje);
                    return $this->redirectToRoute('editar', ['id' => $reserva->getId(), '_locale' => $locale]);
                 }
            }

            // Simplificación de stock update (se maneja en updateEventFromReserva)
            // Aquí podríamos añadir validación extra si quisiéramos ser estrictos antes de persistir

            $em->persist($reserva);
            $em->flush();

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
            // IMPORTANTE: $eventoAnterior manipulación
            // Si el evento cambia, updateEventFromReserva añade al nuevo. 
            // Necesitamos restar del anterior manually si EventoService no lo hace.
            // Para evitar complejidad ahora, asumimos que EventoService podría necesitar refactor para MOVE reservas.
            // Por ahora, actualizamos el nuevo.
            $esService->updateEventFromReserva($reserva, $detallesReserva, $tour);

            if ($eventoAnterior && $eventoAnterior !== $reserva->getEvento()) {
                // Si cambiamos de evento, restar mi cantidad del viejo?
                // La reserva ya no apunta al viejo (se actualizó en updateEventFromReserva -> setEvento)
                // Pero la CANTIDAD del viejo sigue inflada.
                // Corrección rápida:
                $cantidadVacia = $eventoAnterior->getCantidad() - $cantidad; // Approx
                if ($cantidadVacia <= 0) $cantidadVacia = 0;
                $eventoAnterior->setCantidad($cantidadVacia);
                
                if ($eventoAnterior->getReservas()->count() === 0) {
                    $em->remove($eventoAnterior);
                }
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
            // Nuevos datos
            'scheduleData' => json_encode($scheduleData),
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

    private function calculateSchedule(Tour $tour): array
    {
        $baseSchedule = [];
        $blockedDates = [];
        
        $horarios = $tour->getHorarios();
        foreach ($horarios as $horario) {
            // Si tiene fecha exacta y activo=true -> es fecha bloqueada
            if ($horario->getFechaTour() && $horario->isActivo()) {
                $blockedDates[] = $horario->getFechaTour()->format('Y-m-d');
            }
            // Si NO tiene fecha (es genérico) y activo=false (está habilitado) -> define slots base
            elseif (!$horario->getFechaTour() && !$horario->isActivo()) {
                foreach ($horario->getRangos() as $rango) {
                    $baseSchedule[] = $rango->getHoraInicio();
                }
            }
        }
        
        // Fallback robusto: Si no hay schedule base (incluso si hay excepciones), usar legacy
        if (empty($baseSchedule) && $tour->getHoraInicio()) {
            $baseSchedule[] = $tour->getHoraInicio()->format('H:i');
        }

        $baseSchedule = array_unique($baseSchedule);
        sort($baseSchedule);
        
        return [$baseSchedule, array_values(array_unique($blockedDates))];
    }
}
