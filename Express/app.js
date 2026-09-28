// import express from 'express'
// import fs from 'fs'
// const app =express()
// const data=fs.readFileSync("index.html","utf-8")
// app.get("/home",(req,res)=>{
   // res.send("welcome from express server ")
  // const data=fs.readFileSync("index.html","utf-8")
 //  res.send((data))
   

// })
// const PORT=3000
// app.listen(PORT,()=>{
//     console.log("server is running");

// })


import express from 'express'
import fs from 'fs'
const app=express();
const bookData=JSON.parse(fs.readFileSync("./data/books.json","utf-8"))
app.get("/api/v1/books",(req,res)=>{
    try {
         res.status(200).json({
        staus:"success",
        count:bookData.length,
        data:{
            book:bookData
            
        }
        
    })
    } catch (error) {
        res.status(404).json({
            status:"fail",
            message:"data not found"
        })
    }
});
app.listen(3000,()=>{
    console.log("server is running....");
})