console.log('This is tut15.js');

let cont = document.querySelector(".no");
cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children);

let nodeName = cont.childNodes[7].nodeName;
// console.log(nodeName);

let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeType);
// Node types 
// 1. Element
// 2. Attribute
// 3. Text Node
// 8. Comment
// 9. Document
// 10. docType

let container = document.querySelector('div.container');

// console.log(container.children);
// console.log(container.children[1].children[0].children);

// console.log(container.firstChild);
// console.log(container.firstElementChild);

// console.log(container.lastChild);
// console.log(container.lastElementChild);

// console.log(container.childNodes);
// console.log(container.children);
// console.log(container.childElementCount);

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)