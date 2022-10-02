import {Book} from "./index";
import {IProduct} from "./interfaces";


const book = new Book(
    'lord of the Ring',
    'fantasy',
    1001,
    {
        firstName: "Vasya",
        lastName: "Vasychkin",
        rating: 3
    },
    [
        ['Vadim', 3, 'not bad'],
        ['Vadim', 3, 'not bad']
    ])

//имплементация- в интерфейсе описываешь абстрактную функцию, что она возвращает, а в классе логику
export class Product implements IProduct {
    price: number;

    constructor(price: number) {
        this.price = price
    }

    getProductDescription() {
        return `price is ${this.price}`
    }
}


function addToShelf(book: Book, shelfName?: string): void {
    if (shelfName == null) {
        shelfName = 'favorite'
    }
// здесь логика добавления книги на полку
}

addToShelf(book, 'the-best')
addToShelf(book)

const a = {
    book: book,
    add: addToShelf
}

// type Ia = {
//     book: Book;
//     add: (book: Book, shelfName?: string) => void;
// }

// const a: Ia = {
//     book: book,
//     add: addToShelf
// }

//-------------------

type Callback = (error?: Error | null, transactionId?: string) => void;

function buyRequest(book: Book) {
// логика покупки
    const transactionId = Math.random().toString()
    return Promise.resolve(transactionId)
}
function buy(book: Book, callback: Callback): void {
    buyRequest(book)
        .then((id) => {
            callback(null, id)
        })
        .catch((error) => {
            callback(error)
        })
}

const callback: Callback = (error, transactionId) => {
    if (error == null && transactionId != null) {
        console.log('Success!')
    } else {
        console.error('Fail', error)
    }
}
// попробуем купить книгу
buy(
    book,
    callback
)
