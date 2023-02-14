import { Router } from "express";
import { deleteShortUrlById, getShortUrlById, insertShortUrl, openShortUrl } from "../controllers/UrlController.js";

const UrlRouter = Router();

UrlRouter.post("/urls/shorten", insertShortUrl);
UrlRouter.get("/urls/:id", getShortUrlById);
UrlRouter.get("/urls/open/:shortUrl", openShortUrl);
UrlRouter.delete("/urls/:id", deleteShortUrlById);

export default UrlRouter;