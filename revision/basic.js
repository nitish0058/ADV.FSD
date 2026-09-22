// console.log("hello,ece");
// console.log("start")
// for (let i = 0; i < 5; i++) {
//     console.log(`${i}`);
// }
// console.log("end")
// console.log("=====Asynchronous start=====");
// setTimeout(() => {
//     console.log("This is an asynchronous message after 2 seconds.");
// }, 2000);
// console.log("=====Asynchronous end=====");

// const fs = require('fs');
// function sizeChecker(filename) {
//     const limit = 2;
//     const stats = fs.statSync(filename);
//     if (stats.size > limit) {
//         console.log(`File size exceeds the limit of ${limit} bytes.`);
//     } else {
//         console.log(`File size is within the limit: ${stats.size} bytes.`);
//     }
// }
// sizeChecker('notes.txt');


//execution order
// console.log("synchronous code");
// setTimeout(() => {
//     console.log("setTimeout executed Macrotask queue executed");
// }, 0);
// Promise.resolve().then(() => {
//     console.log("promise resolved Microtask  queue executed ");
// }
// )

// const calculate_area=require('./main')
// console.log(calculate_area(1));


// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet("Alice")       

// const calculate_perimeter=require('./main')
// console.log(calculate_perimeter(2));

// import {calculate_area,calculate_perimeter} from './main.js';
// console.log(calculate_area(56));
// console.log(calculate_perimeter(89));

const promise1 = new Promise((resolve, reject) => {
    let success = true; // Simulating a successful operation
    if (success) {
        resolve({id: 2930309, name: 'John Doe', age: 30});
    } else {
        reject(new Error('data not found'));
    }});
    promise1
    .then((response) => {
        console.log('User fetched successfully:', response);
    })
    .catch((error) => {
        console.error('Error fetching user:', error.message);
    });