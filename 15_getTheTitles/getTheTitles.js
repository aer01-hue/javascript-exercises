const getTheTitles = function() {
const books = [
    {title: "Book", author: "Name"}
];

const getTheTitles = (booksArray) => {
    return booksArray.map(book => book.title);
};

console.log(getTheTitles(books));
};

// Do not edit below this line
module.exports = getTheTitles;
