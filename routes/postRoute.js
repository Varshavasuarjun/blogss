const express= require ("express");
const postModel = require("../model/post");
const router=express.Router();
const jsw=require('jsonwebtoken');

router.use(express.json());
router.use(express.urlencoded({extended:true}));
// posting
router.post('/post', async  (req,res)=>{
  
    
    const saveData=  await postModel(req.body)
    jsw.verify(req.body.token,"blog",
    (error,decoded)=>{
       if (decoded && decoded.email) {
          saveData.save()
           res.json({message:"d successfully"})
       } else {
        res.json({message:"unauthorised user"})
       }
    })
    
  
  })
   

// viewall post

 router.post('/viewallposts', async (req,res)=>{
  
  let data= await postModel.find();
    jsw.verify(req.body.token,"blog",
    (error,decoded)=>{
      if (decoded && decoded.email) {
        console.log(data);
         res.json(data);
      } else {
        res.json(error);
      }
    })
    
 })


  router.post('/viewmypost',  async(req,res)=>{
    
    let data=await  postModel.find(req.body);
    res.json(data);
  })

  router.post('/deletepost', async(req,res)=>{
    let data= await postModel.deleteOne(req.body);
    res.json({status:"deleted sucessfully"})
  })

module.exports=router;
