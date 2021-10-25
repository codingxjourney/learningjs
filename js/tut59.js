console.log('this is js tutorial 59');
// Symbols in Javascript

const priyanka = Symbol("My Identifier");
const samyakt = Symbol("My Identifier");

console.log('Symbol is', priyanka);
console.log('Type of Symbol is', typeof priyanka);

console.log(priyanka === samyakt);

const xx = "this is string";
const yy = "this is string";

console.log(xx === yy);
console.log(null === null);
console.log(undefined === undefined);

const x = Symbol('identifier for codingxjourney');
const r = Symbol('identifier for bangtanSonyeondan');

myObject = {};
myObject[x] = "samyakt";
myObject[r] = "priyanka";
myObject["name"] = "jin bts";
myObject["xname"] = "suga bts";

console.log(myObject);
console.log(myObject[x]);
console.log(myObject[r]);
console.log(myObject.r); // !! ALERT !!: cannot do this to get 'priyanka' becoz it is same as myObject["r"]


// Symbols are ignored in 'for-in' loops. But in safari browser Symbols are NOT IGNORED
console.log('before for-in loop starts')
for(key in myObject) {
    console.log(key, myObject);
}

// symbols are ignored in 'for-in' loops
console.log(JSON.stringify(myObject));