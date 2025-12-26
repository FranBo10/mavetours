<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250612091633 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE parada ADD user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE parada ADD CONSTRAINT FK_ADB5C4F2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_ADB5C4F2A76ED395 ON parada (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE parada DROP FOREIGN KEY FK_ADB5C4F2A76ED395');
        $this->addSql('DROP INDEX IDX_ADB5C4F2A76ED395 ON parada');
        $this->addSql('ALTER TABLE parada DROP user_id');
    }
}
