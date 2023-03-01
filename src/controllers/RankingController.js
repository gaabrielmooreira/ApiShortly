import db from "../configs/database.js"

export async function getRanking(req, res){
    try{
        const getRank = await db.query(
            `
                SELECT u.id, u.name, COUNT(s.id) AS "linksCount", SUM(s.views) AS "visitCount" 
                FROM users u
                JOIN "shortUrls" s
                ON s."userId" = u.id
                GROUP BY u.id
                ORDER BY "visitCount" desc
                LIMIT 10;
                `
        );
        const rank = getRank.rows;
        res.send(rank);
    } catch(err) {
        res.status(500).send(err);
    }
}
