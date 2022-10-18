import { Book } from './index.js';
function loadManager(data) {
    return {
        status: 'loading',
        data: data
    };
}
const userStore = {
    data: {
        name: '',
        age: ''
    },
    status: ''
};
const objArr = {
    value: ['asd', 'asdasdd', 'ssssd'],
    find: (arr, cb) => ''
    // arr.find(cb)
};
export const programmingLiterature = new Map();
export class Collection {
    constructor() {
        // здесь хранятся все элементы
        // any чуть позже доработаем, не переживайте
        this.items = {};
    }
    // эмулируем свойство size
    get size() {
        return Object.keys(this.items).length;
    }
    // добавить объект
    set(key, value) {
        this.items[key] = value;
    }
    // получить объект
    get(key) {
        return this.items[key];
    }
    // проверить, есть ли объект
    has(key) {
        return this.items[key] != null;
    }
    // удалить объект, если есть
    // вернуть true если удаление выполнялось, false - если нет
    delete(key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    }
    // очистить все элементы
    clear() {
        this.items = {};
    }
}
programmingLiterature.set('Cracking the coding interview', new Book('Cracking the coding interview', 'programming', 100, {
    firstName: 'Gayle',
    lastName: 'Laakmann',
    rating: 5
}));
export function getFromShelf(shelf, bookName) {
    // берём элемент из коллекции
    const book = shelf.get(bookName);
    if (book == null) {
        throw Error(`There is no such book on the shelf.`);
    }
    return book;
}
//
// export const programmingLiterature = [
//     new Book(
//         'Cracking the coding interview', 'programming', 100,
//         {
//             firstName: 'Gayle',
//             lastName: 'Laakmann',
//             rating: 5
//         }
//     )
// ]
// // функция "взятия" книги с полки
// // по факту это поиск - операция, требующая время
// export function getFromShelf(shelf: Book[], bookName: string): Book {
//     const book = shelf.find((item) => {
//         return item.name === bookName
//     })
//     if (book == null) {
//         throw Error(`There is no such book on the shelf.`)
//     }
//     return book
// }
