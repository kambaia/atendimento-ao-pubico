import { Router } from "express"
import CategoryControllers from "./controller/CategoryControllers";
import QuestionControllers from "./controller/QuestionControllers";
import UserController from "./controller/UserController";

const routes = new Router();

routes.post('/user', UserController.create);
routes.get('/user', UserController.read);
routes.post('/question', QuestionControllers.create);
routes.get('/question', QuestionControllers.read);
routes.post('/category', CategoryControllers.create);
routes.get('/category', CategoryControllers.read);


export default routes;