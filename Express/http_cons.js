const http=require("http")
const server=http.createServer((req,res)=>{
    //routing
    if(req.method ==="GET"&& req.url==="/")//"get request"
    {
        res.end("GET Request")
    }
    else if(req.method === "POST" && req.url ==="/")//"post request"
    {
        res.end("POST Request")
    }
    else if(req.method=== "PATCH" && req.url=== "/users")//"patch request"
    {
        res.end("PATCH request")
    }
})
server.listen(3000,"127.0.0.1",(req,res)=>{
   console.log("server is running on the port 3000")
})