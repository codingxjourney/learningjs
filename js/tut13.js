// Exercis 1 
// You have to create a variable which is a string containing the text which is a link you are interested in.

// You have to fetch all the links from a given page which contains this text

// codewithharry.com
// javascript

let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
    // else {
    //     console.log(`Doesn't include the words in "links".`);
    // }
});

// console.log(`Exercise 1 Solution`);

// let z = document.links;

// let myText = 'harry';

// Array.from(z).forEach(function (element) {
//     if (String(element).includes(myText)) {
//         console.log(element);
//     }
// });