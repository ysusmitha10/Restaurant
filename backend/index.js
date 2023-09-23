const express=require('express');
const app=express();

app.listen(3000,()=>{
    console.log("Server is running");
})


app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.get('/button',(req,res)=>{
    res.send("<button>clik me</button>");
})

app.get('/home',(req,res)=>{
    res.send("home route");
})

