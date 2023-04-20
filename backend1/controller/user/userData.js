const userModel = require("../../models/mongoose/user");
async function UserData(req,res){
    const email = req.body.email;
    let data = await userModel.findOne({ email });
    res.json(data.username);
}
module.exports=UserData;