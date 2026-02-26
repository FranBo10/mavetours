<?php

namespace App\Controller;

use App\Repository\BlogCategoriaRepository;
use App\Repository\TourRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CalendarioController extends AbstractController
{
    #[Route('/calendario', name: 'calendario')]
    public function index(Request $request, TourRepository $repo, BlogCategoriaRepository $blogCategoriaRepository): Response
    {
        $tours = $repo->findAll(); 
        $categorias = $blogCategoriaRepository->findAll();

        foreach($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);


        return $this->render('calendario/index.html.twig', [
            'tours' => $tours,
            'categoria' => $categoria

        ]);
    }
}

