const childModel=require('../../models/mongoose/child');

async function Delete(req,res){
    let _id=req.body._id;
    let data=await childModel.deleteOne({_id})
    if(data.acknowledged){
      res.send(true);
    }
    else{
      res.send(false)
    }
    res.end();
}
module.exports=Delete;