import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import jwt from 'jsonwebtoken'
import { JwtPayload } from "../schemas/Models";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const { authorization } = req.headers

    if (!authorization) {
        throw new UnauthorizedError('Não autorizado')
    }

    const token = authorization.split(' ')[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

    const userExists = await userRepository.findOneBy({
        id
    })

    if (!userExists) {
        throw new UnauthorizedError('Não autorizado')
    }

    const { password: _, ...loggedUser } = userExists

    req.user = loggedUser

    next()
}