const childModel=require('../../models/mongoose/child');

async function child(req,res){
    let parentEmail=req.body.parentEmail;
    let data=await childModel.find({parentEmail})
    
    if(data==null){
        res.send(false)
    }
    else{
        res.send(data);
    }

    res.end();

}
module.exports=child;