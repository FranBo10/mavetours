<?php

namespace App\Controller;

use App\Entity\Tour;
use App\Repository\TourRepository;
use App\Repository\BlogCategoriaRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ParadaController extends AbstractController
{
    #[Route('/parada/{id}/{_locale}', name: 'parada')]
    public function show(
        Request $request,
        Tour $tour,
        TourRepository $tourRepository,
        BlogCategoriaRepository $blogCategoriaRepository
    ): Response {
        $locale = $request->getLocale();
        $paradas = $tour->getParadas();
    
        // Recuperar categoría (como lo haces tú)
        $categorias = $blogCategoriaRepository->findAll();
        $categoriaId = $categorias ? end($categorias)->getId() : null;
        $categoria = $categoriaId ? $blogCategoriaRepository->findOneBy(['id' => $categoriaId]) : null;

        $tours = $tourRepository->findAll();
    
        return $this->render('paradas/paradas.html.twig', [
            'tours' => $tours,
            'tour' => $tour,
            'paradas' => $paradas,
            'categoria' => $categoria,
            '_locale' => $locale
        ]);
    }
}
