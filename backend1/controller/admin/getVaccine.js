const vaccineModel = require("../../models/mongoose/vaccine");

const getVaccine=async(req,res)=>{
   let data=await vaccineModel.find()
   if(data!=null){
        console.log('done');
        res.send(data);
   }
   else{
    res.send(false);
   }
}
module.exports=getVaccine;