console.log("this is js tutorial 49");

let regex = /\woding/;             // \w means word character - _ or alphabet or numbers
regex = /\w+journey/;              // \w+ means one or more word character
regex = /\Wawesome/;               // Non word character like space
regex = /\W+/;                     // \W+ means more than one non word character matches these type of characters " !@#$%^&* "
regex = /\W+ awesome/;             // " $*^@# awesome" matches the expression
regex = /\W+coder/;                // "*^$#@coder" matches the expression
regex = /\d1717/;                  // \d means digit
regex = /number \d+/;              // \d+ means more than one digit
regex = /\D1717/;                  // \D means non digit
regex = /\D+1717/;                 // \D+ means more than one non digit
regex = /\sphone number/;          // \s means matches whitespace character
regex = /\s+phone number/;         // \s+ means matches one or more then one  whitespace characters
regex = /\Scell phone number/;     // \S means match non whitespace character
regex = /\S+cell phone number/;    // \S+ means match more then one non whitespace character
regex = /codingxjourney'scell\b/;  // \b means word boundary, in other words end of word

// Assertions
regex = /coding(?=x)/;  // (?=x) means after coding the next character must be x only
regex = /coding(?!x)/;  // (?=x) means after coding the next character must not be x


let str = "codingxjourney !@#$%^&* is $*^@# awesome *^$#@coder";
str = "codingxjourney's number 9747741717";
str = "codingxjourney's cell phone number 974774codingxjourney1717";
str = "codingxjourney's cell            phone number 974774codingxjourney1717";
str = "codingXjourney'scell phone number 974774codingxjourney1717";

let result = regex.exec(str);
console.log("the result from exec is: ", result);

if (regex.test(str)) {
    console.log(`The string: ${str}. Matches the expression: ${regex.source}`)
} 
else {
    console.log(`The string: ${str}. Does not match the expression: ${regex.source}`)
}