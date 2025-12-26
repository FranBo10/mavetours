<?php

namespace App\Controller;

use App\Repository\ParadaRepository; 
use App\Service\TextToSpeechService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AudioController extends AbstractController
{
    #[Route('/text-to-speech/{_locale}', name: 'text_to_speech', methods: ['POST'])]
    public function convertTextToSpeech(
        Request $request,
        ParadaRepository $paradaRepository,
        TextToSpeechService $ttsService,
        string $_locale = null // Captura el locale de la URL
    ): Response {
        // Primero intenta obtener el locale de la URL
        $locale = $_locale ?? $request->getLocale();
        
        // Si aún no tenemos locale, usa 'en' como predeterminado
        $locale = $locale ?: 'en';
        
        $data = json_decode($request->getContent(), true);
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            $data = $request->request->all();
        }

        $id = $data['id'] ?? null;
        $text = $data['text'] ?? null;

        if (!$id && !$text) {
            return $this->json(['error' => 'Se requiere ID o texto', 'locale' => $locale], 400);
        }

        try {
            if ($id) {
                $parada = $paradaRepository->find($id);
                if (!$parada) {
                    return $this->json(['error' => 'Parada no encontrada'], 404);
                }
                $text = $locale === 'en' 
                    ? $parada->getContenido() 
                    : $parada->getContenidoFr();
            }

            $audioContent = $ttsService->generateSpeech($text, $locale);

            return new Response(
                $audioContent,
                200,
                ['Content-Type' => 'audio/wav']
            );

        } catch (\Exception $e) {
            return $this->json([
                'error' => 'Error al generar audio',
                'details' => $e->getMessage(),
                'locale_used' => $locale
            ], 500);
        }
    }
}

// namespace App\Controller;

// use App\Audio\Chat;
// use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
// use Symfony\Component\HttpFoundation\Request;
// use Symfony\Component\HttpFoundation\Response;
// use Symfony\Component\Routing\Annotation\Route;

// class AudioController extends AbstractController
// {
//     #[Route('/text-to-speech', name: 'text_to_speech', methods: ['POST'])]
//     public function convertTextToSpeech(Request $request, Chat $audioChat): Response
//     {
//         $text = $request->request->get('text', '');
        
//         if (empty($text)) {
//             return $this->json(['error' => 'Texto no proporcionado'], 400);
//         }
        
//         // Opción 1: Devuelve el audio directamente
//         return $audioChat->textToAudio($text);
        
//         // Opción 2: Devuelve base64 para usar en frontend
//         // $audioBase64 = $audioChat->textToAudioBase64($text);
//         // return $this->json(['audio' => $audioBase64]);
//     }
// }