import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1605628078038 implements MigrationInterface {
    name = 'migrationDatabase1605628078038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sets` ADD `definitionLanguage` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `sets` ADD `termLanguage` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sets` DROP COLUMN `termLanguage`");
        await queryRunner.query("ALTER TABLE `sets` DROP COLUMN `definitionLanguage`");
    }

}
