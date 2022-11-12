import { MigrationInterface, QueryRunner } from "typeorm";

export class default1668198223176 implements MigrationInterface {
    name = 'default1668198223176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peoples" DROP CONSTRAINT "FK_c756d1c4c92e62d75158b2edbcf"`);
        await queryRunner.query(`ALTER TABLE "peoples" RENAME COLUMN "roundId" TO "mesaId"`);
        await queryRunner.query(`ALTER TABLE "peoples" ADD CONSTRAINT "FK_ea7ec7f963bcf41ecaed0dc45f1" FOREIGN KEY ("mesaId") REFERENCES "mesas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peoples" DROP CONSTRAINT "FK_ea7ec7f963bcf41ecaed0dc45f1"`);
        await queryRunner.query(`ALTER TABLE "peoples" RENAME COLUMN "mesaId" TO "roundId"`);
        await queryRunner.query(`ALTER TABLE "peoples" ADD CONSTRAINT "FK_c756d1c4c92e62d75158b2edbcf" FOREIGN KEY ("roundId") REFERENCES "rounds"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
