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