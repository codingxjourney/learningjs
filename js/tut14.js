console.log("welcome to tut14.js");

// few codes did not executed in safari browser beacuse I made mistake 
// by adding <script> tag in between <title> tag and <body> tag
// actually <script> tag should be below <body> tag

/*
element selectors:
1. single element selector
2. multi element selector
*/

// 1. single element selector
// let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes; 
// element = element.parentNode; 
// element.style.color = 'red'; 
// element.innerHTML = "codingxjourney is hard worker"; 
// element.innerHTML = "<b>codingxjourney is hard worker</b>"; 

// console.log(element);
// console.log(element.innerHTML);


// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child');
// sel = document.querySelector('h1');  //div, body, section
// sel.style.color = 'grey';

// console.log(sel);



// 2. multi element selector
let elems = document.getElementsByClassName('child');
// console.log(elems[1]);

elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');
console.log(elems);



Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = "blue";
});


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);                  // somewhere I made mistake
    element.style.color = "blue";
}

console.log(elems);