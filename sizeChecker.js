 const fs = require('fs');
 
 function sizeChecker(filename) {
    const limit= 2; // 2bytes
    const stats = fs.statSync(filename);
    if (stats.size > limit) {
        console.log(`File size exceeds the limit of ${limit} bytes.`);
    } else {
        console.log(`File size is within the limit: ${stats.size} bytes.`);
    }}
    sizeChecker('notes.txt');


    
