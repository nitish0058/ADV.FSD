const fs = require('fs');
 const watcher=fs.watch('intro.txt', (eventType, filename) => {
    console.log("Event Type:", eventType);
    console.log("Filename:", filename);

})
setTimeout(() => {
    watcher.close();
    console.log("Stopping the watch");
}, 5000);
