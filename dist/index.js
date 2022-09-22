class Book {
    constructor(name, genre, pageAmount) {
        this.name = '';
        this.genre = '';
        this.pageAmount = 0;
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}
const books = [
    new Book('Harry Potter', 'fantasy', 980),
    new Book('lord of the Ring', 'fantasy', 1001),
    new Book('How to be productive', 'lifestyle', 500),
    new Book('Game of Thrones', 'fantasy', 999)
];
// function findSuitableBook(genre: string, pagesLimit: number): Book | undefined {
//     return books.find((book) => {
//         return book.genre === genre && book.pageAmount <= pagesLimit
//     })
// }
function findSuitableBook(genre, pagesLimit, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm) ? books.find(findAlgorithm) : 'Книга не найдена';
    }
}
console.log(findSuitableBook('fantasy', 1000, false));
console.log(findSuitableBook('fantasy', 1000));
// console.log(findSuitableBook('fantasy', "1000"));
// console.log(findSuitableBook('fantasy'));
// console.log(findSuitableBook(1000, 'fantasy'));
// console.log(findSuitableBook(1000 ));
// console.log(findSuitableBook( ));
