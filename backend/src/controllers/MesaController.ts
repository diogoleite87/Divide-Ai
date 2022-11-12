import { Request, Response } from "express";
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

    async deleteMesa(req: Request, res: Response) {

        const id = Number(req.params.id)

        const mesaExists = await mesaRepository.findOne({
            where: {
                id,
                user: {
                    id: req.user.id
                }
            }
        })

        if (!mesaExists) {
            throw new BadRequestError("Mesa não existe")
        }

        await mesaRepository.delete({
            id
        })

        return res.status(201)
    }

}