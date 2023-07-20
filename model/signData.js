const mongoose=require('mongoose');
const signSchema=mongoose.Schema({
    Name:String,
    email:String,
    address:String,
    phone:{
        type:Number,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});
const usermodel=mongoose.model('signin',signSchema);
module.exports=usermodel;