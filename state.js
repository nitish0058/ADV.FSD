const fs=require("fs")
fs.stat("notes.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("information about[notes.txt]",typeof(stats))
    console.log("size of file[notes.txt]",stats.size,"bytes")
    console.log("creation time of file[notes.txt]",stats.birthtime.toISOString().split("T")[0])
    console.log("last modification time of file[notes.txt]",stats.mtime.toISOString().split("T")[0])
    console.log("change time of file[notes.txt]",stats.ctime.toISOString().split("T")[0])
    
})
fs.stat("./myfolder",(err,stats)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("information about[myfolder]",typeof(stats))
    console.log("size of folder[myfolder]",stats.size,"bytes")
    console.log("creation time of folder[myfolder]",stats.birthtime.toISOString().split("T")[0])
    console.log("last modification time of folder[myfolder]",stats.mtime.toISOString().split("T")[0])
    console.log("change time of folder[myfolder]",stats.ctime.toISOString().split("T")[0])
})
