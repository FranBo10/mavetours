<?php

namespace App\Entity;

use App\Repository\CircuitoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;

#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => ['circuito:list', 'circuito:mini']]
        ),
        new Get(
            normalizationContext: ['groups' => ['circuito:item', 'circuito:mini']]
        )
    ]
)]
#[ApiFilter(SearchFilter::class, properties: ['destino' => 'exact'])]
#[ORM\Entity(repositoryClass: CircuitoRepository::class)]
#[UniqueEntity(fields: ['slug'], message: 'Este slug ya existe.')]
class Circuito
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 200, unique: true, nullable: true)]
    private ?string $slug = null;

    #[ORM\Column(options: ['default' => true])]
    private bool $isActive = true;

    #[ORM\Column(length: 180)]
    #[Groups(['circuito:mini', 'circuito:item'])]
    private ?string $titulo = null;

    #[ORM\Column(length: 180, nullable: true)]
    #[Groups(['circuito:mini', 'circuito:item'])]
    private ?string $titulo_es = null;

    #[ORM\Column(length: 180, nullable: true)]
    #[Groups(['circuito:mini', 'circuito:item'])]
    private ?string $titulo_fr = null;

    #[ORM\ManyToOne(inversedBy: 'circuitos')]
    #[ORM\JoinColumn(nullable: true)]
    #[Groups(['circuito:mini', 'circuito:item'])]
    private ?Destino $destino = null;

    #[ORM\OneToMany(mappedBy: 'circuito', targetEntity: Etapa::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
    #[Groups(['circuito:item'])]
    #[ORM\OrderBy(['orden' => 'ASC'])]
    private Collection $etapas;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['circuito:mini', 'circuito:item'])]
    private ?string $imagen = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['circuito:item'])]
    private ?string $descripcion = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['circuito:item'])]
    private ?string $descripcion_fr = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['circuito:item'])]
    private ?string $descripcion_es = null;

    // --- Campos “producto/reserva” ---
    #[ORM\Column(nullable: true)]
    private ?float $precio = null;

    #[ORM\Column(nullable: true)]
    private ?bool $estado = null;

    #[ORM\Column(nullable: true)]
    private ?int $orden = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock = null;

    #[ORM\ManyToMany(targetEntity: Reserva::class, mappedBy: 'circuitos')]
    private Collection $reservas;

    #[ORM\OneToMany(mappedBy: 'circuito', targetEntity: Evento::class)]
    private Collection $eventos;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $mapaComienzo = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $mapaFinal = null;

    public function __construct()
    {
        $this->etapas = new ArrayCollection();
        $this->reservas = new ArrayCollection();
        $this->eventos = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->titulo ?: 'Circuito';
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function getDestino(): ?Destino
    {
        return $this->destino;
    }

    public function setDestino(?Destino $destino): self
    {
        $this->destino = $destino;
        return $this;
    }


    public function getSlug(): string
    {
        return $this->slug;
    }

    public function setSlug(string $slug): self
    {
        $this->slug = $slug;
        return $this;
    }
       

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;
        return $this;
    }

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }

    public function setTitulo(?string $titulo): self
    {
        $this->titulo = $titulo;
        return $this;
    }

    public function getTituloEs(): ?string
    {
        return $this->titulo_es;
    }

    public function setTituloEs(?string $titulo_es): self
    {
        $this->titulo_es = $titulo_es;
        return $this;
    }

    public function getTituloFr(): ?string
    {
        return $this->titulo_fr;
    }

    public function setTituloFr(?string $titulo_fr): self
    {
        $this->titulo_fr = $titulo_fr;
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

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): self
    {
        $this->descripcion = $descripcion;
        return $this;
    }

    public function getDescripcionFr(): ?string
    {
        return $this->descripcion_fr;
    }

    public function setDescripcionFr(?string $descripcion_fr): self
    {
        $this->descripcion_fr = $descripcion_fr;
        return $this;
    }

    public function getDescripcionEs(): ?string
    {
        return $this->descripcion_es;
    }

    public function setDescripcionEs(?string $descripcion_es): self
    {
        $this->descripcion_es = $descripcion_es;
        return $this;
    }

    public function getPrecio(): ?float
    {
        return $this->precio;
    }

    public function setPrecio(?float $precio): self
    {
        $this->precio = $precio;
        return $this;
    }

    public function getEstado(): ?bool
    {
        return $this->estado;
    }

    public function setEstado(?bool $estado): self
    {
        $this->estado = $estado;
        return $this;
    }

    public function getOrden(): ?int
    {
        return $this->orden;
    }

    public function setOrden(?int $orden): self
    {
        $this->orden = $orden;
        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): self
    {
        $this->stock = $stock;
        return $this;
    }

    /**
     * @return Collection<int, Reserva>
     */
    public function getReservas(): Collection
    {
        return $this->reservas;
    }

    public function addReserva(Reserva $reserva): self
    {
        if (!$this->reservas->contains($reserva)) {
            $this->reservas->add($reserva);
            $reserva->addCircuito($this);
        }

        return $this;
    }

    public function removeReserva(Reserva $reserva): self
    {
        if ($this->reservas->removeElement($reserva)) {
            $reserva->removeCircuito($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Evento>
     */
    public function getEventos(): Collection
    {
        return $this->eventos;
    }

    public function addEvento(Evento $evento): self
    {
        if (!$this->eventos->contains($evento)) {
            $this->eventos->add($evento);
            $evento->setCircuito($this);
        }

        return $this;
    }

    public function removeEvento(Evento $evento): self
    {
        if ($this->eventos->removeElement($evento)) {
            if ($evento->getCircuito() === $this) {
                $evento->setCircuito(null);
            }
        }

        return $this;
    }



    /**
     * @return Collection<int, Etapa>
     */
    public function getEtapas(): Collection
    {
        return $this->etapas;
    }

    public function addEtapa(Etapa $etapa): self
    {
        if (!$this->etapas->contains($etapa)) {
            $this->etapas->add($etapa);
            $etapa->setCircuito($this);
        }
        return $this;
    }

    public function removeEtapa(Etapa $etapa): self
    {
        if ($this->etapas->removeElement($etapa)) {
            if ($etapa->getCircuito() === $this) {
                $etapa->setCircuito(null);
            }
        }
        return $this;
    }

    public function getMapaComienzo(): ?string
    {
        return $this->mapaComienzo;
    }

    public function setMapaComienzo(?string $mapaComienzo): self
    {
        $this->mapaComienzo = $mapaComienzo;
        return $this;
    }

    public function getMapaFinal(): ?string
    {
        return $this->mapaFinal;
    }

    public function setMapaFinal(?string $mapaFinal): self
    {
        $this->mapaFinal = $mapaFinal;
        return $this;
    }

}
