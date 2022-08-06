let returnAmount;
function find_interest (amount, interestRate, time) {
    returnAmount = amount * (1+((interestRate/100) * time));
        return returnAmount;
}

let output = find_interest (10000, 7.5, 8);
console.log(output);
