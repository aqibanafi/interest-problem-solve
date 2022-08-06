function compound_interest (capital, amount, n, t) {
    let f = Math.pow((capital / amount), (1/(n*t)));
    let interestRate = n * [f - 1] * 100;
    let x = parseFloat(Math.abs(interestRate));
    let r = x.toFixed(1);
    return r;
}

let output = compound_interest (15000, 27839, 12, 10);
console.log(output);