const childModel=require('../../models/mongoose/child');

async function Edit(req,res){
    let chidID=req.body[0];
    let _id=chidID.chidID;
 
    let data=await childModel.updateOne({_id},{$set:req.body[1]})
    if(data.acknowledged){
      res.send(true);
    }
    else{
      res.send(false);
    }
    res.end();
}
module.exports=Edit;