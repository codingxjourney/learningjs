console.log("this is js tutorial 47");

let regex = /harry/;
// lets look into some metacharacter symbols
regex = /^har/;  // ^ means expression will match if "string starts with"
regex = /rry$/;  // $ at the end of the string means "string ends with"
regex = /h.rry/;  // . matches any "one character"
regex = /h*rry/;  // * matches any "zero or more characters"
regex = /ha?rryi?/;  // ? after the character means that character is optional
regex = /h\*rry/;  // \ means expression will matches original character not metacharacter sysmbols

let str = "harry is cool guy and harry like to write code and harry makes things little bit funny";
str = "harry is in harry potter";


let result = regex.exec(str);
console.log("The result from exec is ", result);


if (regex.test(str)) {
    console.log(`The string: ${str}. Matches the expression: ${regex.source}`);
}
else {
    console.log(`The string: ${str}. Does not match the expression: ${regex.source}`);
}