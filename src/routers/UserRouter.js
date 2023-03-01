import { Router } from "express";
import { getUserMe } from "../controllers/UserController.js";
import authorization from "../middlewares/authorization.js";


const UserRouter = Router();

UserRouter.get("/users/me", authorization, getUserMe);

export default UserRouter;