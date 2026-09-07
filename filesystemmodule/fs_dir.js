const fs = require('fs')
fs.mkdir("./myfolder1/myfolder2/myfolder3",{recursive:true} ,(err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("folder created")
    fs.writeFile("hello.txt",(err)=>{
        if(err)
        {
            console.log(err)
            return
        }
        console.log("file created")
    })
})
fs.readdir("./myfolder",(err,files)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Directory Content",files)
})