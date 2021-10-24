console.log("this is js tutorial 53");
// Generators in javascript


function* numbersGen() {  
    let i = 0;

    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

console.log(numbersGen().next());  // this will display 1
console.log(numbersGen().next());  // this will display 1
console.log(numbersGen().next());  // this will display 1

const gen = numbersGen();
console.log(gen.next());  // this will display 1
console.log(gen.next());  // this will display 2
console.log(gen.next());  // this will display 3
console.log(gen.next());  // this will display 4
console.log(gen.next());  // this will display undefined
console.log(gen.next());  // this will display undefined


function* myGenerator() {
    yield 1;
    yield 2;
}
let iterator = myGenerator();
let result;
do {
    result = iterator.next();
    console.log(result);
} while (!result.done);
//Output:-
//{value: 1, done: false}
//{value: 2, done: false}
//{value: undefined, done: true}



function* generators() { 
    let x = 0;

    while (true) {
        yield x++;
        // yield (x++).toString();
    }
}

const NumberGenerator = generators();
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());
// console.log(NumberGenerator.next());

console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
console.log(NumberGenerator.next().value);
