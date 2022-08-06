function simple_interest (amount, interestRate, time) {
    let total = amount * (1+((interestRate / 100) * time));
    return total;
}

let output = simple_interest (10000, 7.5, 8);
console.log(output);