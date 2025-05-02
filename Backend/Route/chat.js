const express=require('express')
const router=express.Router()

router.post('/chat',(req,res)=>{
    console.log('request aa rha h');
})

module.exports=router;