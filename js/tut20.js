console.log('this is js tut 20');

let impArray = ['paneer', 'cheeze', 'kaju', 'pista'];

// add a key-value pair inside local storage
// localStorage.setItem('name1', 'axie');
// localStorage.setItem('name2', 'piyu');
// localStorage.setItem('food', 'impArray'); // the value is stored in form of string not in arrays so next line solves this problem
// localStorage.setItem('food', JSON.stringify(impArray));

// console this is safari tab inspect
// window.localStorage
// typeof window.localStorage
// window.localStorage.name1
// window.localStorage.name2

// clears the entire local storage
// localStorage.clear();

// clear a particular key-value pair
localStorage.removeItem('name1');

// retrieve an item from the local storage
let name = localStorage.getItem('name2');
name = JSON.parse(localStorage.getItem('food'));
console.log(name);

// sessionStorage.setItem('sessionname1', 'xie');
// sessionStorage.setItem('sessionname2', 'xpiyu');
// sessionStorage.setItem('sessionfood', JSON.stringify(impArray));
