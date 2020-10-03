import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1601738625519 implements MigrationInterface {
    name = 'migrationDatabase1601738625519'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `items` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` date NULL DEFAULT NULL, `updatedAt` date NULL DEFAULT NULL, `name` varchar(20) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `products` (`id` varchar(36) NOT NULL, `name` varchar(20) NOT NULL, `quantity` int NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `products`");
        await queryRunner.query("DROP TABLE `items`");
    }

}
