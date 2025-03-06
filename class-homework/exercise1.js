class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayDetails() {
        return `product: ${this.name}, price: $${this.price}`;
    }
}

class Electronics extends Product {
    constructor(name, price, warranty) {
        super(name, price)
        this.warranty = warranty;
    }

    displayDetails() {
        return `${super.displayDetails()}, warranty: ${this.warranty} years`
    }
}

const item = new Product("pencil", 0.99);
console.log(item.displayDetails());

const airpods = new Electronics("airpods", 200, 1);
console.log(airpods.displayDetails());
