import jwt from 'jsonwebtoken';

const authorization = (req,res,next) => {
    const header = req.headers;
    const token = header.token?.split(" ")[1];
    try{
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded);
        res.locals.id = decoded.id;
        next();
    } catch(err){
        return res.status(401).send(err);
    }
}

export default authorization;