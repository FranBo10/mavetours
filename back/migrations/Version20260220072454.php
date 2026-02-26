<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260220072454 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE circuito ADD descripcion LONGTEXT DEFAULT NULL, ADD descripcion_fr LONGTEXT DEFAULT NULL, ADD descripcion_es LONGTEXT DEFAULT NULL, DROP descripcion_larga, DROP subtitulo, DROP subtitulo_es, DROP subtitulo_fr, DROP descripcion_larga_fr, DROP descripcion_larga_es, DROP descripcion_corta, DROP descripcion_corta_es, DROP descripcion_corta_fr, DROP hora_inicio, DROP hora_fin, DROP duracion, DROP comienzo, DROP final, DROP rango');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE circuito ADD descripcion_larga LONGTEXT DEFAULT NULL, ADD subtitulo VARCHAR(255) DEFAULT NULL, ADD subtitulo_es VARCHAR(255) DEFAULT NULL, ADD subtitulo_fr VARCHAR(255) DEFAULT NULL, ADD descripcion_larga_fr LONGTEXT DEFAULT NULL, ADD descripcion_larga_es LONGTEXT DEFAULT NULL, ADD descripcion_corta LONGTEXT DEFAULT NULL, ADD descripcion_corta_es LONGTEXT DEFAULT NULL, ADD descripcion_corta_fr LONGTEXT DEFAULT NULL, ADD hora_inicio TIME DEFAULT NULL, ADD hora_fin TIME DEFAULT NULL, ADD duracion VARCHAR(20) DEFAULT NULL, ADD comienzo VARCHAR(50) DEFAULT NULL, ADD final VARCHAR(50) DEFAULT NULL, ADD rango VARCHAR(80) DEFAULT NULL, DROP descripcion, DROP descripcion_fr, DROP descripcion_es');
    }
}
