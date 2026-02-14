const fibonacci = function(num) {
    const number =Number(num)

    if (number < 0 ){
        return "OOPS";
    }

    if (number === 0){
        return 0;
    }

    return number === 1 || number === 2 ? 1 : fibonacci(number-1) + fibonacci(number-2) ;
};

// Do not edit below this line
module.exports = fibonacci;
