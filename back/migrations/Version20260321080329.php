<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260321080329 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE slider ADD destino_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE slider ADD CONSTRAINT FK_CFC71007E4360615 FOREIGN KEY (destino_id) REFERENCES destino (id)');
        $this->addSql('CREATE INDEX IDX_CFC71007E4360615 ON slider (destino_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE slider DROP FOREIGN KEY FK_CFC71007E4360615');
        $this->addSql('DROP INDEX IDX_CFC71007E4360615 ON slider');
        $this->addSql('ALTER TABLE slider DROP destino_id');
    }
}
