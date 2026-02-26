<?php

namespace App\Repository;

use App\Entity\Ciudad;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Ciudad>
 */
class CiudadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ciudad::class);
    }

    /**
     * Devuelve las ciudades activas filtradas por código de país ISO2.
     *
     * @return Ciudad[]
     */
    public function findByPais(string $pais): array
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.pais = :pais')
            ->andWhere('c.isActive = true')
            ->setParameter('pais', strtoupper($pais))
            ->orderBy('c.nombre', 'ASC')
            ->getQuery()
            ->getResult();
    }
}
