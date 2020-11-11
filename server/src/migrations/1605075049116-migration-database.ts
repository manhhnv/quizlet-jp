import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1605075049116 implements MigrationInterface {
    name = 'migrationDatabase1605075049116'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `folder-set` (`folderId` varchar(255) NOT NULL, `setId` varchar(255) NOT NULL, PRIMARY KEY (`folderId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `cards` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `cards` DROP COLUMN `updatedAt`");
        await queryRunner.query("ALTER TABLE `cards` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `cards` ADD `orderNumber` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cards` DROP COLUMN `orderNumber`");
        await queryRunner.query("ALTER TABLE `cards` ADD `createdAt` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `cards` ADD `updatedAt` datetime NOT NULL");
        await queryRunner.query("ALTER TABLE `cards` ADD `userId` varchar(255) NOT NULL");
        await queryRunner.query("DROP TABLE `folder-set`");
    }

}
