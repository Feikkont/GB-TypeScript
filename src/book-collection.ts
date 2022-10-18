import {Book} from './index.js'
// полка с литературой по программированию

// export const books: Book[] = [ //можно записать типизацию Array<Book>
//     new Book('Harry Potter', 'fantasy', 980),
//     new Book('lord of the Ring', 'fantasy', 1001,[['Vadim', 3, 'not bad'], ['Vadim', 3, 'not bad']]),
//     new Book('How to be productive', 'lifestyle', 500),
//     new Book('Game of Thrones', 'fantasy', 999)
// ]

// export interface Collection<T> {
//     [key: string]: T
// }
//
// const obj: Collection<string> = {
//     key: 'hello'
// }
//
// const obj2: Collection<number> = {
//     key: 2
// }

interface LoadManagerI<data> {
    status: string;
    data: data;
}

function loadManager(data) {
    return {
        status: 'loading',
        data: data
    }
}

interface UserI {
    name: string;
    age: string;
}

interface MessageI {
    text: string;
    userId: string;
}

const userStore: LoadManagerI<UserI> = {
    data: {
        name: '',
        age: ''
    },
    status: ''
}

const objArr: ObjOfString = {
    value: ['asd', 'asdasdd', 'ssssd'],
    find: (arr, cb) => ''
    // arr.find(cb)
}

interface ObjOfString {
    value: string[],
    find: FindType<string>
}

interface ObjOfNumber {
    value: number[],
    find: FindType<number>
}

type FindType<T> = (arr: T[], cb: () => boolean) => T

interface Map<K, V> {
    // [K]: V
    set: (key: K, value: V) => void;
    get: (key: K) => V;
}

export const programmingLiterature: Map<string, Book> = new Map()


export class Collection<K, V> {
// здесь хранятся все элементы
// any чуть позже доработаем, не переживайте
    items: any = {}

// эмулируем свойство size
    get size(): number {
        return Object.keys(this.items).length
    }

// добавить объект
    set(key: K, value: V): void {
        this.items[key] = value
    }

// получить объект
    get(key: K): V {
        return this.items[key]
    }

// проверить, есть ли объект
    has(key: K): boolean {
        return this.items[key] != null
    }

// удалить объект, если есть
// вернуть true если удаление выполнялось, false - если нет
    delete(key: K): boolean {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }
        return false
    }

// очистить все элементы
    clear(): void {
        this.items = {}
    }
}


programmingLiterature.set(
    'Cracking the coding interview',
    new Book(
        'Cracking the coding interview', 'programming', 100,
        {
            firstName: 'Gayle',
            lastName: 'Laakmann',
            rating: 5
        }
    )
)

export function getFromShelf(shelf: Map<string, Book>, bookName: string): Book {
// берём элемент из коллекции
    const book = shelf.get(bookName)

    if (book == null) {
        throw Error(`There is no such book on the shelf.`)
    }
    return book
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
