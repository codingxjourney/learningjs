// Promises Basics, Promise.then() & Promise.catch()

// Promise: 
// -resolve
// -reject
// -pending

function func1() {  
    return new Promise(function (resolve, reject) {  
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function: Your promise has been resolved");
                resolve();
            }
            else {
                console.log("Function: Your promise has not been resolved");
                reject("sorry not fullfilled");
            }
        }, 2000);
    })
}

func1().then(function () {
    console.log("codingxjourney: Thanks for resolving");
}).catch(function (error) {
    console.log("codingxjourney: Very bad dude! Reason: " + error);
})