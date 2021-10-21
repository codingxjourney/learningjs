console.log("this is js tutorial 44");
// 'error handling' & 'try catch' in

// Pretend this is coming from server as reponse
let x = "codingxjourney";
x = undefined;
if (x != undefined) {
    throw new Error("This is not undefined");
}
else {
    console.log("This is undefined");
}

try {
    // iAmWritingSomethingOnThisJavascriptFileAndThisIsError  // this is error
    console.log(`We are inside the "try block"`);

    functioncodewithharry(); // this is error

    null.console // this is error

} catch (error) {
    console.log("Are you Okay?");
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}

finally {
    console.log("Finally we will run this console");
}