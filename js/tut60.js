console.log('this is js tutorial 60');
// Destructuring in javascript

let x, y;
[x, y] = [17, 7];
console.log(x, y);

// in array
[p, q, r, ...s] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
console.log(p);
console.log(q);
console.log(r);
console.log(s);

// in object
({ z, y, ...x } = { z: 1, y: 2, x: 3, w: 4, v: 5, u: 6, t: 7, s: 8, r: 9, q: 10, p: 11, o: 12, n: 13, m: 14, l: 15, k: 16, j: 17})
console.log(z, y, x);

const fruit = ['mangoes', 'apple', 'pineapple'];
[x, y, z] = fruit;
console.log(x, y, z);

// Object Destructuring
const laptop = { 
    model: "macbook air",
    color: "space grey",
    price: 1099,
    display: "retina display",
    chip: "apple m1",
    start: function(){console.log('started')}
}

const {model, color, price, display, chip, start} = laptop;
console.log(model, color, price, display, chip, start);
start();