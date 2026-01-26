<?php

namespace App\Controller\Api;

use App\Entity\Reserva;
use App\Entity\DetallesReserva;
use App\Entity\Tour;
use App\Entity\Evento;
use App\Repository\ReservaRepository;
use App\Repository\TourRepository;
use App\Repository\EventoRepository;
use App\Service\EventoService;
use App\Service\MailerService;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/reservas')]
class ReservaApiController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private ReservaRepository $reservaRepository,
        private TourRepository $tourRepository,
        private EventoRepository $eventoRepository,
        private EventoService $eventoService,
        private MailerService $mailerService,
        private TranslatorInterface $translator,
    ) {}

    /**
     * GET /api/reservas
     * Listar reservas del usuario autenticado
     */
    #[Route('', name: 'api_reservas_index', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function index(): JsonResponse
    {
        $user = $this->getUser();

        $reservas = $this->reservaRepository->findBy(
            ['user' => $user],
            ['id' => 'DESC']
        );

        $data = [];
        foreach ($reservas as $reserva) {
            $data[] = $this->serializeReserva($reserva);
        }

        return $this->json([
            'success' => true,
            'data' => $data,
            'total' => count($data),
        ]);
    }

    /**
     * GET /api/reservas/{id}
     * Ver detalle de una reserva
     */
    #[Route('/{id}', name: 'api_reservas_show', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function show(int $id): JsonResponse
    {
        $reserva = $this->reservaRepository->find($id);

        if (!$reserva) {
            return $this->json([
                'success' => false,
                'error' => 'Reserva no encontrada',
            ], Response::HTTP_NOT_FOUND);
        }

        // Asegurar que la reserva pertenece al usuario (o que es admin)
        $user = $this->getUser();
        if ($reserva->getUser() !== $user && !$this->isGranted('ROLE_ADMIN')) {
            return $this->json([
                'success' => false,
                'error' => 'Acceso denegado',
            ], Response::HTTP_FORBIDDEN);
        }

        return $this->json([
            'success' => true,
            'data' => $this->serializeReserva($reserva),
        ]);
    }

    /**
     * POST /api/reservas
     * Crear una nueva reserva
     * 
     * Body JSON esperado:
     * {
     *   "tour_id": 1,
     *   "fecha_evento": "2025-07-01",
     *   "cantidad_adultos": 2,
     *   "cantidad_kids": 1
     * }
     */
    #[Route('', name: 'api_reservas_create', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function create(Request $request): JsonResponse
    {
        $user = $this->getUser();
        $locale = $request->getLocale();

        $data = json_decode($request->getContent(), true) ?? [];

        $tourId = $data['tour_id'] ?? null;
        $fechaEventoStr = $data['fecha_evento'] ?? null;
        $cantidadAdultos = (int)($data['cantidad_adultos'] ?? 0);
        $cantidadKids = (int)($data['cantidad_kids'] ?? 0);

        if (!$tourId || !$fechaEventoStr || ($cantidadAdultos + $cantidadKids) <= 0) {
            return $this->json([
                'success' => false,
                'error' => 'Datos incompletos para crear la reserva',
            ], Response::HTTP_BAD_REQUEST);
        }

        $tour = $this->tourRepository->find($tourId);
        if (!$tour) {
            return $this->json([
                'success' => false,
                'error' => 'Tour no encontrado',
            ], Response::HTTP_NOT_FOUND);
        }

        try {
            $fechaEvento = new DateTime($fechaEventoStr);
        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'error' => 'Formato de fecha inválido (usar Y-m-d)',
            ], Response::HTTP_BAD_REQUEST);
        }

        // Validación: fecha no puede ser anterior a hoy
        $hoy = new DateTime('today');
        if ($fechaEvento < $hoy) {
            $mensaje = $this->translator->trans('The date of the event cannot be earlier than the current date, please modify the date of the reservation');
            return $this->json([
                'success' => false,
                'error' => $mensaje,
            ], Response::HTTP_BAD_REQUEST);
        }

        $cantidad = $cantidadAdultos + $cantidadKids;
        $precio = $tour->getPrecio();
        $totalReserva = $cantidad * $precio;

        // Comprobar evento existente para ese tour y fecha
        $evento = $this->eventoRepository->findOneBy([
            'tour' => $tour,
            'fecha_evento' => $fechaEvento,
        ]);

        if ($evento && $evento->isCerrado()) {
            $mensaje = $this->translator->trans('The event is closed and cannot receive further reservations');
            return $this->json([
                'success' => false,
                'error' => $mensaje,
            ], Response::HTTP_BAD_REQUEST);
        }

        // Comprobar stock por reserva individual
        if ($cantidad >= $tour->getStock()) {
            $mensaje = $this->translator->trans('Sorry! The maximum number of participants for this event has been reached');
            return $this->json([
                'success' => false,
                'error' => $mensaje,
            ], Response::HTTP_BAD_REQUEST);
        }

        // Comprobar stock acumulado en Evento (si ya existe)
        if ($evento) {
            $cantidadEvento = $evento->getCantidad();
            $cantidadTotal = $cantidadEvento + $cantidad;
            $stock = $tour->getStock();
            $cantidadRestante = ($stock - $cantidadEvento) - 1;

            if ($cantidadTotal >= $stock) {
                $mensaje = $this->translator->trans(
                    "We inform you that there are only " . $cantidadRestante . " places left free for today's activity"
                );
                return $this->json([
                    'success' => false,
                    'error' => $mensaje,
                ], Response::HTTP_BAD_REQUEST);
            }
        }

        // Crear DetallesReserva
        $detallesReserva = new DetallesReserva();
        $detallesReserva
            ->setFechaEvento($fechaEvento)
            ->setCantidadAdultos($cantidadAdultos)
            ->setCantidadKids($cantidadKids)
            ->setCantidad($cantidad)
            ->setTotalReserva($totalReserva);

        // Crear Reserva
        $reserva = new Reserva();
        $reserva
            ->setUser($user)
            ->setEstado('Añadir guía')
            ->setReferencia(uniqid())
            ->setDetallesReserva($detallesReserva)
            ->addTour($tour);

        $this->em->persist($reserva);
        $this->em->flush();

        // Asunto del email según locale
        $subjects = [
            'es' => 'Confirmación de su reserva – %s',
            'fr' => 'Confirmation de votre réservation – %s',
            'en' => 'Booking confirmation – %s',
        ];
        $templateSubject = $subjects[$locale] ?? $subjects['en'];
        $tourName = $tour->getTitulo();
        $subject = sprintf($templateSubject, $tourName);

        // Enviar email al cliente
        $this->mailerService->send(
            $reserva->getUser()->getEmail(),
            $subject,
            'confirmation_nueva_reserva_email.html.twig',
            [
                'user' => $user,
                'tour' => $tour,
                'reserva' => $reserva,
                'locale' => $locale,
            ]
        );

        // Notificar al admin
        $this->mailerService->send(
            'reserva@freetourparis.com',
            'Nueva reserva realizada',
            'notification_nueva_reserva_email.html.twig',
            [
                'reserva' => $reserva,
                'user' => $user,
            ]
        );

        // Actualizar/crear Evento a partir de la reserva
        $this->eventoService->updateEventFromReserva($reserva, $detallesReserva, $tour);

        return $this->json([
            'success' => true,
            'message' => $this->translator->trans('Your booking has been confirmed, an e-mail has been sent, please check the spam'),
            'data' => $this->serializeReserva($reserva),
        ], Response::HTTP_CREATED);
    }

    /**
     * PATCH /api/reservas/{id}
     * Modificar una reserva existente (similar a tu método editar)
     */
    #[Route('/{id}', name: 'api_reservas_update', methods: ['PATCH', 'PUT'])]
    #[IsGranted('ROLE_USER')]
    public function update(int $id, Request $request): JsonResponse
    {
        $reserva = $this->reservaRepository->find($id);
        $user = $this->getUser();
        $locale = $request->getLocale();

        if (!$reserva) {
            return $this->json([
                'success' => false,
                'error' => 'Reserva no encontrada',
            ], Response::HTTP_NOT_FOUND);
        }

        if ($reserva->getUser() !== $user && !$this->isGranted('ROLE_ADMIN')) {
            return $this->json([
                'success' => false,
                'error' => 'Acceso denegado',
            ], Response::HTTP_FORBIDDEN);
        }

        $data = json_decode($request->getContent(), true) ?? [];

        $detallesReserva = $reserva->getDetallesReserva();
        $tour = $reserva->getTours()->first();
        $eventoAnterior = $reserva->getEvento();

        $cantidadAdultos = (int)($data['cantidad_adultos'] ?? $detallesReserva->getCantidadAdultos());
        $cantidadKids = (int)($data['cantidad_kids'] ?? $detallesReserva->getCantidadKids());
        $fechaEventoStr = $data['fecha_evento'] ?? $detallesReserva->getFechaEvento()->format('Y-m-d');

        try {
            $fechaEvento = new DateTime($fechaEventoStr);
        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'error' => 'Formato de fecha inválido (usar Y-m-d)',
            ], Response::HTTP_BAD_REQUEST);
        }

        $hoy = new DateTime('today');
        if ($fechaEvento < $hoy) {
            $mensaje = $this->translator->trans('The date of the event cannot be earlier than the current date, please modify the date of the reservation');
            return $this->json([
                'success' => false,
                'error' => $mensaje,
            ], Response::HTTP_BAD_REQUEST);
        }

        $cantidad = $cantidadAdultos + $cantidadKids;
        $precio = $tour->getPrecio();
        $totalReserva = $cantidad * $precio;

        $detallesReserva
            ->setCantidadAdultos($cantidadAdultos)
            ->setCantidadKids($cantidadKids)
            ->setCantidad($cantidad)
            ->setTotalReserva($totalReserva)
            ->setFechaEvento($fechaEvento);

        $this->em->persist($reserva);
        $this->em->flush();

        // Email de modificación al cliente
        $this->mailerService->send(
            $reserva->getUser()->getEmail(),
            'Modificacion de su reserva',
            'confirmation_modification_reserva_email.html.twig',
            [
                'user' => $user,
                'tour' => $tour,
                'reserva' => $reserva,
            ]
        );

        // Notificación al admin
        $this->mailerService->send(
            'reserva@freetourparis.com',
            'Modificacion reserva realizada',
            'notification_modification_reserva_email.html.twig',
            [
                'reserva' => $reserva,
                'user' => $user,
            ]
        );

        // Actualizar evento según la reserva modificada
        $this->eventoService->updateEventFromReserva($reserva, $detallesReserva, $tour);

        // Eliminar evento anterior si se queda sin reservas
        if ($eventoAnterior && $eventoAnterior->getReservas()->count() === 0) {
            $this->em->remove($eventoAnterior);
            $this->em->flush();
        }

        $mensaje = $this->translator->trans('Your booking has been successfully modified, you can find the details on your profile');

        return $this->json([
            'success' => true,
            'message' => $mensaje,
            'data' => $this->serializeReserva($reserva),
        ]);
    }

    /**
     * DELETE /api/reservas/{id}
     * Cancelar / eliminar una reserva
     */
    #[Route('/{id}', name: 'api_reservas_delete', methods: ['DELETE'])]
    #[IsGranted('ROLE_USER')]
    public function delete(int $id): JsonResponse
    {
        $reserva = $this->reservaRepository->find($id);
        $user = $this->getUser();

        if (!$reserva) {
            return $this->json([
                'success' => false,
                'error' => 'Reserva no encontrada',
            ], Response::HTTP_NOT_FOUND);
        }

        if ($reserva->getUser() !== $user && !$this->isGranted('ROLE_ADMIN')) {
            return $this->json([
                'success' => false,
                'error' => 'Acceso denegado',
            ], Response::HTTP_FORBIDDEN);
        }

        $this->em->remove($reserva);
        $this->em->flush();

        return $this->json([
            'success' => true,
            'message' => $this->translator->trans('Booking cancelled or deleted'),
        ]);
    }

    /**
     * Serializar la reserva para la API
     */
    private function serializeReserva(Reserva $reserva): array
    {
        $detalles = $reserva->getDetallesReserva();
        $tour = $reserva->getTours()->first();

        return [
            'id' => $reserva->getId(),
            'referencia' => $reserva->getReferencia(),
            'estado' => $reserva->getEstado(),
            'user_id' => $reserva->getUser() ? $reserva->getUser()->getId() : null,
            'tour' => $tour ? [
                'id' => $tour->getId(),
                'titulo' => $tour->getTitulo(),
                'precio' => $tour->getPrecio(),
            ] : null,
            'detalles' => $detalles ? [
                'fecha_evento' => $detalles->getFechaEvento() ? $detalles->getFechaEvento()->format('Y-m-d') : null,
                'cantidad_adultos' => $detalles->getCantidadAdultos(),
                'cantidad_kids' => $detalles->getCantidadKids(),
                'cantidad' => $detalles->getCantidad(),
                'total_reserva' => $detalles->getTotalReserva(),
            ] : null,
        ];
    }
}
