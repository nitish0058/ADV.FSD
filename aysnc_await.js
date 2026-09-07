  function fetchUserData(){ 
     return new Promise((resolve, reject) => {
    let success = false; // Simulating a successful operation
    if (success) {
        resolve({id: 2930309, username: 'John Doe'});
    } else {
        reject(new Error('data not found'));
    }
})
}
  async function getUser(){
   try{
    const user=await fetchUserData();
    console.log(user);
   }
   catch(error)
   {
    console.log(`Error:${error.message}`);
   }
 }
 getUser();