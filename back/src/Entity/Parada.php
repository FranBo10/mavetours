<?php

namespace App\Entity;

use App\Entity\Tour;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\ParadaRepository;

#[ORM\Entity(repositoryClass: ParadaRepository::class)]
class Parada
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column(type: 'integer')]
    private int $id;

    #[ORM\Column(type: 'string', length: 255)]
    private string $titulo;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $contenido = null;  
    
    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $contenido_fr = null;  

    #[ORM\Column(type: Types::TEXT)]
    private ?string $mapa = null;

    #[ORM\Column(type: 'float')]
    private float $latitud;

    #[ORM\Column(type: 'float')]
    private float $longitud;

    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $imagen = null;

    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $audioUrl = null;

    #[ORM\Column(type: 'string', nullable: true)]
    private ?string $videoUrl = null;

    #[ORM\ManyToOne(inversedBy: 'reservas')]
    private ?User $user = null;

    #[ORM\ManyToOne(targetEntity: Tour::class, inversedBy: 'paradas')]
    private ?Tour $tour = null;    

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }   

    public function getTitulo(): ?string
    {
        return $this->titulo;
    }
   
    public function setTitulo(?string $titulo): static
    {
        $this->titulo = $titulo;

        return $this;
    }

    public function getContenido(): ?string
    {
        return $this->contenido;
    }
     
    public function setContenido(?string $contenido): static
    {
        $this->contenido = $contenido;

        return $this;
    }

    public function getContenidoFr(): ?string
    {
        return $this->contenido_fr;
    }
     
    public function setContenidoFr(?string $contenido_fr): static
    {
        $this->contenido_fr = $contenido_fr;

        return $this;
    }

    public function getMapa(): ?string
    {
        return $this->mapa;
    }

    public function setMapa(string $mapa): static
    {
        $this->mapa = $mapa;

        return $this;
    }
    
    public function getLatitud(): ?float
    {
        return $this->latitud;
    }
    
    public function setLatitud($latitud): static
    {
        $this->latitud = $latitud;

        return $this;
    }
    
    public function getLongitud(): ?float
    {
        return $this->longitud;
    }
   
    public function setLongitud($longitud): static
    {
        $this->longitud = $longitud;

        return $this;
    }
    
    public function getAudioUrl(): ?string
    {
        return $this->audioUrl;
    }
    
    public function setAudioUrl(?string $audioUrl): static
    {
        $this->audioUrl = $audioUrl;

        return $this;
    }
     
    public function getVideoUrl(): ?string
    {
        return $this->videoUrl;
    }
    
    public function setVideoUrl(?string $videoUrl): static
    {
        $this->videoUrl = $videoUrl;

        return $this;
    }
    
    public function getImagen(): ?string
    {
        return $this->imagen;
    }
   
    public function setImagen(?string $imagen): static
    {
        $this->imagen = $imagen;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getTour(): ?Tour
    {
        return $this->tour;
    }

    public function setTour(?Tour $tour): static
    {
        $this->tour = $tour;

        return $this;
    }
}
