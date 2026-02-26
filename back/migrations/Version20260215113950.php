<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260215113950 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tour DROP FOREIGN KEY FK_6AD1F969E4360615');
        $this->addSql('CREATE TABLE circuito (id INT AUTO_INCREMENT NOT NULL, continente_id INT NOT NULL, titulo VARCHAR(180) NOT NULL, slug VARCHAR(200) NOT NULL, resumen_card VARCHAR(255) DEFAULT NULL, descripcion_larga LONGTEXT DEFAULT NULL, duracion_dias INT DEFAULT NULL, imagen_cover VARCHAR(255) DEFAULT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, orden INT DEFAULT 0 NOT NULL, UNIQUE INDEX UNIQ_30A9B06A989D9B62 (slug), INDEX IDX_30A9B06A5CF04EB5 (continente_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE circuito_dia (id INT AUTO_INCREMENT NOT NULL, circuito_id INT NOT NULL, ciudad_id INT DEFAULT NULL, pais_id INT DEFAULT NULL, dia_numero INT NOT NULL, titulo VARCHAR(180) DEFAULT NULL, descripcion LONGTEXT NOT NULL, transporte VARCHAR(80) DEFAULT NULL, INDEX IDX_BBA7FC4F68CE3E02 (circuito_id), INDEX IDX_BBA7FC4FE8608214 (ciudad_id), INDEX IDX_BBA7FC4FC604D5C6 (pais_id), UNIQUE INDEX uniq_circuito_dia_numero (circuito_id, dia_numero), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ciudad (id INT AUTO_INCREMENT NOT NULL, pais_id INT NOT NULL, nombre VARCHAR(140) NOT NULL, slug VARCHAR(160) NOT NULL, UNIQUE INDEX UNIQ_8E86059E989D9B62 (slug), INDEX IDX_8E86059EC604D5C6 (pais_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE continente (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(120) DEFAULT NULL, slug VARCHAR(140) NOT NULL, imagen_cover VARCHAR(255) DEFAULT NULL, descripcion_corta VARCHAR(255) DEFAULT NULL, orden INT DEFAULT 0 NOT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, UNIQUE INDEX UNIQ_B6058041989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE pais (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(120) NOT NULL, iso2 VARCHAR(2) NOT NULL, slug VARCHAR(140) NOT NULL, UNIQUE INDEX UNIQ_7E5D2EFF1B6F9774 (iso2), UNIQUE INDEX UNIQ_7E5D2EFF989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE circuito ADD CONSTRAINT FK_30A9B06A5CF04EB5 FOREIGN KEY (continente_id) REFERENCES continente (id)');
        $this->addSql('ALTER TABLE circuito_dia ADD CONSTRAINT FK_BBA7FC4F68CE3E02 FOREIGN KEY (circuito_id) REFERENCES circuito (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE circuito_dia ADD CONSTRAINT FK_BBA7FC4FE8608214 FOREIGN KEY (ciudad_id) REFERENCES ciudad (id)');
        $this->addSql('ALTER TABLE circuito_dia ADD CONSTRAINT FK_BBA7FC4FC604D5C6 FOREIGN KEY (pais_id) REFERENCES pais (id)');
        $this->addSql('ALTER TABLE ciudad ADD CONSTRAINT FK_8E86059EC604D5C6 FOREIGN KEY (pais_id) REFERENCES pais (id)');
        $this->addSql('DROP TABLE destino');
        $this->addSql('DROP INDEX IDX_6AD1F969E4360615 ON tour');
        $this->addSql('ALTER TABLE tour CHANGE destino_id ciudad_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tour ADD CONSTRAINT FK_6AD1F969E8608214 FOREIGN KEY (ciudad_id) REFERENCES ciudad (id)');
        $this->addSql('CREATE INDEX IDX_6AD1F969E8608214 ON tour (ciudad_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE tour DROP FOREIGN KEY FK_6AD1F969E8608214');
        $this->addSql('CREATE TABLE destino (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, titulo VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, slug VARCHAR(255) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, imagen VARCHAR(255) CHARACTER SET utf8mb3 NOT NULL COLLATE `utf8mb3_unicode_ci`, descripcion LONGTEXT CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, continente VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, pais VARCHAR(255) CHARACTER SET utf8mb3 DEFAULT NULL COLLATE `utf8mb3_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb3 COLLATE `utf8mb3_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE circuito DROP FOREIGN KEY FK_30A9B06A5CF04EB5');
        $this->addSql('ALTER TABLE circuito_dia DROP FOREIGN KEY FK_BBA7FC4F68CE3E02');
        $this->addSql('ALTER TABLE circuito_dia DROP FOREIGN KEY FK_BBA7FC4FE8608214');
        $this->addSql('ALTER TABLE circuito_dia DROP FOREIGN KEY FK_BBA7FC4FC604D5C6');
        $this->addSql('ALTER TABLE ciudad DROP FOREIGN KEY FK_8E86059EC604D5C6');
        $this->addSql('DROP TABLE circuito');
        $this->addSql('DROP TABLE circuito_dia');
        $this->addSql('DROP TABLE ciudad');
        $this->addSql('DROP TABLE continente');
        $this->addSql('DROP TABLE pais');
        $this->addSql('DROP INDEX IDX_6AD1F969E8608214 ON tour');
        $this->addSql('ALTER TABLE tour CHANGE ciudad_id destino_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tour ADD CONSTRAINT FK_6AD1F969E4360615 FOREIGN KEY (destino_id) REFERENCES destino (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_6AD1F969E4360615 ON tour (destino_id)');
    }
}
