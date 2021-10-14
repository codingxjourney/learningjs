console.log('this is tut 10');
function greet(name, wish = 'wish you Happy Birthday') {
    
    let msg = `${name}! On this wonderful day, I wish you the best that life has to offer! ${wish}! Birthdays come around every year, but friends like you can only be found once in a lifetime. Once again wishing you a ${wish}!`;
    return msg;
}

let user1 = 'codingwithharry';

let val = greet(user1, 'Happy Birthay');
console.log(val);


// converting function into defined const variable
const myGreet = function (name, wish = 'wish you Happy Birthday') {
    let msg = `${name}! On this wonderful day, I wish you the best that life has to offer! ${wish}! Birthdays come around every year, but friends like you can only be found once in a lifetime. Once again wishing you a ${wish}!`;
    return msg;
}

let user2 = 'codingxjourney';

let value = myGreet(user2, 'Happy Birthay');
console.log(value);


// function inside the object's index
const myObj = {
    user: "codingxjourney",
    game: function () {
        return "GTA 5";
    }
}
console.log(myObj.game);
console.log(myObj.game());


arr = ['fruits', 'vegetable', 'meat'];

arr.forEach(function(element, index, arry) {
    console.log(element, index);
});