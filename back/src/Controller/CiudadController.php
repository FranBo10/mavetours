<?php

namespace App\Controller;

use App\Repository\BlogCategoriaRepository;
use App\Repository\CiudadRepository;
use App\Repository\DestinoRepository;
use App\Repository\SliderRepository;
use App\Repository\TourRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CiudadController extends AbstractController
{
    /**
     * Muestra las ciudades de un destino (ej: click en "Europa" → ver Paris, Lyon, Nice...)
     */
    #[Route('/ciudades/{slug}/{_locale}', name: 'ciudades_destino', requirements: ['_locale' => 'en|es|fr|pt'])]
    public function ciudadesPorDestino(
        string $slug,
        DestinoRepository $destinoRepository,
        CiudadRepository $ciudadRepository,
        BlogCategoriaRepository $blogCategoriaRepository,
        TourRepository $tourRepository,
        SliderRepository $sliderRepository,
        Request $request
    ): Response {
        $destino = $destinoRepository->findOneBy(['slug' => $slug]);

        if (!$destino) {
            throw $this->createNotFoundException('Destino no encontrado');
        }

        $ciudades = $ciudadRepository->findBy(
            ['destino' => $destino, 'isActive' => true],
            ['nombre' => 'ASC']
        );

        $sliders = $sliderRepository->findBy(
            ['destino' => $destino],
            ['orden' => 'ASC']
        );

        $tours = $tourRepository->findBy([], ['orden' => 'ASC']);
        $categorias = $blogCategoriaRepository->findAll();
        $locale = $request->getLocale();
        $categoria = $categorias ? end($categorias) : null;

        return $this->render('app/ciudades.html.twig', [
            'tours' => $tours,
            'destino' => $destino,
            'ciudades' => $ciudades,
            'sliders' => $sliders,
            'categoria' => $categoria,
            '_locale' => $locale,
        ]);
    }

    /**
     * Muestra los tours de una ciudad específica (ej: click en "Paris" → ver tours en Paris)
     */
    #[Route('/ciudad/{slug}/{_locale}', name: 'tours_ciudad', requirements: ['_locale' => 'en|es|fr|pt'])]
    public function toursPorCiudad(
        string $slug,
        CiudadRepository $ciudadRepository,
        TourRepository $tourRepository,
        BlogCategoriaRepository $blogCategoriaRepository,
        Request $request
    ): Response {
        $ciudad = $ciudadRepository->findOneBy(['slug' => $slug]);

        if (!$ciudad) {
            throw $this->createNotFoundException('Ciudad no encontrada');
        }

        $toursCiudad = $tourRepository->findBy(
            ['ciudad' => $ciudad],
            ['orden' => 'ASC']
        );

        $tours = $tourRepository->findBy([], ['orden' => 'ASC']);
        $categorias = $blogCategoriaRepository->findAll();
        $locale = $request->getLocale();
        $categoria = $categorias ? end($categorias) : null;

        return $this->render('app/tours.html.twig', [
            'tours' => $tours,
            'toursCiudad' => $toursCiudad,
            'ciudad' => $ciudad,
            'destino' => $ciudad->getDestino(),
            'categoria' => $categoria,
            '_locale' => $locale,
        ]);
    }
}
