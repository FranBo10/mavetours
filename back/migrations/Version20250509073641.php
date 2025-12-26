<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250509073641 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE parada (id INT AUTO_INCREMENT NOT NULL, tour_id INT DEFAULT NULL, titulo VARCHAR(255) NOT NULL, contenido LONGTEXT DEFAULT NULL, latitud DOUBLE PRECISION NOT NULL, longitud DOUBLE PRECISION NOT NULL, imagen VARCHAR(255) DEFAULT NULL, audio_url VARCHAR(255) DEFAULT NULL, video_url VARCHAR(255) DEFAULT NULL, INDEX IDX_ADB5C4F215ED8D43 (tour_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE parada ADD CONSTRAINT FK_ADB5C4F215ED8D43 FOREIGN KEY (tour_id) REFERENCES tour (id)');
        $this->addSql('ALTER TABLE detalles_evento DROP total_adultos, DROP total_kids');
        $this->addSql('ALTER TABLE detalles_reserva DROP FOREIGN KEY FK_D0454BC53042696E');
        $this->addSql('DROP INDEX IDX_D0454BC53042696E ON detalles_reserva');
        $this->addSql('ALTER TABLE detalles_reserva DROP detalles_evento_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE parada DROP FOREIGN KEY FK_ADB5C4F215ED8D43');
        $this->addSql('DROP TABLE parada');
        $this->addSql('ALTER TABLE detalles_evento ADD total_adultos INT NOT NULL, ADD total_kids INT NOT NULL');
        $this->addSql('ALTER TABLE detalles_reserva ADD detalles_evento_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE detalles_reserva ADD CONSTRAINT FK_D0454BC53042696E FOREIGN KEY (detalles_evento_id) REFERENCES detalles_evento (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_D0454BC53042696E ON detalles_reserva (detalles_evento_id)');
    }
}
