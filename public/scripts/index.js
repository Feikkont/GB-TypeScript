//
// type BookType = {
//     name: string;
//     genre: string;
//     pageAmount: number;
// }
class Book {
    constructor({ name, genre, price }) {
        this.name = '';
        this.genre = null;
        this.price = 0;
        this.name = name;
        this.genre = genre;
        this.price = price;
    }
}
const books = [
    new Book({
        name: 'Harry Potter',
        genre: { value: 'fantasy', type: 'new' },
        price: 980
    }),
    // new Book('lord of the Ring', 'fantasy', 1001),
    // new Book('How to be productive', 'lifestyle', 500),
    // new Book('Game of Thrones', 'fantasy', 999)
];
// function findSuitableBook(genre: string, pagesLimit: number): Book | undefined {
//     return books.find((book) => {
//         return book.genre === genre && book.pageAmount <= pagesLimit
//     })
// }
// function findSuitableBook(genre: string, pagesLimit: number, multipleRecommendations = true): Book | Book[] | string {
//     const findAlgorithm = (book: Book) => {
//         return book.genre === genre && book.pageAmount <= pagesLimit
//     }
//     if (multipleRecommendations) {
//         return books.filter(findAlgorithm);
//     } else {
//         return books.find(findAlgorithm) ? books.find(findAlgorithm) : 'Книга не найдена' // если книга есть, то ее возвращают
//             // если нет то возвращает строку
//     }
// }
function findSuitableBook(genreValue, pagesLimit, multipleRecommendations = true) {
    const findAlgorithm = (book) => {
        return book.genre.value === genreValue && book.price <= pagesLimit;
    };
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    }
    else {
        return books.find(findAlgorithm);
        // если нет то возвращает строку
    }
}
const recommendedBook = findSuitableBook('fantasy', 1000);
if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name);
}
console.log(findSuitableBook('fantasy', 1000));
console.log(findSuitableBook('fantasy', 1000));
// const name = 'Vasya';
//
// console.log(`Hello ${name}`)
// typeof undefined // "undefined"
// typeof 0 // "number"
// typeof 10n // "bigint"
// typeof true // "boolean"
// typeof 'foo' // "string"
// typeof Symbol('id') // "symbol"
// typeof {} // "object"
// typeof null // "object" *
// typeof alert // "function" *
//
// let a: undefined
// let b: null
// let c: boolean
// let d: number
// let e: bigint
// let f: string
// let j: symbol
// const name: string = 'Vasya';
const book = new Book({
    name: 'Harry Potter1',
    genre: { value: 'fantasy', type: 'new' },
    price: 980
});
console.log(book.genre.toUpperCase(), book.price.toFixed(2));
