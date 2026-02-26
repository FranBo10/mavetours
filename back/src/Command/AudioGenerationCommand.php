<?php

namespace App\Command;

use App\Repository\ParadaRepository;
use App\Service\TextToSpeechService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\HttpKernel\KernelInterface;

#[AsCommand(
    name: 'app:generate-audio',
    description: 'Generates static MP3 files for all stops (Paradas). Use --force to regenerate existing files.',
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

    protected function configure(): void
    {
        $this
            ->addOption(
                'id',
                null,
                InputOption::VALUE_OPTIONAL,
                'Generate audio only for this Parada ID'
            )
            ->addOption(
                'lang',
                null,
                InputOption::VALUE_OPTIONAL,
                'Language (en|es|fr|pt)'
            )
            ->addOption(
                'force',
                null,
                InputOption::VALUE_NONE,
                'Force regeneration'
            );
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Starting Audio Generation for Paradas...');

        $force = $input->getOption('force');
        if ($force) {
            $io->warning('Force mode enabled. Existing audios will be OVERWRITTEN.');
        }

        $paradaId = $input->getOption('id');
        $lang = $input->getOption('lang'); // null | en | es | fr

        if ($lang && !in_array($lang, ['en', 'es', 'fr', 'pt'], true)) {
            $io->error('Invalid language. Allowed values: en, es, fr, pt.');
            return Command::FAILURE;
        }

        if ($paradaId) {
            $parada = $this->paradaRepository->find($paradaId);

            if (!$parada) {
                $io->error("Parada with ID $paradaId not found.");
                return Command::FAILURE;
            }

            $paradas = [$parada];
            $io->info("Processing ONLY Parada ID $paradaId.");
        } else {
            $paradas = $this->paradaRepository->findAll();
            $io->info("Processing ALL paradas.");
        }

        $count = count($paradas);
        $io->info("Found $count paradas to check.");

        $processed = 0;
        $errors = 0;

        foreach ($paradas as $parada) {

            // --- 1. English ---
            if (
                (!$lang || $lang === 'en') &&
                ($force || !$parada->getAudioUrl()) &&
                $parada->getContenido()
            ) {
                try {
                    $io->text("Generating EN audio for Parada ID {$parada->getId()}...");
                    $filename = sprintf('parada_%d_en.mp3', $parada->getId());

                    $savedFile = $this->ttsService->generateAndSaveAudio(
                        $parada->getContenido(),
                        'en',
                        (int) $parada->getId(),
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
            if (
                (!$lang || $lang === 'es') &&
                ($force || !$parada->getAudioUrlEs()) &&
                $parada->getContenidoEs()
            ) {
                try {
                    $io->text("Generating ES audio for Parada ID {$parada->getId()}...");
                    $filename = sprintf('parada_%d_es.mp3', $parada->getId());

                    $savedFile = $this->ttsService->generateAndSaveAudio(
                        $parada->getContenidoEs(),
                        'es',
                        (int) $parada->getId(),
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
            if (
                (!$lang || $lang === 'fr') &&
                ($force || !$parada->getAudioUrlFr()) &&
                $parada->getContenidoFr()
            ) {
                try {
                    $io->text("Generating FR audio for Parada ID {$parada->getId()}...");
                    $filename = sprintf('parada_%d_fr.mp3', $parada->getId());

                    $savedFile = $this->ttsService->generateAndSaveAudio(
                        $parada->getContenidoFr(),
                        'fr',
                        (int) $parada->getId(),
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

            // --- 4. Portuguese ---
            if (
                (!$lang || $lang === 'pt') &&
                ($force || !$parada->getAudioUrlPt()) &&
                $parada->getContenidoPt()
            ) {
                try {
                    $io->text("Generating PT audio for Parada ID {$parada->getId()}...");
                    $filename = sprintf('parada_%d_pt.mp3', $parada->getId());

                    $savedFile = $this->ttsService->generateAndSaveAudio(
                        $parada->getContenidoPt(),
                        'pt',
                        (int) $parada->getId(),
                        $filename,
                        $this->projectDir
                    );

                    $parada->setAudioUrlPt($savedFile);
                    $processed++;
                } catch (\Exception $e) {
                    $io->error("Error PT Parada {$parada->getId()}: " . $e->getMessage());
                    $errors++;
                }
            }
        }

        $this->entityManager->flush();

        $io->success("Process completed. Generated/Updated: $processed. Errors: $errors.");

        return Command::SUCCESS;
    }

}
