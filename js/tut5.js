// Type conversion 
console.log('welcome to tut5');
let myVar;
myVar = String(17);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr = String([7, 17, 4, 70]);
console.log(arr.length, (typeof arr));

let myArr = [17, 7, 4, 70];
console.log(myArr.length, (typeof myArr));

let i = 17;
console.log(i.toString());

let str = Number("1717");
str = Number("17xy17"); // NaN
str = Number(true); // 1
str = Number(false); // 0
str = Number([1, 2, 3, 4, 5, 6 , 7]); // NaN
console.log(str, (typeof str));

let number = parseInt('17.17'); // 17 because its int
number = parseFloat('17.17'); // 17.17 because its float
console.log(number.toFixed(17), (typeof number));  // .toFixed() => no. of decimal digits shows


// Type coercion

let mystr = Number("697");
let mynum = 17;
console.log(mystr + mynum);