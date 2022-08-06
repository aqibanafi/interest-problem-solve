function compound_interest (amount, interestRate, n, t) {
    let f = Math.pow((1 + ((interestRate / 100) / n)), (n * t));
    let totalAmount = parseInt(amount * f);
    return totalAmount;
}

let output = compound_interest (112000, 4.3, 12, 5);
console.log(output);