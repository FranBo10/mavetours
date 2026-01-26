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
        string $responseFormat = 'mp3'
    ): string {
        try {
            // Fix for Windows SSL issues: Use Symfony HTTP Client with verify_peer=false
            // We use Psr18Client to adapt Symfony HttpClient to PSR-18 interface required by OpenAI
            $symfonyClient = \Symfony\Component\HttpClient\HttpClient::create([
                'verify_peer' => false,
                'verify_host' => false,
            ]);
            $psr18Client = new \Symfony\Component\HttpClient\Psr18Client($symfonyClient);

            $client = OpenAI::factory()
                ->withApiKey($this->apiKey)
                ->withHttpClient($psr18Client)
                ->make();
            
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

    public function generateAndSaveAudio(
        string $text, 
        string $locale, 
        string $filename,
        string $projectDir
    ): string {
        try {
            // 1. Generate audio content
            $audioContent = $this->generateSpeech($text, $locale, 'mp3');

            // 2. Define path: public/uploads/audios/
            $uploadDir = $projectDir . '/public/uploads/audios';
            
            if (!file_exists($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }

            // 3. Save file
            $filePath = $uploadDir . '/' . $filename;
            file_put_contents($filePath, $audioContent);

            return $filename; // Return just the filename

        } catch (\Exception $e) {
            throw new \RuntimeException('Error saving audio file: ' . $e->getMessage());
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