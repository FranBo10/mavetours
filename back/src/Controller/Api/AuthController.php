<?php

namespace App\Controller\Api;

use App\Repository\UserRepository;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class AuthController extends AbstractController
{
    #[Route('/api/auth/login', name: 'api_auth_login', methods: ['POST'])]
    public function login(
        Request $request,
        UserRepository $users,
        UserPasswordHasherInterface $hasher,
        JWTTokenManagerInterface $jwt
    ): JsonResponse {
        $payload = json_decode($request->getContent(), true) ?? [];

        $email = $payload['email'] ?? null;
        $password = $payload['password'] ?? null;

        if (!$email || !$password) {
            return $this->json([
                'success' => false,
                'error' => 'Email y password son obligatorios'
            ], 400);
        }

        $user = $users->findOneBy(['email' => $email]);

        if (!$user || !$hasher->isPasswordValid($user, $password)) {
            return $this->json([
                'success' => false,
                'error' => 'Login incorrecto'
            ], 401);
        }

        $token = $jwt->create($user);

        return $this->json([
            'success' => true,
            'data' => [
                // 👇 tu front ya soporta access_token / token / jwt, pero dejamos access_token como estándar
                'access_token' => $token,
                'user' => [
                    'id' => $user->getId(),
                    'email' => $user->getEmail(),
                    'nombre' => $user->getNombre(),
                    'apellidos' => $user->getApellidos(),
                    'telefono' => $user->getTelefono(),
                    'pais' => $user->getPais(),
                    'roles' => $user->getRoles(),
                    'avatar' => $user->getAvatar(),
                ],
            ],
        ]);
    }

    #[Route('/api/auth/me', name: 'api_auth_me', methods: ['GET'])]
    public function me(): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->json([
                'success' => false,
                'error' => 'No autorizado',
            ], 401);
        }

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
