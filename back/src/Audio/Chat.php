<?php

namespace App\Audio;

use Symfony\AI\Agent\AgentInterface;
use Symfony\AI\Platform\Bridge\OpenAI\TextToSpeech;
use Symfony\AI\Platform\Message\Content\Text;
use Symfony\AI\Platform\Message\Message;
use Symfony\AI\Platform\Message\MessageBag;
use Symfony\AI\Platform\PlatformInterface;
use Symfony\AI\Platform\Result\AudioResult;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\BinaryFileResponse;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

final class Chat
{
    private const SESSION_KEY = 'audio-chat';

    public function __construct(
        private readonly PlatformInterface $platform,
        private readonly RequestStack $requestStack,
        #[Autowire(service: 'ai.agent.audio')]
        private readonly AgentInterface $agent,
    ) {
    }

    /**
     * Convierte texto a audio y devuelve la respuesta para descargar/escuchar
     */
    public function textToAudio(string $text): BinaryFileResponse
    {
        // Usar el servicio de texto a voz (ej: OpenAI TTS)
        $result = $this->platform->invoke(new TextToSpeech(), Text::fromString($text));
        
        \assert($result instanceof AudioResult);
        
        // Guardar el audio temporalmente
        $audioPath = tempnam(sys_get_temp_dir(), 'tts-').'.mp3';
        file_put_contents($audioPath, $result->getAudioContent());
        
        // Crear respuesta para el navegador
        $response = new BinaryFileResponse($audioPath);
        $response->setContentDisposition(
            ResponseHeaderBag::DISPOSITION_INLINE,
            'mensaje.mp3'
        );
        $response->headers->set('Content-Type', 'audio/mpeg');
        
        // Opcional: eliminar el archivo después de enviar la respuesta
        $response->deleteFileAfterSend(true);
        
        return $response;
    }

    /**
     * Versión simplificada que devuelve el audio como base64
     */
    public function textToAudioBase64(string $text): string
    {
        $result = $this->platform->invoke(new TextToSpeech(), Text::fromString($text));
        \assert($result instanceof AudioResult);
        
        return base64_encode($result->getAudioContent());
    }

    // ... (mantén los otros métodos existentes si los necesitas)
}