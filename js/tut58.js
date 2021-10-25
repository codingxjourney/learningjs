console.log('this is js tutorial 58');
// Javascript Sets

// set stores unique values
const mySet = new Set();  // Initialize an empty set
console.log('The set looks like:', mySet);

// Adding values to this set
mySet.add('this');
mySet.add('condingxjourney');
mySet.add('samyakt');
mySet.add(17);
mySet.add('condingxjourney');
mySet.add('priyanka');
mySet.add(false);
mySet.add(true);
mySet.add('priyanka');

console.log('Now the set looks like this:', mySet)

//Use a constructor to initialize the set
const yourSet = new Set([17, 'codingxjourney', {x:17, y:70}, 'priyanka']);
console.log('New set is: ', yourSet);

console.log(mySet.size);  // get the size of the set

console.log(mySet.has('priyanka'));  // check wheather set has 'priyanka' or not
console.log(mySet.has('jwella'));  

console.log('Before removal', mySet.has('this'));
mySet.delete('this');  // remove an element from the set
console.log('After removal', mySet.has('this'));

// Iterating a set
for(let item of mySet) {
    console.log('Item is: ', item);
}
// or 
mySet.forEach(item => {
    console.log('item is : ', item)
});

let arr = Array.from(mySet);
console.log('set converted to array like this : ',arr)