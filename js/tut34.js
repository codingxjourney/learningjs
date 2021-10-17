console.log("this is js tutorial 33");

// Synchronous
for (let index = 0; index <= 700; index++) {
    const element = index;
    console.log("this is index number " + index);
}

console.log("done printing");

// Asynchronous
setTimeout(() => {
    for (let i = 0; i < 400; i++) {
        const element = i;
        console.log("this is another index number " + i);
    }
}, 100);

console.log("done printing");