const mongoose=require('mongoose');
const router = require('../routes/postRoute');
const postSchema=mongoose.Schema({
    userid: String,
    post:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const postModel= mongoose.model('posts',postSchema);
module.exports=postModel;