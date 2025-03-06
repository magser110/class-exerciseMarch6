function calDiscount(price, discount) {
    return price - (price * (discount / 100));
}

function discountTest(actual, expected, message) {
    if (actual === expected){
        console.log("pass:", message);
        
    } else {
        console.error(
            `fail: ${message} | expected ${expected}, but got ${actual}`
        );
    }
}

discountTest(calDiscount(100, 20), 80, "20% discount on $100");

discountTest(calDiscount(1000, 20), 800, "20% discount on $1000");

discountTest(calDiscount(10000, 20), 8000, "20% disount on $10000");