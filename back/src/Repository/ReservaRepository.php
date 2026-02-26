<?php

namespace App\Repository;

use App\Entity\Tour;
use App\Entity\User;
use App\Entity\Reserva;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Reserva>
 *
 * @method Reserva|null find($id, $lockMode = null, $lockVersion = null)
 * @method Reserva|null findOneBy(array $criteria, array $orderBy = null)
 * @method Reserva[]    findAll()
 * @method Reserva[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReservaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Reserva::class);
    }

    public function save(Reserva $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Reserva $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Checks if a user already has a reservation for the same tour, date and time.
     */
    public function findDuplicateReservation(User $user, Tour $tour, \DateTimeInterface $fechaEvento, \DateTimeInterface $horaEvento): ?Reserva
    {
        return $this->createQueryBuilder('r')
            ->innerJoin('r.tours', 't')
            ->innerJoin('r.detallesReserva', 'dr')
            ->where('r.user = :user')
            ->andWhere('t = :tour')
            ->andWhere('dr.fecha_evento = :fecha')
            ->andWhere('dr.hora_evento = :hora')
            ->setParameter('user', $user)
            ->setParameter('tour', $tour)
            ->setParameter('fecha', $fechaEvento)
            ->setParameter('hora', $horaEvento)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
