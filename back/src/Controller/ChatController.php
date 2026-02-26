<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use App\Repository\BlogCategoriaRepository;
use App\Repository\TourRepository;

#[IsGranted('ROLE_USER')]
class ChatController extends AbstractController
{
    #[Route('/chat/{_locale}', name: 'chat', requirements: ['_locale' => 'en|es|fr|pt'], defaults: ['_locale' => 'es'])]
    public function index(BlogCategoriaRepository $blogCategoriaRepository, TourRepository $tourRepository): Response
    {
        $categoria = $blogCategoriaRepository->findOneBy([]);
        $tours = $tourRepository->findBy([], ['orden' => 'ASC']);

        return $this->render('chat/index.html.twig', [
            'controller_name' => 'ChatController',
            'categoria' => $categoria,
            'tours' => $tours,
        ]);
    }
}
