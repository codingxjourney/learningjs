console.log("this is js tutorial 48");
// Regular Expressions

// regular ecpressions: 
    // Basic functions
    // Metacharacter Symbols
// const regex = /^coding/;

// Regular Expressions - 
// Character sets - we us this ---> []
let regex = /coding[xmyr]journey/;  // can be x, m, y or r
regex = /coding[a-z]journey/;  // can be any character from a to z
regex = /coding[^qyzj]journey/;  // cannot be any of q, y, z, or j
regex = /coding[^qyzj]journe[yYies]/;  // cannot be any of q, y, z, or j  +  can be y, i, e or s
regex = /c[a-zA-Z]dingxjourne[yYxz0-9][0-9]/ // we can have as many character sets as we want

// Quantifiers - we use this ---> {}
regex = /codingx{3}journey/;  // x can occur exactly 3 times
regex = /codingx{0,3}journey/;  // x can occor exactly 0 to 3 (0 or 1 or 2 or 3) times 

// Grouping - we use paranthesis for groupings ---> ()
regex = /(coding){2}([0-9]x){4}/;

// const str = "codingxjourney17 is best programmer";
let str = "codingxxxjourney is best programmer";
str = "codingcoding7x4x8x1x"

let result = regex.exec(str);
console.log("The result from exec is ", result);


if (regex.test(str)) {
    console.log(`The string: ${str}. Matches the expression: ${regex.source}`);
}
else {
    console.log(`The string: ${str}. Does not match the expression: ${regex.source}`);
}