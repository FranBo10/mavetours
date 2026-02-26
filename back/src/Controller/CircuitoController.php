<?php

namespace App\Controller;

use App\Repository\BlogCategoriaRepository;
use App\Repository\CircuitoRepository;
use App\Repository\DestinoRepository;
use App\Repository\TourRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CircuitoController extends AbstractController
{
    #[Route('/circuitos/{slug}/{_locale}', name: 'circuito')]
    public function show(
        string $slug, TourRepository $repo, 
        DestinoRepository $destinoRepository,
        BlogCategoriaRepository $blogCategoriaRepository,
        Request $request
    ): Response {
        $destino = $destinoRepository->findOneBy(['slug' => $slug]);
        $tours = $repo->findBy([], ['orden' => 'ASC']);

        if (!$destino) {
            throw $this->createNotFoundException('Destino no encontrado');
        }

        $categorias = $blogCategoriaRepository->findAll();
        $locale = $request->getLocale();
        $request->setLocale($locale);

        foreach ($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }
        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        return $this->render('app/circuito.html.twig', [
            'tours' => $tours,
            'destino' => $destino,
            'circuitos' => $destino->getCircuitos(),
            'categoria' => $categoria,
            '_locale' => $locale
        ]);
    }

    #[Route('/detalle-circuito/{slug}/{_locale}', name: 'detalleCircuito')]
    public function detalleCircuito(
        string $slug, TourRepository $repo, 
        CircuitoRepository $circuitoRepository,
        BlogCategoriaRepository $blogCategoriaRepository,
        Request $request
    ): Response {
        $circuito = $circuitoRepository->findOneBy(['slug' => $slug]);
        $tours = $repo->findBy([], ['orden' => 'ASC']);

        if (!$circuito) {
            throw $this->createNotFoundException('Circuito no encontrado');
        }

        $categorias = $blogCategoriaRepository->findAll();
        $locale = $request->getLocale();
        $request->setLocale($locale);

        foreach ($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }
        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        return $this->render('app/detalleCircuito.html.twig', [
            'tours' => $tours,
            'circuito' => $circuito,
            'destino' => $circuito->getDestino(),
            'categoria' => $categoria,
            '_locale' => $locale
        ]);
    }
}
