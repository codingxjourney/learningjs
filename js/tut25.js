console.log("welcome to js tut25");

/*
tut21.js exercise

You have to create a div and inject it into the page which contains a heading.
whenever someone clicks on the div, it should be converted into an editable item.
whenever user clicks away (blur). saver the note into the local storage. 
*/

// created a new element
let divElem = document.createElement('div');

// added text to that created element
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode('This is my textarea. click to edit it');
}
else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// given element id, style  and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('style', 'border: 2px solid black; text-align: center; width: 170px; height: 230px; margin: 34px; padding: 24px');

// grabing the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

// inserting the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first);

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
    let html = divElem.innerHTML;
    divElem.innerHTML = ` <textarea class="form-control textarea" id="textarea" rows="17"> </textarea> `;
    }

    // listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });
});

