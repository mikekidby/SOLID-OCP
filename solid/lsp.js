//Liskov Substitution Principle (LSP) 
//Let Φ(x) be a property provable about objects x of type T. Then Φ(y) should be true for objects y of type S where S is a subtype of T”


//The principle defines that in an inheritance, objects of a superclass (or parent class) should be -
//substitutable with objects of its subclasses (or child class) without breaking the application or causing any error.

//You want the objects of your subclasses to behave the same way as the objects of your superclass.


//A very common example is the rectangle, square scenario. It’s clear that all squares are rectangles because they are quadrilaterals 
//with all four angles being right angles. But not every rectangle is a square. To be a square, its sides must have the same length

class Shape {
    setColor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

class Rectangle extends Shape {
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

class Square extends Shape {
    setSide(side) {
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
}

// superclass
let shape = new Shape();
shape.setColor('red');
console.log(shape.getColor()); // red

// subclass
let rectangle = new Rectangle();
rectangle.setColor('red');
console.log(rectangle.getColor()); // red

// subclass
let square = new Square();
square.setColor('red');
console.log(square.getColor()); // red