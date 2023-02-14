import { Router } from "express";
import { signIn, signUp } from "../controllers/AuthController.js";


const AuthRouter = Router();


AuthRouter.post("/signup", signUp);
AuthRouter.post("/signin", signIn);

export default AuthRouter;