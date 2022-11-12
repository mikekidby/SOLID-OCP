//Dependency Inversion Principle

//This principle is targeted towards loosely coupling software modules so that high-level modules (which provide complex logic) -
//are easily reusable and unaffected by changes in low-level modules (which provide utility features).

//1. High-level modules should not import anything from low-level modules. Both should depend on abstractions (for example, interfaces).
//2. Abstractions should be independent of details. Details (concrete implementations) should depend on abstractions.

//Your classes should depend upon interfaces or abstract classes instead of concrete classes and functions. 
//This makes your classes open to extension, following the open-closed principle.

//Let's look at an example. When building a store, you would want your store to make use of a payment gateway like stripe or any other preferred payment method. 
//You might write your code tightly coupled to that API without thinking of the future.
//But then what if you discover another payment gateway that offers far better service, let’s say PayPal? 
//Then it becomes a struggle to switch from Stripe to Paypal, which should not be an issue in programming and software design.




class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBook(quantity, price) {
        this.paymentProcessor.pay(quantity * price);
    }

    purchaseCourse(quantity, price) {
        this.paymentProcessor.pay(quantity * price);
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInDollars) {
        console.log(`${this.user} made payment of ${amountInDollars}`);
    }
}

let store = new Store(new StripePaymentProcessor('John Doe'));
store.purchaseBook(2, 10);
store.purchaseCourse(1, 15);

//In the code above, you will notice that the StripePaymentProcessor class is an interface between the Store class and the Stripe class. 
//In a situation where you need to make use of PayPal, all you have to do is create a PayPalPaymentProcessor which would work with the PayPal class, 
//and everything will work without affecting the Store class.



// class Store {
//     constructor(paymentProcessor) {
//         this.paymentProcessor = paymentProcessor;
//     }

//     purchaseBook(quantity, price) {
//         this.paymentProcessor.pay(quantity * price);
//     }

//     purchaseCourse(quantity, price) {
//         this.paymentProcessor.pay(quantity * price);
//     }
// }

// class PayPalPaymentProcessor {
//     constructor(user) {
//         this.user = user;
//         this.paypal = new PayPal();
//     }

//     pay(amountInDollars) {
//         this.paypal.makePayment(this.user, amountInDollars);
//     }
// }

// class PayPal {
//     makePayment(user, amountInDollars) {
//         console.log(`${user} made payment of ${amountInDollars}`);
//     }
// }

// let store = new Store(new PayPalPaymentProcessor('John Doe'));
// store.purchaseBook(2, 10);
// store.purchaseCourse(1, 15);