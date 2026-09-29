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
app.use(express.json())
app.use()
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


app.get("/api/v1/books/:id",(req,res)=>{
   // res.send(req.params)
try{
    let id=req.params.id
    const book=bookData.find(book=>book.id==id)
    if(!book){
        res.staus(400).json({
            status:"fail",
            message:"book not found for this id:${id}"
        })
    }
    else{
    res.status(200).json({
        status:"success",
        data:{
            book:book
        }
    })
}
}
catch(error){
    res.status(404).json({
        status:"fail",
        message:"data not found"
    })
}
})

// app.post("/api/v1/books",(req,res)=>{
//     console.log("post request received")
//     console.log(req.body)
//     res.send(req.body)
// })

app.post("/api/v1/books",(req,res)=>{
    const newBook=req.body;
    bookData.push(newBook)
    fs.writeFileSync("./data/books.json",JSON.stringify(bookData))
    res.status(201).json({
        status:"success",
        data:{
            book:newBook
        }
    })
})

app.patch("/api/v1/books/:id",(req,res)=>{
    let id=req.params.id;
    const booktoupdate=bookData.find(book=>book.id===id)
    let index=bookData.indexOf(booktoupdate)
    const updateBook=Object.assign(booktoupdate,req.body)
    bookData[index]=updateBook;
    fs.writeFileSync("./data/books.json",JSON.stringify(bookData))
    res.status(200).json({
        status:"success",
        data:{
            book:updateBook,
            message:"book updated successfully"
        }
    })
})

    app.delete("/api/v1/books/:id",(req,res)=>{
        co
       

   
//    let id=req.params.id;
//    for(let i=0;i<bookData.length;i++){
//     if(bookData[i].id==id){
//         res.status(200).json({
//             status:"success",
//             data:{
//                 book:bookData[i]
//             }
//         })
//     }
// }
//let id=req.params.id
//const book=bookData.find(book=>book.id==id)
//res.send(book)
})
app.listen(3000,()=>{
    console.log("server is running....");
})