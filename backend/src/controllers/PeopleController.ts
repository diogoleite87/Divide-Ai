import { Request, Response } from "express"
import { BadRequestError } from "../helpers/api-erros"
import { mesaRepository } from "../repositories/mesaRepository"
import { peopleRepository } from "../repositories/peopleRepository"
import { PeopleType } from "../schemas/Models"

export class PeopleController {

    async createPeople(req: Request, res: Response) {

        const people: PeopleType = req.body
        const mesaId = Number(req.params.mesaid)

        console.log(people)

        const mesaExists = await mesaRepository.findOne({
            where: {
                id: mesaId,
                user: {
                    id: req.user.id
                }
            }
        })

        if (!mesaExists) {
            throw new BadRequestError("Mesa não existe")
        }

        const createPeople = peopleRepository.create({
            name: people.name,
            mesa: {
                id: mesaId,
            },
            value: 0
        })

        console.log(createPeople)

        await peopleRepository.save(createPeople)

        return res.status(201).json(createPeople)
    }

    async getPeoplesForMesa(req: Request, res: Response) {

        const mesaid = Number(req.params.mesaid)

        const peoples = await peopleRepository.find({
            where: {
                mesa: {
                    id: mesaid,
                    user: {
                        id: req.user.id
                    }
                }
            }
        })

        return res.status(201).json(peoples)
    }

    async deletePeople(req: Request, res: Response) {

        const id = Number(req.params.id)

        const peopleExists = await peopleRepository.findOne({
            where: {
                id
            }
        })

        if (!peopleExists) {
            throw new BadRequestError("Pessoa não cadastrada")
        }

        await peopleRepository.delete({
            id
        })

        return res.status(201).send()
    }
}