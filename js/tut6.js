console.log('We are at tut6');
const userName = "codingxjourney";
const greeting = "good morning";
console.log(greeting + ', ' + userName);

let html;
html = "<h1> this is Heading </h1>" + 
       "<p> this is my Paragraph </p>";

html = html.concat(' this', ' str');
console.log(html);
console.log(html.length);
console.log(html.toUpperCase());
console.log(html.toLowerCase());
console.log(html);
console.log(html[7]);
console.log(html.indexOf('i'));
console.log(html.lastIndexOf('i'));
console.log(html.charAt(17));
console.log(html.endsWith('str')); // true
console.log(html.includes('is'));  // true
console.log(html.substring(1,7));  // index range from 1 to 7
console.log(html.slice(-7));  // last 7 words
console.log(html.slice(0,17)); // index range from 0 to 17
console.log(html.split(' '));
console.log(html.split(''));
console.log(html.split('>'));
console.log(html.replace('this', 'it')); // only first place will be replaced

let fruit1 = '\'Apple\'';
let fruit2 = 'Mango';
let myHtml = `Hey! ${userName}
              <h2> This is JS tutorial </h2>
              <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;              