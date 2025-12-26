<?php

namespace App\Controller\Api;

use App\Entity\Tour;
use App\Entity\Comentario;
use App\Entity\Slider;
use App\Repository\TourRepository;
use App\Repository\ComentarioRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/tours')]
class TourApiController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private TourRepository $tourRepository,
        private ComentarioRepository $comentarioRepository
    ) {}

    /**
     * GET /api/tours
     * Obtener todos los tours (para el home)
     */
    #[Route('', name: 'api_tours_index', methods: ['GET'])]
    public function index(): JsonResponse
    {
        try {
            // Si quieres solo tours activos, filtra por ['estado' => true]
            $tours = $this->tourRepository->findBy([], ['orden' => 'ASC']);
            
            $toursData = [];
            foreach ($tours as $tour) {
                $toursData[] = $this->serializeTour($tour);
            }

            return $this->json([
                'success' => true,
                'data' => $toursData,
                'total' => count($toursData),
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'error' => 'Error al obtener los tours',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * GET /api/tours/{id}
     * Obtener detalle de un tour específico
     */
    #[Route('/{id}', name: 'api_tours_show', methods: ['GET'])]
    public function show(int $id): JsonResponse
    {
        try {
            $tour = $this->tourRepository->find($id);
            
            if (!$tour) {
                return $this->json([
                    'success' => false,
                    'error' => 'Tour no encontrado',
                ], Response::HTTP_NOT_FOUND);
            }

            // Obtener sliders del tour
            $sliders = $this->entityManager->getRepository(Slider::class)
                ->findBy(['tour' => $tour]);

            $slidersData = [];
            foreach ($sliders as $slider) {
                $slidersData[] = [
                    'id' => $slider->getId(),
                    'imagen' => $slider->getImagen(),
                    'titulo' => $slider->getTitulo(),
                    'descripcion' => $slider->getDescripcion(),
                ];
            }

            $tourData = $this->serializeTour($tour);
            $tourData['sliders'] = $slidersData;

            return $this->json([
                'success' => true,
                'data' => $tourData,
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'error' => 'Error al obtener el tour',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * GET /api/tours/{id}/comentarios
     * Obtener comentarios de un tour
     */
    #[Route('/{id}/comentarios', name: 'api_tour_comentarios', methods: ['GET'])]
    public function getTourComentarios(int $id, Request $request, PaginatorInterface $paginator): JsonResponse
    {
        try {
            $tour = $this->tourRepository->find($id);
            
            if (!$tour) {
                return $this->json([
                    'success' => false,
                    'error' => 'Tour no encontrado',
                ], Response::HTTP_NOT_FOUND);
            }

            $data = $this->comentarioRepository->findComentarios($tour);
            $page = $request->query->getInt('page', 1);
            $comentarios = $paginator->paginate($data, $page, 4);

            $comentariosData = [];
            foreach ($comentarios as $comentario) {
                $comentariosData[] = [
                    'id' => $comentario->getId(),
                    'autor' => $comentario->getAutor(),
                    'contenido' => $comentario->getContenido(),
                    'valoracion' => $comentario->getValoracion(),
                    'fecha' => $comentario->getFecha() ? $comentario->getFecha()->format('Y-m-d H:i') : null,
                    'nota' => $comentario->getNota(),
                ];
            }

            return $this->json([
                'success' => true,
                'data' => $comentariosData,
                'pagination' => [
                    'current_page' => $page,
                    'total_pages' => ceil($comentarios->getTotalItemCount() / 4),
                    'total_items' => $comentarios->getTotalItemCount(),
                ],
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'error' => 'Error al obtener los comentarios',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * POST /api/tours/{id}/comentarios
     * Crear un nuevo comentario sobre un tour
     */
    #[Route('/{id}/comentarios', name: 'api_tour_comentario_create', methods: ['POST'])]
    public function createComentario(int $id, Request $request): JsonResponse
    {
        try {
            $tour = $this->tourRepository->find($id);
            
            if (!$tour) {
                return $this->json([
                    'success' => false,
                    'error' => 'Tour no encontrado',
                ], Response::HTTP_NOT_FOUND);
            }

            $user = $this->getUser();
            if (!$user) {
                return $this->json([
                    'success' => false,
                    'error' => 'Usuario no autenticado',
                ], Response::HTTP_UNAUTHORIZED);
            }

            $data = json_decode($request->getContent(), true) ?? [];

            $comentario = new Comentario();
            $comentario->setAutor($user->getNombre() ?? $user->getEmail());
            $comentario->setContenido($data['contenido'] ?? '');
            $comentario->setValoracion($data['valoracion'] ?? 0);
            $comentario->setNota($data['nota'] ?? null);
            $comentario->setTour($tour);
            $comentario->setFecha(new \DateTime());

            $this->entityManager->persist($comentario);
            $this->entityManager->flush();

            return $this->json([
                'success' => true,
                'message' => 'Comentario creado exitosamente',
                'data' => [
                    'id' => $comentario->getId(),
                    'autor' => $comentario->getAutor(),
                    'contenido' => $comentario->getContenido(),
                    'valoracion' => $comentario->getValoracion(),
                    'fecha' => $comentario->getFecha()->format('Y-m-d H:i'),
                ],
            ]);

        } catch (\Exception $e) {
            return $this->json([
                'success' => false,
                'error' => 'Error al crear el comentario',
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Serializar tour para respuesta JSON
     */
    private function serializeTour(Tour $tour): array
    {
        return [
            'id' => $tour->getId(),
            'titulo' => $tour->getTitulo(),
            'imagen' => $tour->getImagen(),
            'descripcion_corta' => $tour->getDescripcionCorta(),
            'descripcion_larga' => $tour->getDescripcionLarga(),
            'descripcion_larga_fr' => $tour->getDescripcionLargaFr(),
            'descripcion_larga_es' => $tour->getDescripcionLargaEs(),
            'precio' => $tour->getPrecio(),
            'stock' => $tour->getStock(),
            'orden' => $tour->getOrden(),
            'duracion' => $tour->getDuracion(),
            'comienzo' => $tour->getComienzo(),
            'final' => $tour->getFinal(),
            'rango' => $tour->getRango(),
            'hora_inicio' => $tour->getHoraInicio() ? $tour->getHoraInicio()->format('H:i') : null,
            'hora_fin' => $tour->getHoraFin() ? $tour->getHoraFin()->format('H:i') : null,
            'mapaComienzo' => $tour->getMapaComienzo(),
            'mapaFinal' => $tour->getMapaFinal(),
            'estado' => $tour->isEstado(),
        ];
    }
}
