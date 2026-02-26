<?php

namespace App\Entity;

use App\Repository\EtapaRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: EtapaRepository::class)]
#[ApiResource(
    operations: [
        new Get(
            normalizationContext: ['groups' => ['etapa:read']]
        ),
        new GetCollection(
            normalizationContext: ['groups' => ['etapa:read']]
        )
    ]
)]
class Etapa
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['etapa:read', 'circuito:item'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['etapa:read', 'circuito:item'])]
    private ?string $titulo = null;

    #[ORM\Column(name: 'dia_numero')]
    #[Groups(['etapa:read', 'circuito:item'])]
    private int $diaNumero = 1;

    #[ORM\ManyToOne(inversedBy: 'etapas')]
    #[ORM\JoinColumn(nullable: false, onDelete: 'CASCADE')]
    private ?Circuito $circuito = null;

    // País como ISO2 string (FR, BE, NL...)
    #[ORM\Column(length: 2)]
    #[Groups(['etapa:read', 'circuito:item'])]
    private ?string $pais = null;

    // Ciudad como string seleccionada por ChoiceField
    #[ORM\Column(length: 120, nullable: true)]
    #[Groups(['etapa:read', 'circuito:item'])]
    private ?string $ciudad = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['etapa:read', 'circuito:item'])]
    private ?string $descripcion = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['etapa:read', 'circuito:item'])]
    private ?int $orden = null;

    #[ORM\Column(length: 80, nullable: true)]
    #[Groups(['etapa:read', 'circuito:item'])]
    private ?string $transporte = null;

    /* ========================= */
    /*        GETTERS/SETTERS    */
    /* ========================= */

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDiaNumero(): int
    {
        return $this->diaNumero;
    }

    public function setDiaNumero(int $diaNumero): self
    {
        $this->diaNumero = $diaNumero;
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

    public function getPais(): ?string
    {
        return $this->pais;
    }

    public function setPais(?string $pais): self
    {
        $this->pais = strtoupper($pais);
        return $this;
    }

    public function getCiudad(): ?string
    {
        return $this->ciudad;
    }

    public function setCiudad(?string $ciudad): self
    {
        $this->ciudad = $ciudad;
        return $this;
    }

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(string $descripcion): self
    {
        $this->descripcion = $descripcion;
        return $this;
    }

    public function getOrden(): ?int
    {
        return $this->orden;
    }

    public function setOrden(int $orden): self
    {
        $this->orden = $orden;
        return $this;
    }

    public function getTransporte(): ?string
    {
        return $this->transporte;
    }

    public function setTransporte(?string $transporte): self
    {
        $this->transporte = $transporte;
        return $this;
    }

    public function getCircuito(): ?Circuito
    {
        return $this->circuito;
    }

    public function setCircuito(?Circuito $circuito): self
    {
        $this->circuito = $circuito;
        return $this;
    }

    public function __toString(): string
    {
        return 'Día ' . $this->diaNumero;
    }
}