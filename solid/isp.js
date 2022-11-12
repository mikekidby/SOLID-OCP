//The Interface Segregation Principle (ISP) states that “a client should never be forced to implement 
//an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use”.

//Meaning separate the interfaces.


//Note: By default, JavaScript does not have interfaces, but this principle still applies. 
//So let’s explore this as if the interface exists, so you will know how it works for other programming languages like Java.


//A typical interface will contain methods and properties. When you implement this interface into any class, 
//then the class needs to define all its methods. For example, suppose you have an interface that defines methods to draw specific shapes.
//To fix this, you would need to segregate the interface.

// interface ShapeInterface {
//     calculateArea();
//     calculateVolume();
// }

interface ShapeInterface {
    calculateArea();
}

interface ThreeDimensionalShapeInterface {
    calculateArea();
    calculateVolume();
}

//When any class implements this interface, all the methods must be defined even if you won't use them or if they don’t apply to that class.

class Square implements ShapeInterface {
    calculateArea(){
        //...
    } 
}

class Cuboid implements ThreeDimensionalShapeInterface {
    calculateArea(){
        //...
    }
    calculateVolume(){
        //...
    }    
}

class Rectangle implements ShapeInterface {
    calculateArea(){
        //...
    }  
}
