const mongoose=require('mongoose');
const blogSchema=mongoose.Schema({
    title:String,
    description:String,
    urlToImage:String,
    publishedAt:{
        type:Date,
        default: new Date()
    }
});
const blogmodel=mongoose.model('blogcol',blogSchema);
module.exports=blogmodel;