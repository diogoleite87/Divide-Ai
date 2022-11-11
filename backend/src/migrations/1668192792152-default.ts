import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668192792152 implements MigrationInterface {
    name = 'default1668192792152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mesas" ("id" SERIAL NOT NULL, "name" text NOT NULL, "value" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_ccff054bd3dad6539869d03350c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rounds" ("id" SERIAL NOT NULL, "name" text NOT NULL, "value" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "mesaId" integer, CONSTRAINT "PK_9d254884a20817016e2f877c7e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "peoples" ("id" SERIAL NOT NULL, "name" text NOT NULL, "value" double precision NOT NULL, "roundId" integer, CONSTRAINT "PK_6e07258072dcc27e4935e1f075e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "mesas" ADD CONSTRAINT "FK_d06f57df6db21b1e3d190474db4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "rounds" ADD CONSTRAINT "FK_f96ff8381d7bdab9bde4480b02d" FOREIGN KEY ("mesaId") REFERENCES "mesas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "peoples" ADD CONSTRAINT "FK_c756d1c4c92e62d75158b2edbcf" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peoples" DROP CONSTRAINT "FK_c756d1c4c92e62d75158b2edbcf"`);
        await queryRunner.query(`ALTER TABLE "rounds" DROP CONSTRAINT "FK_f96ff8381d7bdab9bde4480b02d"`);
        await queryRunner.query(`ALTER TABLE "mesas" DROP CONSTRAINT "FK_d06f57df6db21b1e3d190474db4"`);
        await queryRunner.query(`DROP TABLE "peoples"`);
        await queryRunner.query(`DROP TABLE "rounds"`);
        await queryRunner.query(`DROP TABLE "mesas"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
