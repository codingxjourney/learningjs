console.log("this is js tutorial 41");
// Arrow functions in Javascript

// function type 1
function codingxjourney() {
    console.log("this guy is the best programmer");
}
// codingxjourney();

// function type 2
let codingxjourney1 = function () {
    console.log("this guy is the best programmer");
}
// codingxjourney1();

// converting it to an Arrow funtion type
let codingxjourney2 = () => {
    console.log("this guy is the best programmer");
}
// codingxjourney2();

// function returning something
const greet = function () {
    return "Good Moring!";
}
// greet(); // this will NOT display "Good Moring!"
// console.log(greet());

// one line code do not require braces and return
const greeting = () => "Good Moring!";
// console.log(greeting());

// single parameter do not need parenthesis 
// but you will have to put parenthesis 
// if there are multiple parameters
let greetingX = name => "Good Moring! " + name;
console.log(greetingX("Priyanka"));

// multiple parameters
let sayingBye = (name, adios) => name + "! its getting late, " + adios;
console.log(sayingBye("Priyanka", "Ciao"));