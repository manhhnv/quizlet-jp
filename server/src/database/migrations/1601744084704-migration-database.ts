import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1601744084704 implements MigrationInterface {
    name = 'migrationDatabase1601744084704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `items` CHANGE `createdAt` `createdAt` date NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `items` CHANGE `updatedAt` `updatedAt` date NULL DEFAULT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `items` CHANGE `updatedAt` `updatedAt` date NULL");
        await queryRunner.query("ALTER TABLE `items` CHANGE `createdAt` `createdAt` date NULL");
    }

}
