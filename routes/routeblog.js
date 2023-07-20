const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const blogData = require('../model/blogData');

// GET
 router.get('/getdata',async (req, res)=>{
    try {
        const data=await blogData.find();
        res.send(data);
        
    } catch (error) {
        res.status(404).send('dfata not find');
        console.log(error);
    }
 })

//  post
  router.post('/postdata', async (req,res)=>{
    try {
        let item=req.body;
        let newdata=blogData(item).save();
        console.log('success')
        res.json({message:"Registered succussfully"})
    } catch (error) {
        res.status(404).send('coulntpost');
        console.log(error); 
    }
  })
//   delete
router.delete('/delete', async(req,res)=>{
    try {
        const id= req.params.id;
        console.log(id);
        const newdata= await blogData.findByIdAndDelete(id);
        console.log('deteled succesfully');
        res.status(200).json('success');
        
    } catch (error) {
        console.log("error in deleting");
        
        res.status(400).json('failed');
    }

    // update
    router.put('/update', async(req,res)=>{
        try {
            const id=  req.body._id;
            console.log(id);
            const data= await blogData.
            findOneAndUpdate({"_id":id},{$set:{"title":req.body.title,"description":req.body.description,"urlToImage":req.body.urlToImage,"publishedAt":req.body.publishedAt}});
            res.status(200).json('success');
            console.log(data);
            ;
            
            console.log("heloo");
        } catch (error) {
           console.log("error in updating") ;
        }
    })
})
 module.exports= router;