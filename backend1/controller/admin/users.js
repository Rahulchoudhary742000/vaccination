const userModel=require('../../models/mongoose/user');

async function Users(req,res){
   let data=await userModel.find()
   res.send(data)

}
module.exports=Users;