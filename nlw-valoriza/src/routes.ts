import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserControler = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUserController();

// === users === // 
router.post("/users", createUserControler.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

// === tags === //
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

// === login === //
router.post("/login", authenticateUserController.handle);

// === compliments === //
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

// rota para elogios enviados pelo usuário
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);

// rota para elogios recebidos pelo usuário
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);



export { router };