import { AppDataSource } from "../data-source";
import { People } from "../entities";

export const peopleRepository = AppDataSource.getRepository(People)