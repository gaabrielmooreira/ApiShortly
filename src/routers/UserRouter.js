import { Router } from "express";
import { getUserMe } from "../controllers/UserController.js";


const UserRouter = Router();

UserRouter.get("users/me", getUserMe);

export default UserRouter;