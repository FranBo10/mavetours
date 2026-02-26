<?php

namespace App\Service;

use DateTime;
use App\Entity\User;
use App\Entity\Evento;
use DateTimeImmutable;
use Doctrine\ORM\EntityManagerInterface;

class EventoService
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function updateEventFromReserva($reserva)
    {
        // Lógica para crear o actualizar el evento según el tour y la fecha de la reserva
        $tours = $reserva->getTours();
        $detallesReserva = $reserva->getDetallesReserva();
        
        $fechaReservaDate = $detallesReserva->getFechaEvento(); // DateTime sin hora (00:00)
        $horaEvento = $detallesReserva->getHoraEvento(); // DateTime (hora)

        // Construir el DateTime de inicio combinando fecha y hora
        $inicioDateTime = clone $fechaReservaDate;
        if ($horaEvento) {
            $inicioDateTime->setTime(
                (int)$horaEvento->format('H'),
                (int)$horaEvento->format('i'),
                0
            );
        } else {
            // Si no hay hora, se queda a las 00:00 (o lógica por defecto)
            $inicioDateTime->setTime(0, 0, 0);
        }

        // Calcular Fin (por defecto +2h si no hay lógica compleja de duración)
        $finDateTime = clone $inicioDateTime;
        $finDateTime->modify('+2 hours');

        $tour = $tours->first();
        $titulo = $tour->getTitulo();

        $cantidadAdultos = $detallesReserva->getCantidadAdultos();
        $cantidadKids = $detallesReserva->getCantidadKids();
        $color = "#18bb9c";

        if ($cantidadAdultos !== null && $cantidadKids !== null) {
            $cantidadAsistentes = $cantidadAdultos + $cantidadKids;
        } else {
            $cantidadAsistentes = 0;
        }

        // Consulta si ya existe un evento para este tour e INICIO exacto
        $evento = $this->em
            ->getRepository(Evento::class)
            ->findOneBy(['tour' => $tour, 'inicio' => $inicioDateTime]);

        if (!$evento) {
            // Si no existe, crea un nuevo evento
            $evento = new Evento();
            $evento->setTour($tour)
                ->setFechaEvento($fechaReservaDate); // Mantiene la fecha base (Y-m-d 00:00)

            $evento->setTitulo($titulo)
                ->setInicio($inicioDateTime)
                ->setFin($finDateTime)
                ->setCantidad($cantidadAsistentes) 
                ->setColor($color)
                ->setCerrado(false)
                ->addReserva($reserva);

            // Guarda el evento en la base de datos
            $this->em->persist($evento);
            $this->em->flush();
        } else {
            // Si el evento ya existe, actualiza la cantidad sumando la cantidad de la nueva reserva
            $evento->setCantidad($evento->getCantidad() + $cantidadAsistentes);

            // Actualiza las propiedades del evento según la reserva
            $evento->setTitulo($titulo)
                ->setInicio($inicioDateTime)
                ->setFin($finDateTime)
                // ->setFechaEvento($fechaReservaDate) // Ya debería estar correcto
                ->setColor($color)
                ->setCerrado(false)
                ->addReserva($reserva);

            // Guarda el evento en la base de datos
            $this->em->persist($evento);
            $this->em->flush();
        }
    }
}
