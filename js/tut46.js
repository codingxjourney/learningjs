console.log("this is js tutorial 46");
//javascript regular expression and related functions

let reg = /codingxjourney/;  // this is a regular expression literal is js
// reg = /codingxjourney/g;  // g means global
// reg = /codingxjourney/i;  // i means case insentivity

console.log(reg);
console.log(reg.source);

let x = "This is great code learning from codingxjourney & codingxjourney is best to learn different programming languages";

// function to match expressions
// 1  .exec() - this function will return array for match or null for no match
let result = reg.exec(x);
// console.log(result);

// result = reg.exec(x);
// console.log(result);  // We can use multiple exec() with global flag

// console.log(result);
// console.log(result.input);
// console.log(result.index);


if (result) {
    // console.log(result);
    // console.log(result.input);
    // console.log(result.index);
}

// 2  .test() - this will return true or false
let result2 = reg.test(x);
console.log(result2);  // this will only print true if the "reg" is there in the string "x"

// 3  .match() - it will return an array of results or null
// let result3 = reg.match(x);  ---> this is wrong!
let result3 = x.match(reg);  // ---> this is right!
console.log(result3);

// 4  .search() - returns index of first match otherwise -1
// let result4 = reg.search(x);  ---> this is wrong!
let result4 = x.search(reg);  // ---> this is right!
console.log(result4);

// 5  .replace() - returns new replaced string with all the replacements (if no flag is given, first match will be replaced)
let result5 = x.replace(reg, "codewithharry");
console.log(result5);