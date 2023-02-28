import { Router } from "express";
import { deleteShortUrlById, getShortUrlById, insertShortUrl, openShortUrl } from "../controllers/UrlController.js";
import authorization from "../middlewares/authorization.js";
import validatorSchema from "../middlewares/validatorSchema.js";
import { shortUrlSchema } from "../schemas/shortUrlSchema.js";

const UrlRouter = Router();

UrlRouter.post("/urls/shorten", authorization, validatorSchema(shortUrlSchema), insertShortUrl);
UrlRouter.get("/urls/:id", getShortUrlById);
UrlRouter.get("/urls/open/:shortUrl", openShortUrl);
UrlRouter.delete("/urls/:id", authorization, deleteShortUrlById);

export default UrlRouter;