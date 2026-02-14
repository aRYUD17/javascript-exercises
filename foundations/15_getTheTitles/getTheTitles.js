const getTheTitles = function(books) {
    const titleArray = books.map((books) => {
        return books.title;
    })

    return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
