<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260220094500 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Rename imagen_cover to imagen in circuito table';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE circuito CHANGE imagen_cover imagen VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE circuito CHANGE imagen imagen_cover VARCHAR(255) DEFAULT NULL');
    }
}
