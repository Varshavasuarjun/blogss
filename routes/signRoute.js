const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}))

const signData=require('../model/signData');
const usermodel = require('../model/signData');

const jwt=require('jsonwebtoken');
//  LOGIN
router.post('/login', async (req, res)=>{
    let username= req.body.username;
    let password=req.body.password;
    const user= await signData.findOne({username:username});
    if(!user){
        res.json({message:"user not found"});
       
    }
    try {
        if(user.password==password){
            jwt.sign({email:username,id:user._id},"blog",{expiresIn:"1d"},
             (error,token)=>{
                if (error) {
                    res.json({message:"token not generated"});
                } else {

                    // console.log(token);
                    // console.log(data);
                    res.json({message:"Login succesfull",token:token,data:user})
                }
             }
            )
            // res.json({message:"Login succesfull"})
            // console.log({message:"Login succesfull"});
        }
        else{
            res.json({message:"Login fail"})
        }
        
    } catch (error) {
        res.status(404)
        // console.log("error");
    }
});

router.post('/signup', async (req,res)=>{
    try {
        console.log(req.body);
        let item=req.body;
        let newdata = signData(item).save();
        console.log('success')
        res.json({message:"Registered succussfully"});
    } catch (error) {
        res.json({message:"couldnt post"});
        console.log(error); 
    }
  });

  router.post('/viewmyprofile', async( req,res)=>{
    // try {
      let data=  await usermodel.find(req.body);
      res.json(data);
    // } catch (error) {
    //     res.json({status:"didnt find the user"});
    // }
  })

  module.exports= router;