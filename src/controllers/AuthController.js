import db from "../configs/database.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function signIn(req, res){
    const {email, password} = req.body;
    const SECRET_KEY= '00gabriel00';
    try{
        const getUser = await db.query('SELECT * FROM users WHERE email = $1;',[email]);
        const user = getUser.rows[0];
        const checkPassword = bcrypt.compareSync(password, user.password);

        if(user && checkPassword){
            const token = jwt.sign({id: user.id}, SECRET_KEY);
            return res.send({name: user.name, token});
        } else {
            return res.sendStatus(401);
        }
    } catch(err) {
        res.status(500).send(err);
    }
}

export async function signUp(req, res){
    const {name, email, password} = req.body;
    try{
        const verifyEmail = await db.query('SELECT 1 FROM users WHERE email = $1',[email]);
        if(verifyEmail.rows[0]) return res.sendStatus(409);

        const hashPassword = bcrypt.hashSync(password, 10);
        await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3);',[name, email, hashPassword]);
        return res.sendStatus(201);
    } catch(err) {
        res.status(500).send(err);
    }
}