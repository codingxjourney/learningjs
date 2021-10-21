console.log('this is js tutorial 43');
// async/await in javascript

// compairing normal function with async function
// normal function
// function codingXjourney() {
//     console.log("Inside the codingxjourney function");
//     return "codingxjourney";
// }
// console.log("Before calling codingxjourney function");
// let a = codingXjourney();
// console.log("After calling codingxjourney function");
// console.log(a);
// console.log("last line of the code");

// async function
// async function codingxjourney() {
//     console.log("Inside the codingxjourney function");
//     return "codingxjourney";
// }
// console.log("Before calling codingxjourney function");
// let x = codingxjourney();
// console.log("After calling codingxjourney function");
// console.log(x);
// console.log("last line of the code");

//using async and await 
async function codingxjourney() {
    console.log("Inside the codingxjourney function");
    const response = await fetch('https://api.github.com/users');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved');
    return users;
}
console.log("Before calling codingxjourney function");
let x = codingxjourney();
console.log("After calling codingxjourney function");
console.log(x);
x.then((data) => console.log(data))
console.log("last line of the code");