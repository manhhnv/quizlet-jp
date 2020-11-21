import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1604988620019 implements MigrationInterface {
    name = 'migrationDatabase1604988620019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `folders` (`id` varchar(36) NOT NULL, `description` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `creator` varchar(255) NOT NULL, `updatedAt` datetime NOT NULL, `createdAt` datetime NOT NULL, `totalSets` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `folders`");
    }

}
