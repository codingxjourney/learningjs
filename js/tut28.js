console.log('this is js tutorial 28');

// object literal : Object.prototype
let obj = {
    name: "iSamyakt",
    twitter: "codingxjourney",
    instagram: "codingxjourney"
}

function Obj(givenName, twitterId, instagramId) {
    this.name = givenName;
    this.twitter = twitterId;
    this.instagram = instagramId;
}

Obj.prototype.getName = function () {
    return this.name;
}

Obj.prototype.setName = function (name, twitter, instagram) {
    this.name = name;
    this.twitter = twitter;
    this.instagram = instagram;
}

let obj2 = new Obj("Harry", "codingwithharry", "programmmingwithharry");
console.log(obj2);


function Student() {
    this.name = "Harry";
    this.gender = "Male";
}
Student.prototype.sayHi = function () {
    console.log("Hello World!");
};
let std = new Student();
std.toString();
// console.log(std);


function MyDetails(name, job, yearOfBirth) {
    this.name = name;
    this.job = job; 
    this.yearOfBirth = yearOfBirth;
}
// console.log(MyDetails.prototype);

