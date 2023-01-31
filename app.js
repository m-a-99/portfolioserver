const express = require('express');

const app=express();
app.use(express.static("build"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/build/index.js")
})
app.get("/api/cv",(req,res)=>{
    res.download(__dirname+"/Mohammed_Ayyad_CV.pdf");
})

app.listen(3000);
