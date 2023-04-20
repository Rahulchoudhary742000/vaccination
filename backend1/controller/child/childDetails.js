const childModel=require('../../models/mongoose/child');

async function childDetails(req,res){
    const parentEmail = req.body.email;
    const data = await childModel.find({ parentEmail });
    if (data) {
      res.send(data);
    } else {
      res.send(false);
    }
    res.end();
}
module.exports=childDetails;