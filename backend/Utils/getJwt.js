const jwt = require("jsonwebtoken");

exports.getUserIdWithJwt = (req) =>{
    const decodedToken = jwt.verify(req.headers.authorization.split(' ')[1], 'RANDOM_TOKEN_SECRET');
    return decodedToken.userId;
}
