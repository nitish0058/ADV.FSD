function flight() {
    return Promise.resolve("Flight available");
}

function hotel() {
    return Promise.resolve("Hotel available");
}

function cab() {
    return Promise.resolve("Cab available");
}

function insurance() {
    return Promise.resolve("Insurance available");
}

Promise.all([flight(), hotel(), cab(), insurance()])
    .then((result) => {
        console.log("Complete Travel Package:");
        console.log(result);
    })
    .catch((error) => {
        console.log("Booking failed:", error);
    });