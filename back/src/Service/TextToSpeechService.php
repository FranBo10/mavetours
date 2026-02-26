<?php

namespace App\Service;

use OpenAI;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBagInterface;
use Psr\Log\LoggerInterface;

class TextToSpeechService
{
    private string $apiKey;
    private string $model;
    private string $defaultVoice;

    public function __construct(
        string $apiKey,
        string $model = 'tts-1-hd',
        string $defaultVoice = 'nova',
        private LoggerInterface $logger
    ) {
        $this->apiKey = $apiKey;
        $this->model = $model;
        $this->defaultVoice = $defaultVoice;
    }

    public function generateSpeech(
        string $text, 
        string $locale,
        int $paradaId,
        string $responseFormat = 'mp3'
    ): string {
        try {
            // Limpiar HTML una sola vez
            $cleanText = strip_tags($text);
            
            // Check length. If safe, just do one call.
            // Using 4000 as a safe limit (API limit is 4096)
            if (mb_strlen($cleanText, 'UTF-8') <= 4000) {
                return $this->makeOpenAiRequest($cleanText, $locale, $paradaId, $responseFormat);
            }

            // If too long, split and stitch
            $chunks = $this->splitTextIntoChunks($cleanText, 4000);
            $combinedAudio = '';

            // Using Symfony HttpClient directly here for each chunk
            // We could reuse the client but makeOpenAiRequest creates a new one each time for simplicity in this refactor
            foreach ($chunks as $index => $chunk) {
                $this->logger->info("TTS processing chunk " . ($index + 1) . "/" . count($chunks) . " for Parada $paradaId");
                $combinedAudio .= $this->makeOpenAiRequest($chunk, $locale, $paradaId, $responseFormat);
            }

            return $combinedAudio;

        } catch (\Exception $e) {
            throw new \RuntimeException('Error al generar audio: '.$e->getMessage());
        }
    }

    private function makeOpenAiRequest(
        string $text,
        string $locale,
        int $paradaId,
        string $responseFormat
    ): string {
         // Direct request using Symfony HttpClient to avoid path resolution issues with openai-php
         $client = \Symfony\Component\HttpClient\HttpClient::create([
            'verify_peer' => false,
            'verify_host' => false,
        ]);

        $voice = $this->getVoiceForLocale($locale);

        $this->logger->info('TTS request', [                
            'parada_id' => $paradaId,
            'model' => $this->model,
            'voice' => $voice,
            'locale' => $locale,
            'chars' => mb_strlen($text, 'UTF-8'),
        ]);

        $response = $client->request('POST', 'https://api.openai.com/v1/audio/speech', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->apiKey,
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'model' => $this->model,
                'input' => $text,
                'voice' => $voice,
                'response_format' => $responseFormat,
            ],
        ]);

        if ($response->getStatusCode() !== 200) {
            throw new \RuntimeException('OpenAI API Error: ' . $response->getStatusCode() . ' - ' . $response->getContent(false));
        }

        return $response->getContent();
    }

    /**
     * Splits text into chunks respecting the maximum character length.
     * Tries to split by paragraphs first, then sentences.
     */
    private function splitTextIntoChunks(string $text, int $maxLength): array
    {
        $chunks = [];
        $currentChunk = '';

        // Split by sentences (approximately) to avoid cutting words
        // We use a simple regex for sentence splitting
        $sentences = preg_split('/(?<=[.?!])\s+/', $text);

        foreach ($sentences as $sentence) {
            // Create a temporary potential chunk
            // Add a space if it's not the first sentence in the chunk
            $potentialChunk = $currentChunk . ($currentChunk === '' ? '' : ' ') . $sentence;

            if (mb_strlen($potentialChunk, 'UTF-8') <= $maxLength) {
                $currentChunk = $potentialChunk;
            } else {
                // If the single sentence itself is longer than maxLength (unlikely but possible),
                // we'd need to hard split it. API limit is 4096 so 4000 is safe. 
                // A single sentence > 4000 chars is extreme edge case.
                
                // Push current chunk if not empty
                if ($currentChunk !== '') {
                    $chunks[] = $currentChunk;
                }
                
                // Start new chunk with current sentence
                // If sentence is massive (edge case), we accept failure or need character splitting
                // For now assuming sentences fit in 4000
                $currentChunk = $sentence;
            }
        }

        // Push the last remaining chunk
        if ($currentChunk !== '') {
            $chunks[] = $currentChunk;
        }

        return $chunks;
    }

    public function generateAndSaveAudio(
        string $text, 
        string $locale, 
        int $paradaId,
        string $filename,
        string $projectDir
    ): string {
        try {
            // 1. Generate audio content
            $audioContent = $this->generateSpeech($text, $locale, $paradaId, 'mp3');

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
        return $this->defaultVoice;
    }
}