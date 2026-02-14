const repeatString = function(string, num) {
    if (num >= 0) {
        const repeatString = string.repeat(num);
        return repeatString;
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
