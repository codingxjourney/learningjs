// document.write('Hello javascript!');
console.log('this is js tutorial 57');
// Maps in JavaScript: we can use any type of key or value

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function () {};

//1.1 Setting map values
myMap.set(key1, 'this is a string');
myMap.set(key2, 'this is blank object');
// myMap.set(key2, [ 'this is blank object' ]);
myMap.set(key3, 'this is an empty function');
// myMap.set(key3, { value: 'this is an empty function' });

console.log(myMap);

// 1.2 Getting the values from a map
let value1 = myMap.get(key1);
console.log(value1);

let value2 = myMap.get(key2);
console.log(value2);

let value3 = myMap.get(key3);
console.log(value3);

//1.3 Get the size of the map
console.log(myMap.size);

//1.4 You can loop using for..of to get keys and values
for (let [key, value] of myMap) {
    console.log(key, value);
}
// get only keys
for (let key of myMap.keys()) {
    console.log('key is', key);
}
// get only value 
for (let value of myMap.values()) {
    console.log('value is', value);
}

//1.5 You can loop through for..each loop
// console.log("******** for..each loop ********");
myMap.forEach( (value, key) => {
    console.log('Key is ', key);
    console.log('Value is ', value);
});

//1.6 Converting map to an array
let myArr = Array.from(myMap);
console.log('Map to array ', myArr);
// converitng map keys to an array
let myKeysArr = Array.from(myMap.keys());
console.log('Map to key array ', myKeysArr);
// convering map values to an array
let myValueArr = Array.from(myMap.values());
console.log('Map to value array', myValueArr);
