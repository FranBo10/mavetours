<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260226103524 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ciudad (id INT AUTO_INCREMENT NOT NULL, destino_id INT DEFAULT NULL, nombre VARCHAR(120) NOT NULL, slug VARCHAR(200) NOT NULL, pais VARCHAR(2) NOT NULL, imagen VARCHAR(255) DEFAULT NULL, descripcion LONGTEXT DEFAULT NULL, descripcion_es LONGTEXT DEFAULT NULL, descripcion_fr LONGTEXT DEFAULT NULL, is_active TINYINT(1) DEFAULT 1 NOT NULL, UNIQUE INDEX UNIQ_8E86059E989D9B62 (slug), INDEX IDX_8E86059EE4360615 (destino_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ciudad ADD CONSTRAINT FK_8E86059EE4360615 FOREIGN KEY (destino_id) REFERENCES destino (id)');
        $this->addSql('ALTER TABLE blog ADD ciudad_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE blog ADD CONSTRAINT FK_C0155143E8608214 FOREIGN KEY (ciudad_id) REFERENCES ciudad (id)');
        $this->addSql('CREATE INDEX IDX_C0155143E8608214 ON blog (ciudad_id)');
        $this->addSql('ALTER TABLE tour ADD ciudad_id INT DEFAULT NULL, DROP ciudad');
        $this->addSql('ALTER TABLE tour ADD CONSTRAINT FK_6AD1F969E8608214 FOREIGN KEY (ciudad_id) REFERENCES ciudad (id)');
        $this->addSql('CREATE INDEX IDX_6AD1F969E8608214 ON tour (ciudad_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE blog DROP FOREIGN KEY FK_C0155143E8608214');
        $this->addSql('ALTER TABLE tour DROP FOREIGN KEY FK_6AD1F969E8608214');
        $this->addSql('ALTER TABLE ciudad DROP FOREIGN KEY FK_8E86059EE4360615');
        $this->addSql('DROP TABLE ciudad');
        $this->addSql('DROP INDEX IDX_C0155143E8608214 ON blog');
        $this->addSql('ALTER TABLE blog DROP ciudad_id');
        $this->addSql('DROP INDEX IDX_6AD1F969E8608214 ON tour');
        $this->addSql('ALTER TABLE tour ADD ciudad VARCHAR(120) DEFAULT NULL, DROP ciudad_id');
    }
}
