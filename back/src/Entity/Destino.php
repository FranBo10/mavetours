<?php

namespace App\Entity;

use App\Repository\DestinoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;

#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => ['destino:list']]
        ),
        new Get(
            normalizationContext: ['groups' => ['destino:list', 'destino:item']]
        )
    ]
)]
#[ORM\Entity(repositoryClass: DestinoRepository::class)]
class Destino
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['destino:list', 'destino:item', 'tour:mini'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['destino:list', 'destino:item', 'tour:mini'])]
    private ?string $titulo = null;

    #[ORM\Column(length: 255, unique: true)]
    #[Groups(['destino:list', 'destino:item'])]
    private ?string $slug = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $fechaCreacion = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['destino:list', 'destino:item'])]
    private ?string $imagen = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['destino:list', 'destino:item'])]
    private ?string $descripcionCorta = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['destino:item'])]
    private ?string $descripcionLarga = null;

    #[ORM\Column]
    #[Groups(['destino:list'])]
    private ?bool $isActive = true;

    #[ORM\OneToMany(mappedBy: 'destino', targetEntity: Circuito::class)]
    #[Groups(['destino:item'])]
    private Collection $circuitos;

    #[ORM\OneToMany(mappedBy: 'destino', targetEntity: Tour::class)]
    private Collection $tours;

    #[ORM\OneToMany(mappedBy: 'destino', targetEntity: Ciudad::class)]
    #[Groups(['destino:item'])]
    private Collection $ciudades;

    public function __construct()
    {
        $this->circuitos = new ArrayCollection();
        $this->tours = new ArrayCollection();
        $this->ciudades = new ArrayCollection();
        $this->fechaCreacion = new \DateTime();
    }

    public function __toString(): string
    {
        return $this->titulo ?? 'Destino';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }

    public function setTitulo(string $titulo): self
    {
        $this->titulo = $titulo;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public function getFechaCreacion(): ?\DateTimeInterface
    {
        return $this->fechaCreacion;
    }

    public function setFechaCreacion(\DateTimeInterface $fechaCreacion): self
    {
        $this->fechaCreacion = $fechaCreacion;

        return $this;
    }

    public function getImagen(): ?string
    {
        return $this->imagen;
    }

    public function setImagen(?string $imagen): self
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getDescripcionCorta(): ?string
    {
        return $this->descripcionCorta;
    }

    public function setDescripcionCorta(?string $descripcionCorta): self
    {
        $this->descripcionCorta = $descripcionCorta;

        return $this;
    }

    public function getDescripcionLarga(): ?string
    {
        return $this->descripcionLarga;
    }

    public function setDescripcionLarga(?string $descripcionLarga): self
    {
        $this->descripcionLarga = $descripcionLarga;

        return $this;
    }

    public function isIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    /**
     * @return Collection<int, Circuito>
     */
    public function getCircuitos(): Collection
    {
        return $this->circuitos;
    }

    public function addCircuito(Circuito $circuito): self
    {
        if (!$this->circuitos->contains($circuito)) {
            $this->circuitos->add($circuito);
            $circuito->setDestino($this);
        }

        return $this;
    }

    public function removeCircuito(Circuito $circuito): self
    {
        if ($this->circuitos->removeElement($circuito)) {
            // set the owning side to null (unless already changed)
            if ($circuito->getDestino() === $this) {
                $circuito->setDestino(null);
            }
        }

        return $this;
    }

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
            $tour->setDestino($this);
        }

        return $this;
    }

    public function removeTour(Tour $tour): self
    {
        if ($this->tours->removeElement($tour)) {
            // set the owning side to null (unless already changed)
            if ($tour->getDestino() === $this) {
                $tour->setDestino(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Ciudad>
     */
    public function getCiudades(): Collection
    {
        return $this->ciudades;
    }

    public function addCiudad(Ciudad $ciudad): self
    {
        if (!$this->ciudades->contains($ciudad)) {
            $this->ciudades->add($ciudad);
            $ciudad->setDestino($this);
        }

        return $this;
    }

    public function removeCiudad(Ciudad $ciudad): self
    {
        if ($this->ciudades->removeElement($ciudad)) {
            if ($ciudad->getDestino() === $this) {
                $ciudad->setDestino(null);
            }
        }

        return $this;
    }
}
