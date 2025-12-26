<?php

// src/Controller/Api/TourDataImportController.php

namespace App\Controller\Api;

use App\Entity\Parada;
use App\Entity\Tour;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TourDataImportController extends AbstractController
{
    #[Route('/api/import-tour-data', name: 'api_import_tour_data', methods: ['POST'])]
    public function import(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!isset($data['tour'], $data['paradas'])) {
            return new JsonResponse(['error' => 'JSON inválido'], 400);
        }

        $tour = new Tour();
        $tour->setNombre($data['tour']['nombre']);
        $tour->setDescripcion($data['tour']['descripcion'] ?? '');

        foreach ($data['paradas'] as $item) {
            $parada = new Parada();
            $parada->setTitulo($item['titulo']);
            $parada->setContenido($item['contenido'] ?? null);
            $parada->setLatitud($item['latitud']);
            $parada->setLongitud($item['longitud']);
            $parada->setImagen($item['imagen'] ?? null);
            $parada->setAudioUrl($item['audio'] ?? null);
            $parada->setVideoUrl($item['video'] ?? null);
            $parada->setTour($tour);
            $em->persist($parada);
        }

        $em->persist($tour);
        $em->flush();

        return new JsonResponse(['message' => 'Datos importados correctamente']);
    }
}
