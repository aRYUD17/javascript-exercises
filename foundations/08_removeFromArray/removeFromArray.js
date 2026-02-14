const removeFromArray = function(array, ...remv) {
    const removedArray = array.filter((item) => {
        return !remv.includes(item);
    });
    return removedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
