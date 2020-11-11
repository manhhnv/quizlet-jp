import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1604987733908 implements MigrationInterface {
    name = 'migrationDatabase1604987733908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cards` ADD `definitionLanguage` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `cards` ADD `termLanguage` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cards` DROP COLUMN `termLanguage`");
        await queryRunner.query("ALTER TABLE `cards` DROP COLUMN `definitionLanguage`");
    }

}
