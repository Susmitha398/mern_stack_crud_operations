const express=require('express')
const routing_data=require('./Routes/Router')
const app=express()
const port=4000
app.get('/',(req,res)=>{
    console.log()
    res.json({msg:"hello java"})
})
app.use('/moviesdata',routing_data)
//getting the data

app.listen(port,(r)=>{
    console.log("server is listen ",port)
})