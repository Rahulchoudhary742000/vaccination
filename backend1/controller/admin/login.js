const adminModel=require('../../models/mongoose/admin');

async function Login(req,res){
  
    let username=req.body.Username;
    let password=req.body.password;
    // let data=await new admin({username,password}).save();
    console.log(username)
    let data=await adminModel.findOne({username})
 
    if(data){
       if(data.password==password){
          res.send(true);
       }
       else{
          res.send('password mismatch')
       }
    }
    else{
       res.send(false);
    }
  
    res.end()
  
}
module.exports=Login;