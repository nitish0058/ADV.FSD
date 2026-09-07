
const nitish = () => {
    console.log("helllo ")
};



console.log("start");
setTimeout(nitish, 200);
Promise.resolve().then(() =>
    console.log("promises rsolved")
);

console.log("end");


