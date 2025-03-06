console.log("connected");

let productName:string = "string"
let productPrice: number = 1600;

function calcualteDiscount(price: number, discountRate: number): number {
    return price - (price * (discountRate / 100))
}

let dicounctedPrice = calcualteDiscount(1200, 10);
console.log(dicounctedPrice);


interface Product {
    name: string;
    price: number;
    isInStock: boolean;
};

let newProduct: Product = {
    name: "laptop", 
    price: 1800, 
    isInStock: true
}