import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1604340353821 implements MigrationInterface {
    name = 'migrationDatabase1604340353821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `cards` (`id` int NOT NULL AUTO_INCREMENT, `userId` varchar(255) NOT NULL, `setId` varchar(255) NOT NULL, `term` varchar(255) NOT NULL, `definition` varchar(255) NOT NULL, `updatedAt` datetime NOT NULL, `createdAt` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `sets` (`id` varchar(36) NOT NULL, `userId` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `updatedAt` datetime NOT NULL, `createdAt` datetime NOT NULL, `viewAble` tinyint NOT NULL, `totalCards` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `birthday` date NOT NULL, `updatedAt` datetime NOT NULL, `createdAt` datetime NOT NULL, `role` varchar(255) NOT NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `sets`");
        await queryRunner.query("DROP TABLE `cards`");
    }

}
