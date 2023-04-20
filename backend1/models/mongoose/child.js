const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/vaccination');

let childSchema=new mongoose.Schema({
     parentEmail:String,
     name:String,
     dob:String,
     tob:String,
     gender:String,
     weight:String,
     height:String,
     head:String,
     cursion:String
})
module.exports=mongoose.model('childregistrations',childSchema);