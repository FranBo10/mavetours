<?php

namespace App\Service;

use OpenAI;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;

class TextToSpeechService
{
    private string $apiKey;
    private string $model;

    public function __construct(
        string $apiKey,
        string $model = 'tts-1'
    ) {
        $this->apiKey = $apiKey;
        $this->model = $model;
    }

    public function generateSpeech(
        string $text, 
        string $locale,
        string $responseFormat = 'wav'
    ): string {
        try {
            $client = OpenAI::client($this->apiKey);
            
            // Seleccionar voz basada en el locale
            $voice = $this->getVoiceForLocale($locale);

            $response = $client->audio()->speech([
                'model' => $this->model,
                'voice' => $voice,
                'input' => $text,
                'response_format' => $responseFormat
            ]);

            return $response;

        } catch (\Exception $e) {
            throw new \RuntimeException('Error al generar audio: '.$e->getMessage());
        }
    }

    private function getVoiceForLocale(string $locale): string
    {
        // Mapeo de voces recomendadas por idioma
        $voiceMap = [
            'en' => 'alloy',   // Voz óptima para inglés
            'fr' => 'nova',    // Voz óptima para francés
            'es' => 'onyx',    // Voz óptima para español
            'de' => 'echo',    // Voz óptima para alemán
            'it' => 'shimmer'  // Voz óptima para italiano
        ];

        return $voiceMap[$locale] ?? 'alloy'; // Default to English voice
    }
}