const {sum} = require("../12_calculator/calculator");
const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0){
        return "ERROR";
    } else {
        const start = Math.min(num1, num2);
        const end = Math.max(num1, num2);
        const num = end - start + 1;
        const total = num * (end + start) / 2;
        return total;
    }

};

// Do not edit below this line
module.exports = sumAll;
