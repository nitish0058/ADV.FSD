import express from 'express'
import fs from 'fs'
const app =express()
const data=fs.readFileSync("index.html","utf-8")
app.get("/home",(req,res)=>{
   // res.send("welcome from express server ")
  // const data=fs.readFileSync("index.html","utf-8")
   res.send((data))
   

})
const PORT=3000
app.listen(PORT,()=>{
    console.log("server is running");

})