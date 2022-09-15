const { application } = require("express");

app.get("/",(req,res)=>{
    res.send("jh")
})
let num1=req.body.num1
let num2=req.body.num2
let res=num1+num2
app.post("/add",(req,res)=>{

})