import { Book } from "./index";
const book = new Book('lord of the Ring', 'fantasy', 1001, {
    firstName: "Vasya",
    lastName: "Vasychkin",
    rating: 3
}, [
    ['Vadim', 3, 'not bad'],
    ['Vadim', 3, 'not bad']
]);
//имплементация- в интерфейсе описываешь абстрактную функцию, что она возвращает, а в классе логику
export class Product {
    constructor(price) {
        this.price = price;
    }
    getProductDescription() {
        return `price is ${this.price}`;
    }
}
function addToShelf(book, shelfName) {
    if (shelfName == null) {
        shelfName = 'favorite';
    }
    // здесь логика добавления книги на полку
}
addToShelf(book, 'the-best');
addToShelf(book);
const a = {
    book: book,
    add: addToShelf
};
function buyRequest(book) {
    // логика покупки
    const transactionId = Math.random().toString();
    return Promise.resolve(transactionId);
}
function buy(book, callback) {
    buyRequest(book)
        .then((id) => {
        callback(null, id);
    })
        .catch((error) => {
        callback(error);
    });
}
const callback = (error, transactionId) => {
    if (error == null && transactionId != null) {
        console.log('Success!');
    }
    else {
        console.error('Fail', error);
    }
};
// попробуем купить книгу
buy(book, callback);
