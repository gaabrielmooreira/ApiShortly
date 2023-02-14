import { Router } from "express";
import { getRanking } from "../controllers/RankingController.js";


const RankingRouter = Router();

RankingRouter.get("/ranking", getRanking);

export default RankingRouter;