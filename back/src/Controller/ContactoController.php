<?php

namespace App\Controller;

use App\Entity\Contacto;
use App\Form\ContactoFormType;
use App\Repository\BlogCategoriaRepository;
use App\Service\ContactoService;
use App\Repository\TourRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Contracts\Translation\TranslatorInterface;

class ContactoController extends AbstractController
{
    #[Route('/contacto/{_locale}', name: 'contacto', requirements: ['_locale' => 'en|es|fr|pt'], defaults: ['_locale' => 'es'])]
    public function index(Request $request, ContactoService $cs, TourRepository $repo, BlogCategoriaRepository $blogCategoriaRepository, TranslatorInterface $translator): Response
    {
        $contacto = new Contacto;

        $tours = $repo->findAll(); 
        $categorias = $blogCategoriaRepository->findAll();
        $locale = $request->getLocale();

        foreach($categorias as $categoria) {
            $categoriaId = $categoria->getId();
        }

        $categoria = $blogCategoriaRepository->findOneBy(['id' => $categoriaId]);

        $form = $this->createForm(ContactoFormType::class, $contacto);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $contacto = $form->getData();
            $cs->persistContacto($contacto);

            $mensaje = $translator->trans('Your message has been sent');

            $this->addFlash('success', $mensaje);
            return $this->redirectToRoute('contacto', 
            ['_locale' => $locale]);
        }


        return $this->render('contacto/index.html.twig', [
            'form' => $form->createView(),
            'tours' => $tours,
            'categoria' => $categoria

        ]);
    }
}

