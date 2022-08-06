function simple_interest (amount, time, interestRate) {
    let total = amount * (1+ ((interestRate/100) * time));
    let earnInterest = total - amount;
    return earnInterest;
}

let output = simple_interest (500, 2, 4);
console.log(output);