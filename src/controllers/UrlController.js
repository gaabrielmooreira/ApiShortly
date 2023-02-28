import { nanoid } from 'nanoid';
import db from '../configs/database.js';

export async function insertShortUrl(req, res) {
    const { url } = req.body;
    const code = nanoid(6);
    const userId = res.locals.id;
    
    try {
        await db.query('INSERT INTO "shortUrls" (code,url,"userId") VALUES ($1,$2,$3);',[code, url, userId]);
        const getShortUrl = await db.query('SELECT id, code as "shortUrl" FROM "shortUrls" WHERE code = $1;',[code]);
        return res.status(201).send(getShortUrl.rows[0]);
    } catch (err) {
        res.status(500).send(err);
    }

}

export function getShortUrlById(req, res) {
    res.send("OK")
    
}

export function openShortUrl(req, res) {
    res.send("OK")
}

export function deleteShortUrlById(req, res) {
    res.send("OK")
}
