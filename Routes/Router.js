const express=require('express')
const router=express.Router()
router.get('/movie',(req,res)=>{
    res.send(' iget the data')
})
router.post('/movie',(req,res)=>{
    res.send('i create the datA')
})
router.put('/movie/:id',(req,res)=>{
    res.send('i update the data')
})
router.delete('/movie/:id',(req,res)=>{
    res.send('i delet the data')

})
module.exports=router