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
