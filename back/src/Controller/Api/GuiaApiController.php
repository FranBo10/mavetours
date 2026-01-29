<?php

namespace App\Controller\Api;

use App\Entity\Evento;
use App\Entity\DetallesEvento;
use App\Repository\EventoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/guia')]
#[IsGranted('ROLE_ADMIN')] // Or ROLE_GUIA if that exists, using ROLE_ADMIN for now as per AdminController access
class GuiaApiController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $em,
        private EventoRepository $eventoRepository
    ) {}

    #[Route('/events', name: 'api_guia_events', methods: ['GET'])]
    public function index(): JsonResponse
    {
        // Logic mirrored from AdminController::guia
        $events = $this->eventoRepository->findAll();
        $visitas = [];

        foreach ($events as $event) {
            $reservas = $event->getReservas();
            
            // Only include events relevant to calendar display (e.g. have reservations?? AdminController doesn't filter by reservation count explicitly in the loop but the JS might)
            // AdminController JS: let events = eventData.filter(event => event.reservas && event.reservas.length > 0)
            // We will send all, let frontend filter or filter here. Let's send similar structure.

            $inicio = $event->getFechaEvento()->format('Y-m-d'); // ISO format for mobile calendar
            $title = $event->getTitulo();
            $color = $event->getGuiaColor() ?: '#000000';
            $guia = $event->getUser();
            $nombreGuia = $guia ? $guia->getNombre() . ' ' . $guia->getApellidos() : 'Sin guía';
            
            $reservasData = [];
            foreach ($reservas as $reserva) {
                $user = $reserva->getUser();
                $detallesReserva = $reserva->getDetallesReserva();

                if ($user && $detallesReserva) {
                    $reservasData[] = [
                        "id" => $reserva->getId(),
                        "cantidadAsistentes" => $detallesReserva->getCantidad(),
                        "usuario" => $user->getNombre() . ' ' . $user->getApellidos(),
                        "email" => $user->getEmail(),
                        "telefono" => $user->getTelefono()
                    ];
                }
            }
            
            // Only add if there are reservations (visual clutter otherwise?) or just add all
            // The template JS filters: event.reservas.length > 0.
            if (count($reservasData) > 0) {
                 $visitas[] = [
                    "id" => $event->getId(),
                    "title" => $title,
                    "start" => $inicio, // YYYY-MM-DD
                    "startTime" => $event->getTour() && $event->getTour()->getHoraInicio() ? $event->getTour()->getHoraInicio()->format('H:i') : '',
                    "endTime" => $event->getTour() && $event->getTour()->getHoraFin() ? $event->getTour()->getHoraFin()->format('H:i') : '',
                    "color" => $color,
                    "cerrado" => $event->isCerrado(),
                    "reservas" => $reservasData,
                    "guia" => $nombreGuia,
                    "guia_id" => $guia ? $guia->getId() : null
                ];
            }
        }

        return $this->json([
            'success' => true,
            'data' => $visitas
        ]);
    }

    #[Route('/events/{id}', name: 'api_guia_show_event', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        $event = $this->eventoRepository->find($id);
        if (!$event) {
             return $this->json(['success' => false, 'error' => 'Evento no encontrado'], 404);
        }

        $titulo = $event->getTitulo();
        $inicio = $event->getFechaEvento()->format('Y-m-d');
        $color = $event->getGuiaColor() ?: '#000000';
        $guia = $event->getUser();
        $nombreGuia = $guia ? $guia->getNombre() . ' ' . $guia->getApellidos() : 'Sin guía';

        $reservasData = [];
        foreach ($event->getReservas() as $reserva) {
            $user = $reserva->getUser();
            $detallesReserva = $reserva->getDetallesReserva();
            if ($user && $detallesReserva) {
                $reservasData[] = [
                    "id" => $reserva->getId(),
                    "cantidadAsistentes" => $detallesReserva->getCantidad(),
                    "usuario" => $user->getNombre() . ' ' . $user->getApellidos(),
                    "email" => $user->getEmail(),
                    "telefono" => $user->getTelefono()
                ];
            }
        }

        return $this->json([
            'success' => true,
            'data' => [
                "id" => $event->getId(),
                "title" => $titulo,
                "start" => $inicio,
                "startTime" => $event->getTour() && $event->getTour()->getHoraInicio() ? $event->getTour()->getHoraInicio()->format('H:i') : '',
                "endTime" => $event->getTour() && $event->getTour()->getHoraFin() ? $event->getTour()->getHoraFin()->format('H:i') : '',
                "color" => $color,
                "cerrado" => $event->isCerrado(),
                "reservas" => $reservasData,
                "guia" => $nombreGuia,
                "guia_id" => $guia ? $guia->getId() : null
            ]
        ]);
    }

    #[Route('/events/{id}/close', name: 'api_guia_close_event', methods: ['POST'])]
    public function closeEvent(int $id, Request $request, ValidatorInterface $validator): JsonResponse
    {
        $evento = $this->eventoRepository->find($id);

        if (!$evento) {
            return $this->json(['success' => false, 'error' => 'Evento no encontrado'], 404);
        }

        $data = json_decode($request->getContent(), true);

        // Efectivo ya no es obligatorio, default 0
        $efectivo = $data['efectivo'] ?? 0;
        $cantidadAsistentes = (int)($data['cantidad_asistentes'] ?? 0);

        $detallesEvento = new DetallesEvento();
        $detallesEvento
            ->setUser($this->getUser())
            ->setEvento($evento)
            ->setEfectivo((float)$efectivo)
            ->setTarjeta(0) // Default as per legacy
            ->setAsistencia(true)
            ->setCantidadAsistentes($cantidadAsistentes);

        $errors = $validator->validate($detallesEvento);
        if (count($errors) > 0) {
            return $this->json(['success' => false, 'error' => (string)$errors], 400);
        }

        $this->em->persist($detallesEvento);
        
        $evento->setCerrado(true);
        $this->em->persist($evento);

        $this->em->flush();

        return $this->json([
            'success' => true, 
            'message' => 'El tour ha sido validado correctamente'
        ]);
    }
}
