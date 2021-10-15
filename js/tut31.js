console.log("this is js tutorial 31");

class Employee {
    constructor(givenName, givenExperience, givenCompany, givenYear) {
        this.name = givenName;
        this.experience = givenExperience;
        this.company = givenCompany;
        this.year = givenYear;
    }

    slogan() {
        return `Myself ${this.name}, I am working in ${this.company}.`;
    }

    joiningYear() {
        return `I joined this company in ${this.year}`;
    }

    static add(x, y) {
        return x + y;
    }
}

codingxjourney = new Employee("Samyakt", 7, "apple", 2017);
console.log(codingxjourney);

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenCompany, givenYear, language, github) {
        super(givenName, givenExperience, givenCompany, givenYear);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage() {
        if(this.language == "Rust") {
            return "Rust";
        }
        else {
            return "JavaScript";
        }
    } 

    static multiply(x, y) {
        return x * y;
    }
}

codewithharry = new Programmer("Harry", 17, "microsoft", 2014, "JavaScript", "codewithharry");
console.log(codewithharry);