<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260215150808 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE horario_tour (horario_id INT NOT NULL, tour_id INT NOT NULL, INDEX IDX_D72C221E4959F1BA (horario_id), INDEX IDX_D72C221E15ED8D43 (tour_id), PRIMARY KEY(horario_id, tour_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE horario_tour ADD CONSTRAINT FK_D72C221E4959F1BA FOREIGN KEY (horario_id) REFERENCES horario (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE horario_tour ADD CONSTRAINT FK_D72C221E15ED8D43 FOREIGN KEY (tour_id) REFERENCES tour (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE circuito_horario DROP FOREIGN KEY FK_687CB9AD4959F1BA');
        $this->addSql('ALTER TABLE circuito_horario DROP FOREIGN KEY FK_687CB9AD68CE3E02');
        $this->addSql('DROP TABLE circuito_horario');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE circuito_horario (circuito_id INT NOT NULL, horario_id INT NOT NULL, INDEX IDX_687CB9AD68CE3E02 (circuito_id), INDEX IDX_687CB9AD4959F1BA (horario_id), PRIMARY KEY(circuito_id, horario_id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE circuito_horario ADD CONSTRAINT FK_687CB9AD4959F1BA FOREIGN KEY (horario_id) REFERENCES horario (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE circuito_horario ADD CONSTRAINT FK_687CB9AD68CE3E02 FOREIGN KEY (circuito_id) REFERENCES circuito (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE horario_tour DROP FOREIGN KEY FK_D72C221E4959F1BA');
        $this->addSql('ALTER TABLE horario_tour DROP FOREIGN KEY FK_D72C221E15ED8D43');
        $this->addSql('DROP TABLE horario_tour');
    }
}
