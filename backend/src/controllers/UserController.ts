import { Request, Response } from "express";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from "../schemas/Models";

export class UserController {

    async create(req: Request, res: Response) {

        const user: User = req.body

        const userExists = await userRepository.findOneBy({
            email: user.email
        })

        if (userExists) {
            throw new BadRequestError('Email ja cadastrado!')
        }

        const hashPassword = await bcrypt.hash(user.password, 10)

        const newUser = userRepository.create({
            name: user.name,
            email: user.email,
            password: hashPassword
        })

        await userRepository.save(newUser)

        const { password: _, ...resUser } = newUser

        return res.status(201).json({ resUser })
    }

    async login(req: Request, res: Response) {

        const { email, password } = req.body

        const user = await userRepository.findOneBy({
            email
        })

        if (!user) {
            throw new BadRequestError('Email ou senha inválidos')
        }

        const verifyPass = await bcrypt.compare(password, user.password)

        if (!verifyPass) {
            throw new BadRequestError('Email ou senha inválidos')
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', { expiresIn: '8h' })

        const { password: _, ...userLogin } = user

        return res.status(200).json({
            user: userLogin,
            token: token
        })
    }

    async getProfile(req: Request, res: Response) {

        return res.status(200).json(req.user)
    }
}