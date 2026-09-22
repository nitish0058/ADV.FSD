// import http from "http";
// import fs from "fs";
// const http =require("http")
// const server=http.createServer((req,res)=>{
//     console.log("hello from server");
    
//     res.writeHead(200,{"Content-Type":"text",});
    // const data=fs.readFileSync("config.json");
      //   console.log(`${data}`);

    // console.log(req.url)
    // if(req.url==="/config")
    // {
        
    //     res.end("welcome from config page");
    // }

   // res.end("welcome")

//})
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("server is running on the port 3000")
// })



// sir waalala

import http from 'http'
import fs from 'fs'
// reading json 
const data =fs.readFileSync("config.json","utf-8")
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("home page")
    }
    else if(req.url==="/config")
    {
        res.end(JSON.stringify(data))
    }
    else{
        res.end("page not found")
    }
})


server.listen(3000,"127.0.0.1",()=>{
   console.log("server is running on the port 3000")
})