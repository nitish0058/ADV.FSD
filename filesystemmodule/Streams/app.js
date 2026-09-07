import fs from "fs";
// readable streams

// const readStream=fs.createReadStream("input.txt",{encoding:"utf-8"});
// readStream.on("data",(chunk)=>{
//     console.log("Data chunk received: ");
//     console.log("data:", chunk);
// })
// readStream.on("end",()=>{
//     console.log("No more data to read.");
//     console.log("End of stream reached.");
// })
// readStream.on("error",(error)=>{
//     if(error){
//         console.log("Error:", error.message);
//     }
// })
// writable streams
const writeStream=fs.createWriteStream("output.txt");
writeStream.write("Hello, this is a writable stream example.\n");
writeStream.write("We are writing data to the output.txt file.\n");
writeStream.on("finish",()=>{
    console.log("All data has been written to output.txt.");
})
writeStream.on("error",(error)=>{
    console.log("Error:", error.message);
})
readStream.pipe(writeStream);