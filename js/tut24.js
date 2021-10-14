console.log("welcome to js tut 24");

let today = new Date();
console.log(today);

let otherDay = new Date('7/4/1997 17:17:17');
otherDay = new Date('July 17 1977');
otherDay = new Date('04/07/1974');
console.log(otherDay);

let x;
x = otherDay.getDay();
x = otherDay.getDate();
x = otherDay.getMinutes();
x = otherDay.getSeconds();
x = otherDay.getHours();
x = otherDay.getTime();
x = otherDay.getMilliseconds();
x = otherDay.getMonth();

console.log(x);

otherDay.setDate(17);
otherDay.setMonth(7);
otherDay.setFullYear(1970);
otherDay.setHours(17);
otherDay.setMinutes(17);
otherDay.setSeconds(17);
console.log(otherDay);