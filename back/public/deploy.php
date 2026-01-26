<?php
// deploy.php - ACCESO TEMPORAL - ELIMINAR DESPUÉS DE USAR

require_once __DIR__.'/vendor/autoload.php';

// Cargar variables de entorno
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Verificación con APP_SECRET
$token = $_GET['token'] ?? '';
$appSecret = $_ENV['APP_SECRET'] ?? '';

if ($token !== $appSecret) {
    header('HTTP/1.0 403 Forbidden');
    die('Acceso no autorizado');
}

// Resto del código de despliegue...
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\BufferedOutput;

$kernel = new AppKernel('prod', false);
$kernel->boot();

$application = new \Symfony\Bundle\FrameworkBundle\Console\Application($kernel);
$application->setAutoExit(false);

$commands = [
    'cache:clear',
    'doctrine:migrations:migrate --no-interaction',
    'cache:warmup'
];

$output = '';
foreach ($commands as $command) {
    $input = new ArrayInput(explode(' ', $command));
    $outputBuffer = new BufferedOutput();
    
    try {
        $application->run($input, $outputBuffer);
        $output .= "<h3>✅ Comando: {$command}</h3>";
        $output .= "<pre>" . $outputBuffer->fetch() . "</pre>";
    } catch (Exception $e) {
        $output .= "<h3>❌ Error en: {$command}</h3>";
        $output .= "<pre>" . $e->getMessage() . "</pre>";
    }
}

echo "<h1>🚀 Despliegue Completado</h1>" . $output;