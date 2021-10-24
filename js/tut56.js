console.log('this is js tutorial 56');
// for-in and for-of loops in javascript



// ********* for-in loop **********

let people = ['priyanka', 'jwella', 'sanyukta', 'anusha',  'aishwarya', 'soumya', 'varsha'];
// traditional for loop:
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    // console.log(element);
}

// 1. ITERATING AN OBJECT
let obj = {
    name: "samyakt",
    language: "rust",
    hobby: "blockchain development"
}

// console.log(obj);
// 1.1 Iterating an object using traditional for loop:
for (let index = 0; index < Object.keys(obj).length; index++) {
    // const element = Object.keys(obj)[index];
    const element = obj[Object.keys(obj)[index]];
    // console.log(element);
}

// 1.2 Iterating an object using "for-in" loop:
for (let key in obj) {
    // console.log(obj.key);  // output: undefined, becoz key is not in string
    // console.log(obj[key]);
}

// 2. ITERATING A STRING
let myStr = "This is my string";

// we can use "for-in" with string to loop through all the characters
for (const char in myStr) {
    console.log(myStr[char]);
}
// or 
// for (const index in myStr) {
    // console.log(myStr[index]);
// }


// ********* for-of loop **********

console.log("************ for-of loop starts here ***********");

people = ['priyanka', 'jwella', 'sanyukta', 'anusha', 'aishwarya', 'soumya', 'varsha'];

for(let name of people) {
    console.log(name);
}

for(let name of myStr) {
    console.log(name);
}