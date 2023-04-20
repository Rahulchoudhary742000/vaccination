const childModel = require('../../models/mongoose/child');
async function Registration(req,res){
    let data = await childModel(req.body).save();
    if (data) {
      res.send(true);
    } else {
      res.send(false);
    }
    res.end();
}
module.exports=Registration;