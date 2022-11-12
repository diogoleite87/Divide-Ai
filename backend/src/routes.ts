import { Router } from "express";
import { MesaController } from "./controllers/MesaController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const userController = new UserController()
const mesaController = new MesaController()

const routes = Router()

routes.post('/user', userController.create)
routes.post('/login', userController.login)

routes.use(authMiddleware)

routes.get('/profile', userController.getProfile)
routes.post('/mesa', mesaController.create)
routes.get('/mesa', mesaController.getMesas)

export default routes