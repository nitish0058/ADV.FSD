const promise1 = new Promise((resolve, reject) => {
    let success = true; // Simulating a successful operation
    if (success) {
        resolve({id: 2930309, username: 'John Doe'});
    } else {
        reject(new Error('data not found'));
    }
})
promise1
.then((response) => {
    console.log('User fetched successfully:', response);
})
.catch((error) => {
    console.error('Error fetching user:', error.message);
});

const promise2 = new Promise((resolve, reject) => {
    let success = true; // Simulating a successful operation
    if (success) {
        resolve({id: 2930309, bio: 'Software Developer', location: 'New York'});
    } else {
        reject(new Error('profile not found'));
    }
})
promise2
.then((response) => {
    console.log('Profile fetched successfully:', response);
})
.catch((error) => {
    console.error('Error fetching profile:', error);
});

Promise.all([promise1, promise2])
.then((responses) => {
    console.log('All data fetched successfully:', responses);
}
)
.catch((error) => {
    console.error('Error fetching data:', error.message);
}   
)



Promise.race([promise1, promise2])
.then((response) => {
    console.log('First data fetched successfully:', response);
}
)
.catch((error) => {
    console.error('Error fetching data:', error.message);
}   
)


Promise.allSettled([promise1, promise2])
.then((response) => {
    console.log('First data fetched successfully:', response);
}
)
.catch((error) => {
    console.error('Error fetching data:', error.message);
}   
)

Promise.any([promise1, promise2])
.then((response) => {
    console.log('First data fetched successfully:', response);
}
)
.catch((error) => {
    console.error('Error fetching data:', error.message);
}   
)

promise1
.then((response) => {
   return response.id;
})
.then((response2) => {
    console.log('User fetched successfully:', response2);
})
.catch((error) => {
     console.error('Error fetching user:', error.message); });
