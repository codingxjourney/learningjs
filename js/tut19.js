console.log('this is js tut 19');

// in this class we solved the problem of tut13.js

let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
    href = element.href;
    if (href.includes(str)) {
        console.log(href);
    }
});