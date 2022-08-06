function interest(amount, interestRate, time){
    const temp = ((interestRate/100)*time);
    const interestAmount = amount * Math.exp(temp);
    return interestAmount;
}
const amount = 50000;
const interestRate = 6.5;
const time = 5;
const interestAmount = interest(50000, 6.5, 5);
console.log("Amount after",time,"years with interest is:", interestAmount);