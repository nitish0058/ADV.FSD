import http from 'http';
import fs from 'fs';
const homepage=fs.readFileSync("home.html","utf-8")
const server=http.createServer((req,res)=>{
    console.log("hello from server");
    //const data={
    //   "greet":"hello"
    //};
    console.log(req.url)
    // res.end("hello from server");
    if(req.url==="/")
    {
        
        res.end(homepage.replace("{{%CONTENT%}}"),"hello from home page");
    }
    else if(req.url==="/about")
    {
        
        res.end("about page");
    }
    else if(req.url==="/contact")
    {
        
        res.end("about contact")
    }
//res.writeHead(200,
   // {"Content-Type":"application/json",
    //  "custom-header":"hello world"

    //});


    //res.end(JSON.stringify(data));
})
server.listen(3000,"127.0.0.1" ,() => {
    console.log("server is running on port 3000");

})

