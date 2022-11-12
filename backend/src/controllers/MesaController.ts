import { Request, Response } from "express";
import { Mesa } from "../entities";
import { BadRequestError } from "../helpers/api-erros";
import { mesaRepository } from "../repositories/mesaRepository";
import { MesaType } from "../schemas/Models";

export class MesaController {

    async create(req: Request, res: Response) {

        const mesa: MesaType = req.body

        const newMesa = mesaRepository.create({
            name: mesa.name,
            user: req.user,
            value: 0
        })

        await mesaRepository.save(newMesa)

        return res.status(201).json(newMesa)
    }

    async getMesas(req: Request, res: Response) {

        const mesas = await mesaRepository.findBy({
            user: {
                id: req.user.id
            }
        })

        return res.status(201).json(mesas)
    }

}