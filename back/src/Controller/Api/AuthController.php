<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Service\MailerService;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
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

    #[Route('/api/auth/register', name: 'api_auth_register', methods: ['POST'])]
    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        EntityManagerInterface $entityManager,
        MailerService $mailerService,
        TokenGeneratorInterface $tokenGenerator,
        UserRepository $userRepository
    ): JsonResponse {
        $data = json_decode($request->getContent(), true) ?? [];

        $email = $data['email'] ?? null;
        $plainPassword = $data['password'] ?? null; // 'password' field from frontend
        $nombre = $data['nombre'] ?? null;
        $apellidos = $data['apellidos'] ?? null;
        $telefono = $data['telefono'] ?? null;
        $pais = $data['pais'] ?? null;
        $avatar = $data['avatar'] ?? 'avatar_default';
        $fechaNacimientoStr = $data['fechaNacimiento'] ?? null;

        // Validaciones básicas
        if (!$email || !$plainPassword || !$nombre || !$apellidos || !$fechaNacimientoStr) {
            return $this->json([
                'success' => false,
                'error' => 'Faltan campos obligatorios (email, password, nombre, apellidos, fecha nacimiento)'
            ], 400);
        }

        // Verificar si existe email
        if ($userRepository->findOneBy(['email' => $email])) {
            return $this->json([
                'success' => false,
                'error' => 'El email ya está registrado'
            ], 400);
        }

        $user = new User();
        $user->setEmail($email);
        $user->setNombre($nombre);
        $user->setApellidos($apellidos);
        $user->setTelefono($telefono);
        $user->setPais($pais);
        $user->setAvatar($avatar);
        $user->setColor(null);
        $user->setRoles(['ROLE_USER']);
        $user->setFechaRegistro(new \DateTime());
        
        // Fecha Nacimiento Obligatoria
        try {
            $date = new \DateTime($fechaNacimientoStr);
            $user->setFechaNacimiento($date);
        } catch (\Exception $e) {
             return $this->json([
                'success' => false,
                'error' => 'Formato de fecha inválido (use YYYY-MM-DD)'
            ], 400);
        }

        // Hashear password
        $user->setPassword(
            $userPasswordHasher->hashPassword(
                $user,
                $plainPassword
            )
        );

        // Token verificación
        $token = $tokenGenerator->generateToken();
        $user->setToken($token);
        // Token lifetime 1 día (igual que RegistrationController)
        $user->setTokenLifeTime((new \DateTime('now'))->add(new \DateInterval("P1D")));

        $entityManager->persist($user);
        $entityManager->flush();

        // Enviar email
        try {
            $mailerService->send(
                $user->getEmail(),
                'Confirmacion de su cuenta',
                'confirmation_email.html.twig',
                [
                    'user' => $user,
                    'token' => $token,
                    'token_life_time' => $user->getTokenLifeTime()->format('d/m/y a las H\hi')
                ]
            );
        } catch (\Exception $e) {
            // Log error, pero no fallar el registro
        }

        return $this->json([
            'success' => true,
            'message' => 'Usuario registrado correctamente. Verifica tu email.'
        ]);
    }

    #[Route('/api/auth/me', name: 'api_auth_me', methods: ['GET'])]
    public function me(): JsonResponse
    {
        $user = $this->getUser();

        if (!$user) {
            return $this->json([
                'success' => false,
                'error' => 'Unauthorized',
            ], Response::HTTP_UNAUTHORIZED);
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
                'roles' => $user->getRoles(),
                'avatar' => $user->getAvatar(),
            ],
        ]);
    }

    #[Route('/api/auth/logout', name: 'api_auth_logout', methods: ['POST'])]
    public function logout(): Response
    {
        // Con JWT stateless no hay sesión que destruir aquí.
        // (Opcional) podrías registrar logs, etc.
        return new Response(null, Response::HTTP_NO_CONTENT);
    }
    #[Route('/api/users/{id}', name: 'api_users_update', methods: ['PATCH'])]
    public function update(
        int $id,
        Request $request,
        UserRepository $userRepository,
        EntityManagerInterface $em
    ): JsonResponse
    {
        $currentUser = $this->getUser();
        
        if (!$currentUser) {
            return $this->json(['success' => false, 'error' => 'Unauthorized'], 401);
        }
        
        // Security: ensure user can only update their own profile
        if ($currentUser->getId() !== $id) {
            return $this->json(['success' => false, 'error' => 'Access denied'], 403);
        }

        $user = $userRepository->find($id);
        if (!$user) {
             return $this->json(['success' => false, 'error' => 'User not found'], 404);
        }

        $data = json_decode($request->getContent(), true) ?? [];

        // Update fields if they exist in the payload
        if (array_key_exists('nombre', $data)) $user->setNombre($data['nombre']);
        if (array_key_exists('apellidos', $data)) $user->setApellidos($data['apellidos']);
        if (array_key_exists('telefono', $data)) $user->setTelefono($data['telefono']);
        if (array_key_exists('pais', $data)) $user->setPais($data['pais']);
        if (array_key_exists('avatar', $data)) $user->setAvatar($data['avatar']);

        $em->persist($user);
        $em->flush();

        return $this->json([
            'success' => true, 
            'data' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'nombre' => $user->getNombre(),
                'apellidos' => $user->getApellidos(),
                'telefono' => $user->getTelefono(),
                'pais' => $user->getPais(),
                'roles' => $user->getRoles(),
                'avatar' => $user->getAvatar(),
            ]
        ]);
    }
}

