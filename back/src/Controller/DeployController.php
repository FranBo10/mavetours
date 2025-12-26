<?php
// src/Controller/DeployController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Process\Process;
use Symfony\Component\HttpKernel\KernelInterface;

class DeployController extends AbstractController
{
    private function checkAuth(Request $request): bool
    {
        $token = $request->query->get('token') ?? $request->request->get('token');
        $appSecret = $this->getParameter('app_secret');
        
        return $token === $appSecret;
    }

    #[Route('/deploy/migrate', name: 'deploy_migrate')]
    public function migrate(Request $request, KernelInterface $kernel): Response
    {
        if (!$this->checkAuth($request)) {
            return new JsonResponse(['error' => 'No autorizado'], 403);
        }

        try {
            $process = new Process(['php', 'bin/console', 'doctrine:migrations:migrate', '--no-interaction']);
            $process->setWorkingDirectory($kernel->getProjectDir());
            $process->run();
            
            return new JsonResponse([
                'success' => $process->isSuccessful(),
                'output' => $process->getOutput(),
                'error' => $process->getErrorOutput()
            ]);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], 500);
        }
    }

    #[Route('/deploy/clear-cache', name: 'deploy_clear_cache')]
    public function clearCache(Request $request, KernelInterface $kernel): Response
    {
        if (!$this->checkAuth($request)) {
            return new JsonResponse(['error' => 'No autorizado'], 403);
        }

        try {
            $process = new Process(['php', 'bin/console', 'cache:clear']);
            $process->setWorkingDirectory($kernel->getProjectDir());
            $process->run();
            
            return new JsonResponse([
                'success' => $process->isSuccessful(),
                'output' => $process->getOutput(),
                'error' => $process->getErrorOutput()
            ]);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], 500);
        }
    }

    #[Route('/deploy/full-deploy', name: 'deploy_full')]
    public function fullDeploy(Request $request, KernelInterface $kernel): Response
    {
        if (!$this->checkAuth($request)) {
            return new JsonResponse(['error' => 'No autorizado'], 403);
        }

        $commands = [
            'cache:clear',
            'doctrine:migrations:migrate --no-interaction',
            'cache:warmup',
            'doctrine:schema:validate --skip-sync' // Opcional: validar esquema
        ];

        $results = [];
        foreach ($commands as $command) {
            $process = new Process(['php', 'bin/console'] + explode(' ', $command));
            $process->setWorkingDirectory($kernel->getProjectDir());
            $process->run();
            
            $results[] = [
                'command' => $command,
                'success' => $process->isSuccessful(),
                'output' => $process->getOutput(),
                'error' => $process->getErrorOutput()
            ];
        }

        return new JsonResponse(['commands' => $results]);
    }
}