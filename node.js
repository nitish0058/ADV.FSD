console.log("hello,ece");
let a = 2; 
let b = 3;
function swap(a,b)
{
   let temp = a;
   a = b;
   b = temp;
   return [a,b];

}
 let [newA, newB] = swap(a,b);
 console.log("Before swapping: a =", a, "b =", b);
 console.log("After swapping: a =", newA, "b =", newB);

let s = "hello world";
 function nitish( )
 {
    console.log(s);
 }
 nitish();

 function hello()
 {
    let s = "hello nitish";
    console.log(s);
 }
 hello();


 const hello1 = () => {
    let s = "hello nitish";
    console.log(s);
 };


 setTimeout(hello1, 2000);
 setTimeout(() => {
    console.log("hello nitish");
 }, 3000);  


 console.log("start")


