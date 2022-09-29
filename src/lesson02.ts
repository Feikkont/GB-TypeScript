import {Book} from "./index";
import { IProduct} from "./interfaces";


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
export class Product implements IProduct{
    price: number;

    constructor(price: number) {
        this.price = price
    }
    getProductDescription() {
        return `price is ${this.price}`
    }
}
