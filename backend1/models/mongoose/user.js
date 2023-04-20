const mongoose=require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect("mongodb://127.0.0.1:27017/vaccination");

let userSchema=new mongoose.Schema({
    username:String,
    mobile:Number,
    email:String,
    password:String
})
module.exports= mongoose.model('users',userSchema);