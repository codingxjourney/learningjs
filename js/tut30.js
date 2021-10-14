console.log("this is javascript tutorial 30");

const proto = {
    slogan: function () {  
        return "This company is the best";
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

// this creates codingxjourney object (ESJS)
let codingxjourney = Object.create(proto);
codingxjourney.name = "iSamyakt";
codingxjourney.role = "Coder";
codingxjourney.changeName("codingmyjourney");
console.log(codingxjourney);

// this also creates codingxjourney1 object
const codingmyjourney1 = Object.create(proto, {
    name: {value: "harry", writable: true},
    role: {value: "Coder"},
});
codingmyjourney1.changeName("CodeWithHarry");
console.log(codingmyjourney1);

// creating Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// lets add Slogan
Employee.prototype.slogan = function () {  
    return `This company is performing next level. Regards, ${this.name}`;
}

// creating an object from this constructor now
let codingxjourneyObj = new Employee("Harsha", 20000, 2);
console.log(codingxjourneyObj.slogan());

// creating Coder constructor
function Coder(name, salary, experience, language) {  
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype 
Coder.prototype = Object.create(Employee.prototype);

// Manually setting the constructor
Coder.prototype.constructor = Coder;

let priyanka = new Coder("Priyanka", 10000, 1, "C++");
console.log(priyanka);

let iSamyakt = new Coder("codingxjourney", 170000, 1, "Javascript");
console.log(iSamyakt);
