<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260215141448 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tour DROP FOREIGN KEY FK_6AD1F969E8608214');
        $this->addSql('ALTER TABLE circuito DROP FOREIGN KEY FK_30A9B06A5CF04EB5');
        $this->addSql('CREATE TABLE circuito_horario (circuito_id INT NOT NULL, horario_id INT NOT NULL, INDEX IDX_687CB9AD68CE3E02 (circuito_id), INDEX IDX_687CB9AD4959F1BA (horario_id), PRIMARY KEY(circuito_id, horario_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reserva_circuito (reserva_id INT NOT NULL, circuito_id INT NOT NULL, INDEX IDX_58B5D0A5D67139E8 (reserva_id), INDEX IDX_58B5D0A568CE3E02 (circuito_id), PRIMARY KEY(reserva_id, circuito_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE circuito_horario ADD CONSTRAINT FK_687CB9AD68CE3E02 FOREIGN KEY (circuito_id) REFERENCES circuito (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE circuito_horario ADD CONSTRAINT FK_687CB9AD4959F1BA FOREIGN KEY (horario_id) REFERENCES horario (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE reserva_circuito ADD CONSTRAINT FK_58B5D0A5D67139E8 FOREIGN KEY (reserva_id) REFERENCES reserva (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE reserva_circuito ADD CONSTRAINT FK_58B5D0A568CE3E02 FOREIGN KEY (circuito_id) REFERENCES circuito (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE circuito_dia DROP FOREIGN KEY FK_BBA7FC4F68CE3E02');
        $this->addSql('ALTER TABLE circuito_dia DROP FOREIGN KEY FK_BBA7FC4FC604D5C6');
        $this->addSql('ALTER TABLE circuito_dia DROP FOREIGN KEY FK_BBA7FC4FE8608214');
        $this->addSql('ALTER TABLE ciudad DROP FOREIGN KEY FK_8E86059EC604D5C6');
        $this->addSql('ALTER TABLE horario_tour DROP FOREIGN KEY FK_D72C221E15ED8D43');
        $this->addSql('ALTER TABLE horario_tour DROP FOREIGN KEY FK_D72C221E4959F1BA');
        $this->addSql('DROP TABLE circuito_dia');
        $this->addSql('DROP TABLE ciudad');
        $this->addSql('DROP TABLE continente');
        $this->addSql('DROP TABLE horario_tour');
        $this->addSql('DROP TABLE pais');
        $this->addSql('DROP INDEX IDX_30A9B06A5CF04EB5 ON circuito');
        $this->addSql('ALTER TABLE circuito ADD titulo_es VARCHAR(180) DEFAULT NULL, ADD titulo_fr VARCHAR(180) DEFAULT NULL, ADD subtitulo VARCHAR(255) DEFAULT NULL, ADD subtitulo_es VARCHAR(255) DEFAULT NULL, ADD subtitulo_fr VARCHAR(255) DEFAULT NULL, ADD continente VARCHAR(50) NOT NULL, ADD descripcion_larga_fr LONGTEXT DEFAULT NULL, ADD descripcion_larga_es LONGTEXT DEFAULT NULL, ADD descripcion_corta LONGTEXT DEFAULT NULL, ADD descripcion_corta_es LONGTEXT DEFAULT NULL, ADD descripcion_corta_fr LONGTEXT DEFAULT NULL, ADD precio DOUBLE PRECISION DEFAULT NULL, ADD estado TINYINT(1) DEFAULT NULL, ADD hora_inicio TIME DEFAULT NULL, ADD hora_fin TIME DEFAULT NULL, ADD duracion VARCHAR(20) DEFAULT NULL, ADD comienzo VARCHAR(50) DEFAULT NULL, ADD final VARCHAR(50) DEFAULT NULL, ADD rango VARCHAR(80) DEFAULT NULL, ADD mapa_comienzo LONGTEXT DEFAULT NULL, ADD mapa_final LONGTEXT DEFAULT NULL, DROP continente_id, CHANGE orden orden INT DEFAULT NULL, CHANGE duracion_dias stock INT DEFAULT NULL');
        $this->addSql('ALTER TABLE etapa DROP FOREIGN KEY FK_2F32B1C415ED8D43');
        $this->addSql('DROP INDEX IDX_2F32B1C415ED8D43 ON etapa');
        $this->addSql('ALTER TABLE etapa ADD dia_numero INT NOT NULL, ADD pais VARCHAR(2) NOT NULL, ADD ciudad VARCHAR(120) DEFAULT NULL, ADD transporte VARCHAR(80) DEFAULT NULL, CHANGE tour_id circuito_id INT NOT NULL');
        $this->addSql('ALTER TABLE etapa ADD CONSTRAINT FK_2F32B1C468CE3E02 FOREIGN KEY (circuito_id) REFERENCES circuito (id) ON DELETE CASCADE');
        $this->addSql('CREATE INDEX IDX_2F32B1C468CE3E02 ON etapa (circuito_id)');
        $this->addSql('ALTER TABLE evento ADD circuito_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE evento ADD CONSTRAINT FK_47860B0568CE3E02 FOREIGN KEY (circuito_id) REFERENCES circuito (id)');
        $this->addSql('CREATE INDEX IDX_47860B0568CE3E02 ON evento (circuito_id)');
        $this->addSql('ALTER TABLE horario CHANGE activo activo TINYINT(1) DEFAULT 0 NOT NULL');
        $this->addSql('DROP INDEX IDX_6AD1F969E8608214 ON tour');
        $this->addSql('ALTER TABLE tour DROP ciudad_id, DROP subtitulo, DROP subtitulo_es, DROP subtitulo_fr');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE circuito_dia (id INT AUTO_INCREMENT NOT NULL, circuito_id INT NOT NULL, ciudad_id INT DEFAULT NULL, pais_id INT DEFAULT NULL, dia_numero INT NOT NULL, titulo VARCHAR(180) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, descripcion LONGTEXT CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, transporte VARCHAR(80) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, UNIQUE INDEX uniq_circuito_dia_numero (circuito_id, dia_numero), INDEX IDX_BBA7FC4F68CE3E02 (circuito_id), INDEX IDX_BBA7FC4FE8608214 (ciudad_id), INDEX IDX_BBA7FC4FC604D5C6 (pais_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE ciudad (id INT AUTO_INCREMENT NOT NULL, pais_id INT NOT NULL, nombre VARCHAR(140) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, slug VARCHAR(160) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, INDEX IDX_8E86059EC604D5C6 (pais_id), UNIQUE INDEX UNIQ_8E86059E989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE continente (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(120) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, slug VARCHAR(140) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, imagen_cover VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, descripcion_corta VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, orden INT DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, UNIQUE INDEX UNIQ_B6058041989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE horario_tour (horario_id INT NOT NULL, tour_id INT NOT NULL, INDEX IDX_D72C221E4959F1BA (horario_id), INDEX IDX_D72C221E15ED8D43 (tour_id), PRIMARY KEY(horario_id, tour_id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE pais (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(120) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, iso2 VARCHAR(2) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, slug VARCHAR(140) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, UNIQUE INDEX UNIQ_7E5D2EFF1B6F9774 (iso2), UNIQUE INDEX UNIQ_7E5D2EFF989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE circuito_dia ADD CONSTRAINT FK_BBA7FC4F68CE3E02 FOREIGN KEY (circuito_id) REFERENCES circuito (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE circuito_dia ADD CONSTRAINT FK_BBA7FC4FC604D5C6 FOREIGN KEY (pais_id) REFERENCES pais (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE circuito_dia ADD CONSTRAINT FK_BBA7FC4FE8608214 FOREIGN KEY (ciudad_id) REFERENCES ciudad (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE ciudad ADD CONSTRAINT FK_8E86059EC604D5C6 FOREIGN KEY (pais_id) REFERENCES pais (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE horario_tour ADD CONSTRAINT FK_D72C221E15ED8D43 FOREIGN KEY (tour_id) REFERENCES tour (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE horario_tour ADD CONSTRAINT FK_D72C221E4959F1BA FOREIGN KEY (horario_id) REFERENCES horario (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE circuito_horario DROP FOREIGN KEY FK_687CB9AD68CE3E02');
        $this->addSql('ALTER TABLE circuito_horario DROP FOREIGN KEY FK_687CB9AD4959F1BA');
        $this->addSql('ALTER TABLE reserva_circuito DROP FOREIGN KEY FK_58B5D0A5D67139E8');
        $this->addSql('ALTER TABLE reserva_circuito DROP FOREIGN KEY FK_58B5D0A568CE3E02');
        $this->addSql('DROP TABLE circuito_horario');
        $this->addSql('DROP TABLE reserva_circuito');
        $this->addSql('ALTER TABLE circuito ADD continente_id INT NOT NULL, DROP titulo_es, DROP titulo_fr, DROP subtitulo, DROP subtitulo_es, DROP subtitulo_fr, DROP continente, DROP descripcion_larga_fr, DROP descripcion_larga_es, DROP descripcion_corta, DROP descripcion_corta_es, DROP descripcion_corta_fr, DROP precio, DROP estado, DROP hora_inicio, DROP hora_fin, DROP duracion, DROP comienzo, DROP final, DROP rango, DROP mapa_comienzo, DROP mapa_final, CHANGE orden orden INT DEFAULT 0 NOT NULL, CHANGE stock duracion_dias INT DEFAULT NULL');
        $this->addSql('ALTER TABLE circuito ADD CONSTRAINT FK_30A9B06A5CF04EB5 FOREIGN KEY (continente_id) REFERENCES continente (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_30A9B06A5CF04EB5 ON circuito (continente_id)');
        $this->addSql('ALTER TABLE etapa DROP FOREIGN KEY FK_2F32B1C468CE3E02');
        $this->addSql('DROP INDEX IDX_2F32B1C468CE3E02 ON etapa');
        $this->addSql('ALTER TABLE etapa ADD tour_id INT NOT NULL, DROP circuito_id, DROP dia_numero, DROP pais, DROP ciudad, DROP transporte');
        $this->addSql('ALTER TABLE etapa ADD CONSTRAINT FK_2F32B1C415ED8D43 FOREIGN KEY (tour_id) REFERENCES tour (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_2F32B1C415ED8D43 ON etapa (tour_id)');
        $this->addSql('ALTER TABLE evento DROP FOREIGN KEY FK_47860B0568CE3E02');
        $this->addSql('DROP INDEX IDX_47860B0568CE3E02 ON evento');
        $this->addSql('ALTER TABLE evento DROP circuito_id');
        $this->addSql('ALTER TABLE horario CHANGE activo activo TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE tour ADD ciudad_id INT DEFAULT NULL, ADD subtitulo VARCHAR(255) DEFAULT NULL, ADD subtitulo_es VARCHAR(255) DEFAULT NULL, ADD subtitulo_fr VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE tour ADD CONSTRAINT FK_6AD1F969E8608214 FOREIGN KEY (ciudad_id) REFERENCES ciudad (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_6AD1F969E8608214 ON tour (ciudad_id)');
    }
}
