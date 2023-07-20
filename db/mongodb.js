const mongoose=require('mongoose');
const url=process.env.url;
mongoose.connect(url)
.then(()=>{
    console.log('Connected to Atlas db');
})
.catch(()=>{
    console.log('error in connecting Atles');
})