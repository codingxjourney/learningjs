/* Data types in JS

-> Primitive data type -> Stack -> base
-> Reference data type -> Heap -> objects

*/


/* Primitive data types

1. string
2. numbers
3. boolean
4. null
5. undefined 
6. symbol

*/


/* Reference data types

1. array
2. object literals
3. functions
4. date

*/



// Primitive data types

// 1. string
let name = "samyakt";
console.log("my string is " + name);
console.log("data type is " + (typeof name));


//2. number
let marks = 17.17;
console.log("data type is " + (typeof marks));


// 3. boolean
let isDriver = true;
console.log("it's " + isDriver + ", I am Driver");
console.log("data type is " + (typeof isDriver));


// 4. null 
let nullVar = null;
console.log("data type is " + (typeof nallVar));

// 5. undefined 
let undef = undefined;
console.log("data type is " + (typeof undef));



// Reference data type 

// 1. array
myArr = [17, 7, 4, 34, true, "string"];
console.log("data type is " + (typeof myArr));

// 2. object literals
let codingMarks = {
    codingxjourney: 77,
    "code with harry": 87,
    haxonology: 74
}
console.log(codingMarks);
console.log("data type is " + (typeof codingMarks));


// 3. function 
function findName() {
    
}
console.log(typeof findName);

// 4. date
let date = new Date();
console.log(date);
console.log(typeof date);