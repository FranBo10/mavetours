<?php

namespace App\Controller\Api;

use App\Entity\Blog;
use App\Entity\BlogCategoria;
use App\Repository\BlogCategoriaRepository;
use App\Repository\BlogRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/blog')]
class BlogApiController extends AbstractController
{
    public function __construct(
        private BlogCategoriaRepository $categoriaRepo,
        private BlogRepository $blogRepo
    ) {}

    // GET /api/blog/categories
    #[Route('/categories', name: 'api_blog_categories', methods: ['GET'])]
    public function categories(): JsonResponse
    {
        try {
            $cats = $this->categoriaRepo->findAll();

            $data = array_map(fn (BlogCategoria $c) => [
                'id' => $c->getId(),
                'titulo' => $c->getTitulo(),
                'imagen' => $c->getImagen(),
            ], $cats);

            return $this->json(['success' => true, 'data' => $data]);
        } catch (\Throwable $e) {
            return $this->json(['success' => false, 'error' => 'Error al obtener categorías'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // GET /api/blog/categories/{id}?locale=es|en|fr
    #[Route('/categories/{id}', name: 'api_blog_by_category', methods: ['GET'])]
    public function byCategory(int $id): JsonResponse
    {
        try {
            $cat = $this->categoriaRepo->find($id);
            if (!$cat) {
                return $this->json(['success' => false, 'error' => 'Categoría no encontrada'], Response::HTTP_NOT_FOUND);
            }

            $blogs = $this->blogRepo->findBy(['categoria' => $cat], ['fecha_registro' => 'DESC']);

            $data = array_map(fn (Blog $b) => [
                'id' => $b->getId(),
                'titulo' => $b->getTitulo(),
                'descripcion_corta' => $b->getDescripcionCorta(),
                'descripcion_larga' => $b->getDescripcionLarga(),
                'descripcion_larga_es' => $b->getDescripcionLargaEs(),
                'descripcion_larga_fr' => $b->getDescripcionLargaFr(),
                'imagen' => $b->getImagen(),
                'estado' => $b->isEstado(),
                'fecha_registro' => $b->getFechaRegistro()?->format('Y-m-d H:i'),
                'categoria' => [
                    'id' => $cat->getId(),
                    'titulo' => $cat->getTitulo(),
                ],
                'etiquetas' => array_map(
                    fn($e) => ['id' => $e->getId(), 'titulo' => $e->getTitulo()],
                    $b->getBlogEtiquetas()->toArray()
                ),
            ], $blogs);

            return $this->json([
                'success' => true,
                'data' => [
                    'categoria' => [
                        'id' => $cat->getId(),
                        'titulo' => $cat->getTitulo(),
                        'imagen' => $cat->getImagen(),
                    ],
                    'blogs' => $data,
                ],
            ]);
        } catch (\Throwable $e) {
            return $this->json(['success' => false, 'error' => 'Error al obtener blogs'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // (Opcional) GET /api/blog/posts/{id}?locale=...
    #[Route('/posts/{id}', name: 'api_blog_post_show', methods: ['GET'])]
    public function showPost(int $id): JsonResponse
    {
        try {
            $b = $this->blogRepo->find($id);
            if (!$b) {
                return $this->json(['success' => false, 'error' => 'Post no encontrado'], Response::HTTP_NOT_FOUND);
            }

            return $this->json([
                'success' => true,
                'data' => [
                    'id' => $b->getId(),
                    'titulo' => $b->getTitulo(),
                    'descripcion_corta' => $b->getDescripcionCorta(),
                    'descripcion_larga' => $b->getDescripcionLarga(),
                    'descripcion_larga_es' => $b->getDescripcionLargaEs(),
                    'descripcion_larga_fr' => $b->getDescripcionLargaFr(),
                    'imagen' => $b->getImagen(),
                    'estado' => $b->isEstado(),
                    'fecha_registro' => $b->getFechaRegistro()?->format('Y-m-d H:i'),
                    'categoria' => $b->getCategoria()?->getId(),
                    'etiquetas' => array_map(
                        fn($e) => ['id' => $e->getId(), 'titulo' => $e->getTitulo()],
                        $b->getBlogEtiquetas()->toArray()
                    ),
                ],
            ]);
        } catch (\Throwable $e) {
            return $this->json(['success' => false, 'error' => 'Error al obtener el post'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
