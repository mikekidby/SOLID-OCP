// Demonstrating Single Responsibility Principle

// ValidatePerson class will only be responsible for validating a user, as seen below:
class ValidatePerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    ValidateName(name) {
        if (name.length > 3) {
            return true;
        } else {
            return false;
        }
    }

    ValidateAge(age) {
        if (age > 18) {
            return true;
        } else {
            return false;
        }
    }
}


// DisplayPerson will be responsible for displaying a person, as you can see in the code block below:
class DisplayPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.validate = new ValidatePerson(this.name, this.age);
    }

    Display() {
        if (
            this.validate.ValidateName(this.name) &&
            this.validate.ValidateAge(this.age)
        ) {
            console.log(`Name: ${this.name} and Age: ${this.age}`);
        } else {
            console.log('Invalid');
        }
    }
}


//Our classes have just one reason to change. If you want to change the DisplayPerson class, it won’t affect the ValidatePerson class.