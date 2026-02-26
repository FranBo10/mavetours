<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260215090429 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE destino (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) NOT NULL, titulo VARCHAR(255) DEFAULT NULL, slug VARCHAR(255) NOT NULL, imagen VARCHAR(255) NOT NULL, descripcion LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE etapa (id INT AUTO_INCREMENT NOT NULL, tour_id INT NOT NULL, titulo VARCHAR(255) NOT NULL, descripcion LONGTEXT NOT NULL, orden INT NOT NULL, INDEX IDX_2F32B1C415ED8D43 (tour_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE etapa ADD CONSTRAINT FK_2F32B1C415ED8D43 FOREIGN KEY (tour_id) REFERENCES tour (id)');
        $this->addSql('ALTER TABLE tour ADD destino_id INT DEFAULT NULL, ADD subtitulo VARCHAR(255) DEFAULT NULL, ADD subtitulo_es VARCHAR(255) DEFAULT NULL, ADD subtitulo_fr VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE tour ADD CONSTRAINT FK_6AD1F969E4360615 FOREIGN KEY (destino_id) REFERENCES destino (id)');
        $this->addSql('CREATE INDEX IDX_6AD1F969E4360615 ON tour (destino_id)');
        $this->addSql('DROP INDEX IDX_75EA56E0FB7336F0 ON messenger_messages');
        $this->addSql('DROP INDEX IDX_75EA56E0E3BD61CE ON messenger_messages');
        $this->addSql('DROP INDEX IDX_75EA56E016BA31DB ON messenger_messages');
        $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750 ON messenger_messages (queue_name, available_at, delivered_at, id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tour DROP FOREIGN KEY FK_6AD1F969E4360615');
        $this->addSql('ALTER TABLE etapa DROP FOREIGN KEY FK_2F32B1C415ED8D43');
        $this->addSql('DROP TABLE destino');
        $this->addSql('DROP TABLE etapa');
        $this->addSql('DROP INDEX IDX_75EA56E0FB7336F0E3BD61CE16BA31DBBF396750 ON messenger_messages');
        $this->addSql('CREATE INDEX IDX_75EA56E0FB7336F0 ON messenger_messages (queue_name)');
        $this->addSql('CREATE INDEX IDX_75EA56E0E3BD61CE ON messenger_messages (available_at)');
        $this->addSql('CREATE INDEX IDX_75EA56E016BA31DB ON messenger_messages (delivered_at)');
        $this->addSql('DROP INDEX IDX_6AD1F969E4360615 ON tour');
        $this->addSql('ALTER TABLE tour DROP destino_id, DROP subtitulo, DROP subtitulo_es, DROP subtitulo_fr');
    }
}
