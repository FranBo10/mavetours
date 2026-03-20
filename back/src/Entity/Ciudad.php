<?php

namespace App\Entity;

use App\Repository\CiudadRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\SearchFilter;

#[ApiResource(
    operations: [
        new GetCollection(
            normalizationContext: ['groups' => ['ciudad:list']]
        ),
        new Get(
            normalizationContext: ['groups' => ['ciudad:list', 'ciudad:item']]
        )
    ]
)]
#[ApiFilter(SearchFilter::class, properties: ['destino' => 'exact'])]
#[ORM\Entity(repositoryClass: CiudadRepository::class)]
class Ciudad
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['ciudad:list', 'ciudad:item', 'destino:item', 'tour:mini'])]
    private ?int $id = null;

    #[ORM\Column(length: 120)]
    #[Groups(['ciudad:list', 'ciudad:item', 'destino:item', 'tour:mini'])]
    private ?string $nombre = null;

    #[ORM\Column(length: 200, unique: true)]
    #[Groups(['ciudad:list', 'ciudad:item', 'destino:item'])]
    private ?string $slug = null;

    // País como ISO2 string (FR, BE, NL...)
    #[ORM\Column(length: 2)]
    #[Groups(['ciudad:list', 'ciudad:item', 'destino:item'])]
    private ?string $pais = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['ciudad:list', 'ciudad:item', 'destino:item'])]
    private ?string $imagen = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['ciudad:item'])]
    private ?string $descripcion = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['ciudad:item'])]
    private ?string $descripcion_es = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['ciudad:item'])]
    private ?string $descripcion_fr = null;

    #[ORM\Column(options: ['default' => true])]
    #[Groups(['ciudad:list', 'destino:item'])]
    private bool $isActive = true;

    #[ORM\ManyToOne(inversedBy: 'ciudades')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Destino $destino = null;

    #[ORM\OneToMany(mappedBy: 'ciudad', targetEntity: Tour::class)]
    private Collection $tours;

    #[ORM\OneToMany(mappedBy: 'ciudad', targetEntity: Blog::class)]
    private Collection $blogs;

    public function __construct()
    {
        $this->tours = new ArrayCollection();
        $this->blogs = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->nombre ?? 'Ciudad';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(string $nombre): self
    {
        $this->nombre = $nombre;
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

    public function getPais(): ?string
    {
        return $this->pais;
    }

    public function setPais(?string $pais): self
    {
        $this->pais = $pais ? strtoupper($pais) : null;
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

    public function getDescripcionEs(): ?string
    {
        return $this->descripcion_es;
    }

    public function setDescripcionEs(?string $descripcion_es): self
    {
        $this->descripcion_es = $descripcion_es;
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

    public function isActive(): bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;
        return $this;
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
            $tour->setCiudad($this);
        }
        return $this;
    }

    public function removeTour(Tour $tour): self
    {
        if ($this->tours->removeElement($tour)) {
            if ($tour->getCiudad() === $this) {
                $tour->setCiudad(null);
            }
        }
        return $this;
    }

    /**
     * @return Collection<int, Blog>
     */
    public function getBlogs(): Collection
    {
        return $this->blogs;
    }

    public function addBlog(Blog $blog): self
    {
        if (!$this->blogs->contains($blog)) {
            $this->blogs->add($blog);
            $blog->setCiudad($this);
        }
        return $this;
    }

    public function removeBlog(Blog $blog): self
    {
        if ($this->blogs->removeElement($blog)) {
            if ($blog->getCiudad() === $this) {
                $blog->setCiudad(null);
            }
        }
        return $this;
    }
}
