import {MigrationInterface, QueryRunner} from "typeorm";

export class migrationDatabase1603983138858 implements MigrationInterface {
    name = 'migrationDatabase1603983138858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "birthday" varchar NOT NULL, "updatedAt" varchar NOT NULL, "createdAt" varchar NOT NULL, "role" varchar NOT NULL)`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
