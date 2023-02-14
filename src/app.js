import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import AuthRouter from './routers/AuthRouter.js';
import RankingRouter from './routers/RankingRouter.js';
import UrlRouter from './routers/UrlRouter.js';
import UserRouter from './routers/UserRouter.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use([AuthRouter, RankingRouter, UrlRouter, UserRouter]);

app.listen(process.env.PORT,() => console.log(`Server is running in PORT: ${process.env.PORT}`));