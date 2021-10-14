console.log('We are at tutorial 9');

// General Loops: for, while, do-while

for (let i = 0; i < 100; i++) {
    console.log(i);
}


let j = 0;
while (j < 20) {
    console.log(j);
    j += 1;
}


let k = 0;
do {
    console.log(k + 1); 
    if (k === 7) {       // when loop reaches 7 it breaks and stops returning as 8
        break;
    }
    k += 1;
} while (k < 14);

let x = 0;
do {
    if (x === 6) {    // 7 will be skipped
        x += 1;
        continue
    }
    console.log(x + 1);
    x += 1;
} while (x < 17);

console.log('done');



let arr = [1, 2, 5, 7, 4, 8, 3];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

// or 

arr.forEach(function(element, index, array) {
    console.log(element, index, array);
});



let obj = {
    userName: "codingxjourney",
    age: 24,
    type: "Dangerous Programmer",
    os: "mac os"
}
for (let key in obj) {
    console.log(`The ${key} of object is ${obj[key]}`);
}
