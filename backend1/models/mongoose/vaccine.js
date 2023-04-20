const mongoose=require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/vaccination");

const vaccineSchema=new mongoose.Schema({
    imagePath:String,
    title:String,
    description:String,
    validity:Number
})

module.exports=mongoose.model('vaccines',vaccineSchema);