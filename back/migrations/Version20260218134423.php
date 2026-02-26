<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260218134423 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        if (!$schema->hasTable('destino')) {
            $this->addSql('CREATE TABLE destino (id INT AUTO_INCREMENT NOT NULL, titulo VARCHAR(255) NOT NULL, slug VARCHAR(255) NOT NULL, fecha_creacion DATETIME NOT NULL, imagen VARCHAR(255) DEFAULT NULL, descripcion_corta LONGTEXT DEFAULT NULL, descripcion_larga LONGTEXT DEFAULT NULL, is_active TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_81F64EFA989D9B62 (slug), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        }
        
        // 1. Add destino_id first
        if (!$schema->getTable('circuito')->hasColumn('destino_id')) {
            $this->addSql('ALTER TABLE circuito ADD destino_id INT DEFAULT NULL, CHANGE slug slug VARCHAR(200) DEFAULT NULL');
            $this->addSql('ALTER TABLE circuito ADD CONSTRAINT FK_30A9B06AE4360615 FOREIGN KEY (destino_id) REFERENCES destino (id)');
            $this->addSql('CREATE INDEX IDX_30A9B06AE4360615 ON circuito (destino_id)');
        }

        // 2. Migrate data: Insert distinct destinations into destino
        // Only run if destino table is empty to avoid duplicates if run partially? Or use INSERT IGNORE.
        $this->addSql('INSERT IGNORE INTO destino (titulo, slug, fecha_creacion, is_active) SELECT DISTINCT destino, LOWER(destino), NOW(), 1 FROM circuito WHERE destino IS NOT NULL AND destino != ""');

        // 3. Update circuito with new destino_ids
        $this->addSql('UPDATE circuito c JOIN destino d ON c.destino = d.titulo SET c.destino_id = d.id');

        // 4. Drop old string column 'destino'
        if ($schema->getTable('circuito')->hasColumn('destino')) {
             $this->addSql('ALTER TABLE circuito DROP destino');
        }

        if (!$schema->getTable('tour')->hasColumn('destino_id')) {
            $this->addSql('ALTER TABLE tour ADD destino_id INT DEFAULT NULL');
            $this->addSql('ALTER TABLE tour ADD CONSTRAINT FK_6AD1F969E4360615 FOREIGN KEY (destino_id) REFERENCES destino (id)');
            $this->addSql('CREATE INDEX IDX_6AD1F969E4360615 ON tour (destino_id)');
        }
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE circuito DROP FOREIGN KEY FK_30A9B06AE4360615');
        $this->addSql('ALTER TABLE tour DROP FOREIGN KEY FK_6AD1F969E4360615');
        $this->addSql('DROP TABLE destino');
        $this->addSql('DROP INDEX IDX_30A9B06AE4360615 ON circuito');
        // Revert: Add 'destino' string column back
        $this->addSql('ALTER TABLE circuito ADD destino VARCHAR(50) NOT NULL, DROP destino_id, CHANGE slug slug VARCHAR(200) NOT NULL');
        $this->addSql('DROP INDEX IDX_6AD1F969E4360615 ON tour');
        $this->addSql('ALTER TABLE tour DROP destino_id');
    }
}
