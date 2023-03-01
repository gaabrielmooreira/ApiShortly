import db from "../configs/database.js";

export async function getUserMe(req, res) {
    const userId = res.locals.id;
    try {
        const userWithVisitCount = await db.query(
            `
                SELECT u.id, u.name, SUM(s.views) AS "visitCount"
                FROM users u
                JOIN "shortUrls" s
                ON s."userId" = u.id
                WHERE u.id = $1
                GROUP BY u.id;
            `,[userId]
        );
        const shortenedUrls = await db.query(
            `   SELECT id, code AS "shortUrl", url, views AS "visitCount"
                FROM "shortUrls"
                WHERE "userId" = $1;
            `,[userId]
        );
        
        res.send({...userWithVisitCount.rows[0], shortenedUrls: shortenedUrls.rows});
    } catch (err) {
        res.status(500).send(err);
    }
}

// {
//     "id": id do usuário,
//       "name": nome do usuário,
//       "visitCount": soma da quantidade de visitas de todos os links do usuário,
//       "shortenedUrls": [
//           {
//               "id": 1,
//               "shortUrl": "...",
//               "url": "...",
//               "visitCount": soma da quantidade de visitas do link
//           },
//           {
//               "id": 2,
//               "shortUrl": "...",
//               "url": "...",
//               "visitCount": soma da quantidade de visitas do link
//           }
//       ]
// }