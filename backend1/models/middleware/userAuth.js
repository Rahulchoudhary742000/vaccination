const jwt=require('jsonwebtoken');//*********JWT*******
const JwtKey="secretKey";  //*********JWT key*******
function verifyToken(req, res, next) {  //<-- middleware for token verify

  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ")[1];
    
    const token = bearer.split(";")[0];
  
    jwt.verify(token, JwtKey, (err, vaild) => {
      if (err) {
        res.status(401).send({ result: "please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    res.status(403).send({
      result: "Token is not valid",
    });
  }
}
module.exports=verifyToken;
