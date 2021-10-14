console.log('This is tutorial 8');
let age = 17;

if (age == 17) {
    console.log('Age is 17');
}

else if (age > 17) {
    console.log('Age is greater then 17');
}

else {
    console.log('Age is less then 17');
}



let personAge = '47';       // personAge is string data type

if (personAge != 17) {
    console.log('Age is not 17');
}

if (personAge !== 47) {          // else is not used because to run command for next line and string is not equal to number so the condition is executed
    console.log('Age is not 47');
}

else if (personAge > 17) {
    console.log('Age is greater then 17');
}

else {
    console.log('Age is less then 17');
}



let peopleAge = 17;
if (typeof peopleAge !== 'undefined') {
    console.log(`People's age is defined`);
}

else {
    console.log(`People's age is not defined`);
}


const youDrive = true;                   // || -> either one should be true
if (youDrive && age >= 17) {             // && -> both should be true
    console.log('you can drive the car');
}
else {
    console.log('sorry, you cannot drive the car');
}



// ternary operator
console.log(age == 17 ? 'Age is 17': 'Age is not 17');



// switch statement
switch (age) {
    case 17:
        console.log("you are 17");
        break;

    case 27:
        console.log('you are 27');
        break;

    case 37:
        console.log("you are 37");
        break;

    default:
        console.log("your age is unknown");
}