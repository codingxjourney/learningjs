console.log('this is js tutorial 27');

let car = {
    name: 'Tata Safari',
    topSpeed: '220',
    run: function () { 
        console.log(`Car is running!`);
    }
}

// we have already seen constructor like this:
// new Date();

// creating a constructor for cars
function GeneralCar(givenName, ginvenSpeed) {
    this.name = givenName;
    this.topSpeed = ginvenSpeed;
    this.run = function () {
        console.log(`${this.name} is running!`);
    }
    this.analyze = function () {
        console.log(`This car is slower by ${240 - this.topSpeed} kmph then Mercedes!`);
    }
}
car1 = new GeneralCar("Fortuner", 220);
car2 = new GeneralCar("Innova Crysta", 220);
car3 = new GeneralCar("Mercedes", 240);
console.log(car1, car2, car3);