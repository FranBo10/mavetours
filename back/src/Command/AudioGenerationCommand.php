<?php

namespace App\Command;

use App\Entity\Parada;
use App\Repository\ParadaRepository;
use App\Service\TextToSpeechService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\HttpKernel\KernelInterface;

#[AsCommand(
    name: 'app:generate-audio',
    description: 'Generates static MP3 files for all stops (Paradas) that lack them.',
)]
class AudioGenerationCommand extends Command
{
    private string $projectDir;

    public function __construct(
        private ParadaRepository $paradaRepository,
        private TextToSpeechService $ttsService,
        private EntityManagerInterface $entityManager,
        KernelInterface $kernel
    ) {
        parent::__construct();
        $this->projectDir = $kernel->getProjectDir();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Starting Audio Generation for Paradas...');

        $paradas = $this->paradaRepository->findAll();
        $count = count($paradas);
        $io->info("Found $count paradas to check.");

        $processed = 0;
        $errors = 0;

        foreach ($paradas as $parada) {
            // --- 1. English (Default) ---
            if (!$parada->getAudioUrl() && $parada->getContenido()) {
                try {
                    $io->text("Generating EN audio for Parada ID {$parada->getId()}...");
                    $filename = sprintf('parada_%d_en.mp3', $parada->getId());
                    
                    $savedFile = $this->ttsService->generateAndSaveAudio(
                        $parada->getContenido(),
                        'en',
                        $filename,
                        $this->projectDir
                    );
                    
                    $parada->setAudioUrl($savedFile);
                    $processed++;
                } catch (\Exception $e) {
                    $io->error("Error EN Parada {$parada->getId()}: " . $e->getMessage());
                    $errors++;
                }
            }

            // --- 2. Spanish ---
            if (!$parada->getAudioUrlEs() && $parada->getContenidoEs()) {
                try {
                    $io->text("Generating ES audio for Parada ID {$parada->getId()}...");
                    $filename = sprintf('parada_%d_es.mp3', $parada->getId());
                    
                    $savedFile = $this->ttsService->generateAndSaveAudio(
                        $parada->getContenidoEs(),
                        'es',
                        $filename,
                        $this->projectDir
                    );
                    
                    $parada->setAudioUrlEs($savedFile);
                    $processed++;
                } catch (\Exception $e) {
                    $io->error("Error ES Parada {$parada->getId()}: " . $e->getMessage());
                    $errors++;
                }
            }

            // --- 3. French ---
            if (!$parada->getAudioUrlFr() && $parada->getContenidoFr()) {
                try {
                    $io->text("Generating FR audio for Parada ID {$parada->getId()}...");
                    $filename = sprintf('parada_%d_fr.mp3', $parada->getId());
                    
                    $savedFile = $this->ttsService->generateAndSaveAudio(
                        $parada->getContenidoFr(),
                        'fr',
                        $filename,
                        $this->projectDir
                    );
                    
                    $parada->setAudioUrlFr($savedFile);
                    $processed++;
                } catch (\Exception $e) {
                    $io->error("Error FR Parada {$parada->getId()}: " . $e->getMessage());
                    $errors++;
                }
            }
            
            // Persist periodically or at end
        }

        $this->entityManager->flush();

        $io->success("Process completed. Generated: $processed. Errors: $errors.");

        return Command::SUCCESS;
    }
}
