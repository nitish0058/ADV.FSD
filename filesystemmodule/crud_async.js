const fs = require("fs")
// callback based method


// create a file
fs.writeFile("notes.txt","hello world! welcome to node.js",(err)=>{
    console.log("data successfully written in the file notes.txt")
})
fs.readFile("notes.txt","utf8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(data)

})
const updateData="hello ECE-A!"
fs.appendFile("notes.txt",updateData,(err)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log("file updated successfully")
})

fs.rm("notes.txt",(err)=>{
    if(err)
    {
        console.log(err)
        return
    }
    console.log("file deleted successfully")
})