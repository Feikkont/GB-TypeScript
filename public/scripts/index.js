// interface iBook {
//     name: string;
//     genre: GenreType;
//     price: number;
//     reviews: string[];
// }
//
// type BookType = {
//     name: string;
//     genre: string;
//     pageAmount: number;
// }
// class Book {
//     name = '';
//     genre = null;
//     price = 0;
//     reviews = [];
export class Book {
    // constructor({name, genre, price}: iBook) {
    constructor(name, genre, price, author, reviews) {
        this.name = name;
        this.genre = genre;
        this.price = price;
    }
}
// ['Vadim', 3, 'not bad']
const books = [
    // new Book({
    //     name: 'Harry Potter',
    //     genre: {value: 'fantasy', type: 'new'},
    //     price: 980
    // }),
    new Book('Harry Potter', 'fantasy', 980),
    // new Book('lord of the Ring', 'fantasy', 1001,[['Vadim', 3, 'not bad'], ['Vadim', 3, 'not bad']]),
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
    // const findAlgorithm = (book: iBook) => {
    const findAlgorithm = (book) => {
        // return book.genre.value === genreValue && book.price <= pagesLimit
        return book.genre === genreValue && book.price <= pagesLimit;
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
// если приложени граммотно написано, то any не используется
// const consoleName = (name: any) => {
//     console.log(name)
// }
// unknown можно хорошо использовать для обработки ошибок, если не знаешь что придет
// const consoleName = (name: unknown) => {
//     if (typeof name === 'string') {
//         console.log(name.toUpperCase())
//     }
//     //дальше нужно обработать дальше ошибки
// }
// const name: string = 'Vasya';
let c;
let d;
let e;
let f;
let j;
const book = new Book('Harry Potter', 'fantasy', 980);
console.log(book.genre.toUpperCase(), book.price.toFixed(2));
const NewObjectBook = {
    name: 'Harry Potter',
    genre: 'fantasy',
    price: 980,
    reviews: [
        ['Vadim', 3, 'not bad'],
        ['Vadim', 3, 'not bad']
    ],
};
const BadObjectBook = {
    name: 'Harry Potter',
    reviews: [
        ['Vadim', 3, 'not bad'],
        ['Vadim', 3, 'not bad']
    ],
};
const printBookName = (book) => console.log(book.name);
printBookName(NewObjectBook);
//ошибка
// printBookName(BadObjectBook);
export function showRating(entity) {
    if (entity.rating == null) {
        return 'not rated yet';
    }
    const roundedRating = Math.round(entity.rating);
    let rating = '';
    for (let i = 0; i < roundedRating; i++) {
        rating += '⭐';
    }
    return rating + ` (${entity.rating.toFixed(2)})`;
}
