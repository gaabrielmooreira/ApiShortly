import jwt from 'jsonwebtoken';

const authorization = (req,res,next) => {
    const header = req.headers;
    const token = header.token?.split(" ")[1];
    const SECRET_KEY='00gabriel00';
    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        res.locals.id = decoded.id;
        next();
    } catch(err){
        return res.status(401).send(err);
    }
}

export default authorization;