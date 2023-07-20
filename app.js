const express=  require('express');
const app = new express();
const morgan=require('morgan');
const cors=require('cors');
const path=require("path");


require('dotenv').config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(path.join(__dirname,'/build')));


const api = require('./routes/routeblog');
app.use ('/api',api);

const signRouter=require('./routes/signRoute');
app.use('/api', signRouter);

const postRoute=require('./routes/postRoute');
app.use('/api',postRoute);


require('./db/mongodb');
const PORT=4000;
app.listen(PORT,()=>{
console.log(`server is running in the ${PORT}`)
});
 app.get('/*', function (req,res){
    res.sendFile(path.join(__dirname,'/build/index.html'));
 });
