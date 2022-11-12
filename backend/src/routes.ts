import { Router } from "express";
import { MesaController } from "./controllers/MesaController";
import { PeopleController } from "./controllers/PeopleController";
import { UserController } from "./controllers/UserController";
import { authMiddleware } from "./middlewares/authMiddleware";

const userController = new UserController()
const mesaController = new MesaController()
const peopleController = new PeopleController()

const routes = Router()

routes.post('/user', userController.create)
routes.post('/login', userController.login)

routes.use(authMiddleware)

routes.get('/profile', userController.getProfile)
routes.post('/mesa', mesaController.create)
routes.get('/mesa', mesaController.getMesas)
routes.delete('/mesa/:id', mesaController.deleteMesa)
routes.post('/people/:mesaid', peopleController.createPeople)
routes.get('/people/:mesaid', peopleController.getPeoplesForMesa)
routes.delete('/people/:id', peopleController.deletePeople)

export default routes