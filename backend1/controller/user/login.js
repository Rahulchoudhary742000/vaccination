const userModel = require("../../models/mongoose/user");
const jwt = require("jsonwebtoken");
const JwtKey = "secretKey";
async function Login(req,res){
    
    let email = req.body.email;
    let password = req.body.password;
    let data = await userModel.findOne({ email });
  
    if (data) {
      if (data.password == password) {
        jwt.sign({ email }, JwtKey, { expiresIn: 2160000 }, (err, token) => {
          res.cookie("vacineToken", token, { maxAge: 2160000 }).save;
          res.cookie("vacineUser", email, { maxAge: 2160000 }).save;
          res.send(true);
        });
      } else {
        console.log("password mismatch");
      }
    } else {
      console.log("email mismatch");
    }
}
module.exports=Login;