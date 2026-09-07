console.log("=====Synchronous start=====");
for (let i = 0; i < 5; i++) {
    console.log(`${i}`);
}
console.log("=====Synchronous end=====");
console.log("=====Asynchronous start=====");
setTimeout(() => {
    console.log("This is an asynchronous message after 2 seconds.");
}, 2000);
console.log("=====Asynchronous end=====");