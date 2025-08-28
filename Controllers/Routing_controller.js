const getting=(req,res)=>{
    res.send("i get the data")
}
const posting=(req,res)=>{
    res.send("i create the data")
}
const putting=(req,res)=>{
    res.send("i updateing the data")
}
const deleting=(req,res)=>{
    res.send("i deleting data")
}
module.exports={getting,putting,posting,deleting}