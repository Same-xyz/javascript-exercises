
const sumAll = function(num1 , num2) {
    const isNotInteger = (num) => !Number.isInteger(num);
    if (isNotInteger(num1)|| isNotInteger(num2)) return "ERROR"
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (num1 > num2) [num1, num2] = [num2, num1];
    
    console.log(sumAll)
    let sum = 0;
    for (let i = num1; i <= num2; i++){
        sum += i
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;