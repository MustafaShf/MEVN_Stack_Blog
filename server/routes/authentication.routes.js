const express=require('express')
const router=express.Router();

router.route('/')
.get((req,res)=>{
    res.send('hi this is authentication')
})


module.exports=router;