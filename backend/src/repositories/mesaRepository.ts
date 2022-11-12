import { AppDataSource } from "../data-source";
import { Mesa } from "../entities";

export const mesaRepository = AppDataSource.getRepository(Mesa)