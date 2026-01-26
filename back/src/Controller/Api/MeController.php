<?php

namespace App\Controller\Api;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class MeController extends AbstractController
{
    #[Route('/api/me', name: 'api_me', methods: ['GET'])]
    public function me(): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->json(['success' => false, 'error' => 'Unauthorized'], 401);
        }

        // Ajusta getters si tu entidad usa otros nombres
        return $this->json([
            'success' => true,
            'data' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'nombre' => $user->getNombre(),
                'apellidos' => $user->getApellidos(),
                'telefono' => $user->getTelefono(),
                'pais' => $user->getPais(),
                'avatar' => $user->getAvatar(),
                'roles' => $user->getRoles(),
            ],
        ]);
    }
}
