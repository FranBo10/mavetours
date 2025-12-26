<?php

namespace App\Controller;

use App\Entity\BlogCategoria;
use App\Repository\BlogRepository;
use App\Repository\TourRepository;
use App\Repository\BlogEtiquetaRepository;
use App\Repository\BlogCategoriaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BlogController extends AbstractController
{
    #[Route('/blog/{id}/{_locale}', name: 'blog', requirements: ['_locale' => 'en|es|fr'])]
    public function blog($id, TourRepository $tourRepository, BlogEtiquetaRepository $blogEtiquetaRepository, BlogCategoriaRepository $blogCategoriaRepository, Request $request): Response
    {
        if (!$request->attributes->get('_locale')) {
            return $this->redirectToRoute('blog', ['_locale' => 'es', 'id' => $id]);
        }

        $locale = $request->getLocale();
        $tours = $tourRepository->findAll();

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $id]);
        if (!$categoria) {
            throw $this->createNotFoundException('Categoría no encontrada');
        }

        $blogs = $categoria->getBlogs();

        $etiquetasPorBlog = [];

        foreach ($blogs as $blog) {
            $etiquetasPorBlog[$blog->getId()] = $blog->getBlogEtiquetas();
        }

        $etiquetas = $blogEtiquetaRepository->findAll();
        $categorias = $blogCategoriaRepository->findAll();

        //  $titulo = $this->getTranslatedTitulo($categoria, $locale);

        return $this->render('blog/blog.html.twig', [
            'tours' => $tours,
            'blogs' => $blogs,
            'categorias' => $categorias,
            'etiquetas' => $etiquetas,
            'etiquetasPorBlog' => $etiquetasPorBlog,
            'categoria' => $categoria,
            'titulo' => $categoria->getTitulo()
        ]);
    }

    #[Route('/blog/{id}', name: 'blog_redirect')]
    public function redirectToLocaleBlog($id): Response
    {
        // Redirigir a español por defecto
        return $this->redirectToRoute('blog', ['_locale' => 'es', 'id' => $id]);
    }

    /**
     * Obtiene el título traducido de la categoría según el locale
     */
    // private function getTranslatedTitulo(BlogCategoria $categoria, string $locale): string
    // {
    //     return match($locale) {
    //         'en' => $categoria->getTituloEn() ?? $categoria->getTitulo(),
    //         'fr' => $categoria->getTituloFr() ?? $categoria->getTitulo(),
    //         default => $categoria->getTitulo(),
    //     };
    // }
}
