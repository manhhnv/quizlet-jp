import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1604988090918 implements MigrationInterface {
    name = 'migrationDatabase1604988090918'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sets` DROP COLUMN `viewAble`");
        await queryRunner.query("ALTER TABLE `sets` ADD `editable` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `sets` ADD `visible` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sets` DROP COLUMN `visible`");
        await queryRunner.query("ALTER TABLE `sets` DROP COLUMN `editable`");
        await queryRunner.query("ALTER TABLE `sets` ADD `viewAble` tinyint NOT NULL");
    }

}
