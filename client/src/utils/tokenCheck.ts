import dotenv from 'dotenv';
dotenv.config();

const tokenCheck = (req, res, next) => {
    const token = 
        req.body.access_token ||
        req.query.access_token ||
        req.headers['x-access-token'] ||
        req.cookies.access_token;

    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, process.env.SESSION_SECRET, function(err, decoded) {
        if (err) {
            res.status(401).send('Unauthorized: Invalid token');
        } else {
            req.email = decoded.email;
            next();
        }
        });
    };
}

export default = tokenCheck;