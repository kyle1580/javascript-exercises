const getTheTitles = function() {
    const books = arguments[0];
    const titles = books.map(book => book.title);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
