import { Router } from "express";
import { signIn, signUp } from "../controllers/AuthController.js";
import validatorSchema from "../middlewares/validatorSchema.js";
import { signInSchema, signUpSchema } from "../schemas/authSchema.js";


const AuthRouter = Router();


AuthRouter.post("/signup", validatorSchema(signUpSchema), signUp);
AuthRouter.post("/signin", validatorSchema(signInSchema), signIn);

export default AuthRouter;