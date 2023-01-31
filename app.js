const express = require('express');

const app=express();
app.use("/",express.static(__dirname+"/build/"));


app.get("/api/cv",(req,res)=>{
    res.download(__dirname+"/Mohammed_Ayyad_CV.pdf");
})
app.get("/*",(req,res)=>{
    res.sendFile(__dirname+"/build/index.html")
})

app.listen(3000);
