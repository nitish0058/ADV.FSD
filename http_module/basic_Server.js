import http from 'http';
import fs from 'fs';
// create basic http server
const server = http.createServer((req, res) => {
  console.log("hello from server");
  const order={
    orderId: 10987,
    destination:"delhi",
    sorce:"bangalore",
    username:"nitish"

  };

  //res.statusCode = 200;
  //res.setHeader("Content-Type","application/json");
  const data=fs.readFileSync("index.html");
    console.log(`${data}`);

  res.writeHead(200,
    {"Content-Type":"application/json",
      "custom-header":"hello world"

    });


  res.end(JSON.stringify(order));

});
server.listen(3000,"127.0.0.1" ,() => {
    console.log("server is running on port 3000");

})




