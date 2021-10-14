console.log('this is javascript tutorial 16');
let element = document.createElement('li');  //creates new 'li tag'

element.className = 'childui';  // adding class to the 'li tag'
element.id = 'idnew';    //adding id to the 'li tag'
element.setAttribute('title', 'mytitle');
// console.log(element);

// element.innerText = '<b>codingxjourney</b>'; // we can use innerText but we cann't make it bold text or other changes
// element.innerHTML = '<b>codingxjourney</b>';

let text = document.createTextNode('textnode');
element.appendChild(text);

let ul = document.querySelector('ul.this');

ul.appendChild(element);
// console.log(ul);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('Its Text Node Heading');
elem2.appendChild(tnode);
// console.log(elem2);

element.replaceWith(elem2);


element.replaceWith(elem2);
let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('liui'));

let check = elem2.hasAttribute('href'); // class, id and other attribute for checking 
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');

console.log(elem2, check);