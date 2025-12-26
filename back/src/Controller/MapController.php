<?php

namespace App\Controller;

use App\Entity\Tour;
use App\Repository\TourRepository;
use App\Repository\BlogCategoriaRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\UX\Map\Model\Map;
use Symfony\UX\Map\Model\Point;
use Symfony\UX\Map\Model\Marker;
use Symfony\UX\Map\Model\InfoWindow;

class MapController extends AbstractController
{
    // public function __construct(
    //     private readonly HttpClientInterface $httpClient
    // ) {
    //     parent::__construct();
    // }

    #[Route('/map/{id}', name: 'app_map', requirements: ['id' => '\d+'])]
    public function index(
        TourRepository $repo,
        BlogCategoriaRepository $blogCategoriaRepository,
        int $id
    ): Response {
        $tours = $repo->findBy([], ['orden' => 'ASC']);
        $parada = $repo->find($id);

        if (!$tour) {
            throw $this->createNotFoundException('Tour no encontrado');
        }

        $categorias = $blogCategoriaRepository->findAll();

        // Mapa centrado en París (puedes ajustar esto dinámicamente)
        $map = (new Map())
            ->center(new Point(48.8566, 2.3522))
            ->zoom(13);

        foreach ($tour->getParadas() as $parada) {
            $map->addMarker(new Marker(
                position: new Point($parada->getLatitud(), $parada->getLongitud()),
                title: $parada->getTitulo(),
                infoWindow: new InfoWindow(
                    headerContent: '<strong>' . $parada->getTitulo() . '</strong>',
                    content: $parada->getContenido()
                )
            ));
        }

        return $this->render('map/index.html.twig', [
            'tours' => $tours,
            'tour' => $tour,
            'map' => $map,
            'categorias' => $categorias,
        ]);
    }
}
