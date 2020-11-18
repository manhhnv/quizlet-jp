import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1605625855925 implements MigrationInterface {
    name = 'migrationDatabase1605625855925'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sets` DROP FOREIGN KEY `FK_264696c515efbaa9f2bd217862e`");
        await queryRunner.query("ALTER TABLE `folders` CHANGE `creator` `creatorId` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `sets` CHANGE `userId` `creatorId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `folder-set` ADD `id` varchar(36) NOT NULL");
        await queryRunner.query("ALTER TABLE `folder-set` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `folder-set` ADD PRIMARY KEY (`folderId`, `id`)");
        await queryRunner.query("ALTER TABLE `folder-set` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `folder-set` ADD PRIMARY KEY (`id`)");
        await queryRunner.query("ALTER TABLE `folders` CHANGE `updatedAt` `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `folders` CHANGE `createdAt` `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `folders` DROP COLUMN `creatorId`");
        await queryRunner.query("ALTER TABLE `folders` ADD `creatorId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `folders` ADD CONSTRAINT `FK_39bfe525acd0ab0ba97282b35e0` FOREIGN KEY (`creatorId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sets` ADD CONSTRAINT `FK_8bc9d86ce37b8c38a67d96ce35a` FOREIGN KEY (`creatorId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `sets` DROP FOREIGN KEY `FK_8bc9d86ce37b8c38a67d96ce35a`");
        await queryRunner.query("ALTER TABLE `folders` DROP FOREIGN KEY `FK_39bfe525acd0ab0ba97282b35e0`");
        await queryRunner.query("ALTER TABLE `folders` DROP COLUMN `creatorId`");
        await queryRunner.query("ALTER TABLE `folders` ADD `creatorId` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `folders` CHANGE `createdAt` `createdAt` datetime(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `folders` CHANGE `updatedAt` `updatedAt` datetime(0) NOT NULL");
        await queryRunner.query("ALTER TABLE `folder-set` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `folder-set` ADD PRIMARY KEY (`folderId`, `id`)");
        await queryRunner.query("ALTER TABLE `folder-set` DROP PRIMARY KEY");
        await queryRunner.query("ALTER TABLE `folder-set` ADD PRIMARY KEY (`folderId`)");
        await queryRunner.query("ALTER TABLE `folder-set` DROP COLUMN `id`");
        await queryRunner.query("ALTER TABLE `sets` CHANGE `creatorId` `userId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `folders` CHANGE `creatorId` `creator` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `sets` ADD CONSTRAINT `FK_264696c515efbaa9f2bd217862e` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
