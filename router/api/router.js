const express=require('express')
const router=express.Router()
const users=require('../../users')

router.get('/',(req,res)=>{
    res.json(users)
})
router.get('/:id',(req,res)=>{
    const value=users.some(member=>member.id===parseInt(req.params.id))
    if(value){
    res.json(users.filter(member=> member.id===parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg:'user not found'})
    }

})
module.exports=router