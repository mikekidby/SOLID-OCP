//The open-closed principle (OCP) states that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
//OCP is two-direction principle.

// It is open for extension — This means you can extend what the module can do.
// It is closed for modification — This means you cannot change the source code, even though you can extend the behavior of a module or entity.


// NEVER MODIFY GLOBAL SOURCE CODE!!
const iceCreamFlavors = ['chocolate', 'vanilla'];

class makeIceCream {
    constructor(flavor) {
        this.flavor = flavor;
    }
    make() {
        if (iceCreamFlavors.indexOf(this.flavor) > -1) {
            console.log('Great success. You now have ice cream.');
        } else {
            console.log('Epic fail. No ice cream for you.');
        }
    }
}


// addIceCream – to handle addition to the iceCreamFlavors array using the add() method. This means your code is closed to modification but open to an extension because you can add new flavors without directly affecting the array.

class addIceCream {
    constructor(flavor) {
        this.flavor = flavor;
    }
    add() {
        iceCreamFlavors.push(this.flavor);
    }
}

let addStrawberryFlavor = new addIceCream('strawberry');
addStrawberryFlavor.add();
let makeStrawberryIceCream = new makeIceCream('strawberry')
makeStrawberryIceCream.make();