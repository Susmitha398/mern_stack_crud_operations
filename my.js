const express=require('express')
const app=express()
const port=4000
app.get('/',(req,res)=>{
    console.log()
    res.json({msg:"hello java"})
})
//getting the data
app.get('/movie',(req,res)=>{

})
//i create the data
app.post('/movie',(req,res)=>{

})
// update the data
app.put('/movie/:id',(req,res)=>{

})
//delet the data
app.delete('/movie/:id',(req,res)=>{

})
app.listen(port,(r)=>{
    console.log("server is listen ",port)
})