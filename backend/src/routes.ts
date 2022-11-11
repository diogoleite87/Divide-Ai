import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const userController = new UserController()

const routes = Router()

routes.post('/user', userController.create)
routes.post('/login', userController.login)

routes.use(authMiddleware)

routes.get('/profile', userController.getProfile)

export default routes