<?php

namespace App\Repository;

use App\Entity\Circuito;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class CircuitoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Circuito::class);
    }

    /**
     * Devuelve los nombres de ciudades (strings) de las etapas de un circuito.
     * @return string[]
     */
    public function findCiudadesDelCircuito(int $circuitoId): array
    {
        $rows = $this->createQueryBuilder('c')
            ->select('DISTINCT e.ciudad')
            ->join('c.etapas', 'e')
            ->where('c.id = :id')
            ->andWhere('e.ciudad IS NOT NULL')
            ->setParameter('id', $circuitoId)
            ->getQuery()
            ->getArrayResult();

        return array_values(array_filter(array_map(fn ($r) => $r['ciudad'], $rows)));
    }

    /**
     * Devuelve los códigos ISO2 de países (strings) de las etapas de un circuito.
     * @return string[]
     */
    public function findPaisesDelCircuito(int $circuitoId): array
    {
        $rows = $this->createQueryBuilder('c')
            ->select('DISTINCT e.pais')
            ->join('c.etapas', 'e')
            ->where('c.id = :id')
            ->andWhere('e.pais IS NOT NULL')
            ->setParameter('id', $circuitoId)
            ->getQuery()
            ->getArrayResult();

        return array_values(array_filter(array_map(fn ($r) => $r['pais'], $rows)));
    }
}
