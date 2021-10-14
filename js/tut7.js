console.log('We are in tut7.js and lets discuss about arrays');
let marks = [77, 70, 17, 94, 74, 89, 41];
const fruits = ['Apple', 'Orange', 'Pineapple'];
const mixed = ['str', 77, [17, 4]];

const arr = new Array(70, 17, 49, 93, 'Apple');
console.log(arr);
console.log(marks);
console.log(mixed);
console.log(fruits[0]);

console.log(arr.length); 
console.log(Array.isArray(fruits)); // to verify the variable/constant is Array or not.

arr[0] = 'codingxjourney';
console.log(arr);

let arrElement = arr[0];
console.log('element :', arrElement);

let value = marks.indexOf(74);
console.log(value);

// Mutating or Modifying arrays
marks.push(7174); // add's to the last element
marks.unshift(3270); // add's to the first element
marks.pop(); // remove's the last element
marks.shift(); //remove's the first element
// marks.splice(1, 3); //remove's the range of elements
// marks.reverse(); // last to first element order

let marks2 = [17, 23, 7, 14]
marks = marks.concat(marks2);

console.log(marks);


let myObj = {
    'first name': 'samykt',
    'last name': 'patil',
    userName: 'codingxjourney',
    isActive: true,
    likes: [17,70, 77, 170]
};

console.log(myObj);
console.log(myObj.userName);
console.log(myObj['first name']);