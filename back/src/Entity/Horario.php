<?php

namespace App\Entity;

use App\Repository\HorarioRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HorarioRepository::class)]
class Horario
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    // ✅ Horario es el OWNING SIDE de la relación con Tour
    #[ORM\ManyToMany(targetEntity: Tour::class, inversedBy: 'horarios')]
    #[ORM\JoinTable(name: 'horario_tour')]
    private Collection $tours;

    #[ORM\Column(options: ['default' => false])]
    private ?bool $activo = false;

    #[ORM\OneToMany(mappedBy: 'horario', targetEntity: Rango::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $rangos;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $fecha_tour = null;

    public function __construct()
    {
        $this->rangos = new ArrayCollection();
        $this->tours = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /* ========================= */
    /*           TOURS           */
    /* ========================= */

    /**
     * @return Collection<int, Tour>
     */
    public function getTours(): Collection
    {
        return $this->tours;
    }

    public function addTour(Tour $tour): self
    {
        if (!$this->tours->contains($tour)) {
            $this->tours->add($tour);
            // Important: mantener consistencia bidireccional
            $tour->addHorario($this);
        }

        return $this;
    }

    public function removeTour(Tour $tour): self
    {
        if ($this->tours->removeElement($tour)) {
            $tour->removeHorario($this);
        }

        return $this;
    }



    /* ========================= */
    /*        OTROS CAMPOS       */
    /* ========================= */

    public function isActivo(): ?bool
    {
        return $this->activo;
    }

    public function setActivo(bool $activo): self
    {
        $this->activo = $activo;
        return $this;
    }

    /**
     * @return Collection<int, Rango>
     */
    public function getRangos(): Collection
    {
        return $this->rangos;
    }

    public function addRango(Rango $rango): self
    {
        if (!$this->rangos->contains($rango)) {
            $this->rangos->add($rango);
            $rango->setHorario($this);
        }

        return $this;
    }

    public function removeRango(Rango $rango): self
    {
        if ($this->rangos->removeElement($rango)) {
            if ($rango->getHorario() === $this) {
                $rango->setHorario(null);
            }
        }

        return $this;
    }

    public function getFechaTour(): ?\DateTimeInterface
    {
        return $this->fecha_tour;
    }

    public function setFechaTour(?\DateTimeInterface $fecha_tour): self
    {
        $this->fecha_tour = $fecha_tour;
        return $this;
    }
}
