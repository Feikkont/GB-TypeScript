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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLHlCQUF5QjtBQUN6QixJQUFJO0FBRUosRUFBRTtBQUNGLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQixJQUFJO0FBRUosZUFBZTtBQUNmLGlCQUFpQjtBQUNqQixvQkFBb0I7QUFDcEIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUlwQixNQUFNLE9BQU8sSUFBSTtJQU9iLDZDQUE2QztJQUM3QyxZQUFZLElBQVksRUFBRSxLQUFhLEVBQUUsS0FBb0IsRUFBRSxNQUFnQixFQUFFLE9BQW9DO1FBQ2pILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQUVELDBCQUEwQjtBQUUxQixNQUFNLEtBQUssR0FBVztJQUNsQixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLDhDQUE4QztJQUM5QyxpQkFBaUI7SUFDakIsTUFBTTtJQUNOLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDO0lBQ3hDLG9HQUFvRztJQUNwRyxzREFBc0Q7SUFDdEQsOENBQThDO0NBQ2pELENBQUE7QUFFRCxtRkFBbUY7QUFDbkYsb0NBQW9DO0FBQ3BDLHVFQUF1RTtBQUN2RSxTQUFTO0FBQ1QsSUFBSTtBQUVKLHlIQUF5SDtBQUN6SCw4Q0FBOEM7QUFDOUMsdUVBQXVFO0FBQ3ZFLFFBQVE7QUFDUixxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLGVBQWU7QUFDZixpSUFBaUk7QUFDakksK0NBQStDO0FBQy9DLFFBQVE7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QWEsQ0FBQyxDQUFDO0FBQzdCLFFBQVE7QUFDUixnQ0FBZ0M7QUFFaEMsTUFBTSxVQUFVLFVBQVUsQ0FBQyxNQUFrQjtJQUN6QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ3ZCLE9BQU8sZUFBZSxDQUFBO0tBQ3pCO0lBQ0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDL0MsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFBO0lBQ2YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNwQyxNQUFNLElBQUksR0FBRyxDQUFBO0tBQ2hCO0lBQ0QsT0FBTyxNQUFNLEdBQUcsS0FBSyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBO0FBQ3BELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lBdXRob3IsIFJhdGluZ2FibGV9IGZyb20gJy4vaW50ZXJmYWNlcydcblxudHlwZSBHZW5yZVR5cGUgPSB7IHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9O1xuXG4vLyBpbnRlcmZhY2UgaUJvb2sge1xuLy8gICAgIG5hbWU6IHN0cmluZztcbi8vICAgICBnZW5yZTogR2VucmVUeXBlO1xuLy8gICAgIHByaWNlOiBudW1iZXI7XG4vLyAgICAgcmV2aWV3czogc3RyaW5nW107XG4vLyB9XG5cbi8vXG4vLyB0eXBlIEJvb2tUeXBlID0ge1xuLy8gICAgIG5hbWU6IHN0cmluZztcbi8vICAgICBnZW5yZTogc3RyaW5nO1xuLy8gICAgIHBhZ2VBbW91bnQ6IG51bWJlcjtcbi8vIH1cblxuLy8gY2xhc3MgQm9vayB7XG4vLyAgICAgbmFtZSA9ICcnO1xuLy8gICAgIGdlbnJlID0gbnVsbDtcbi8vICAgICBwcmljZSA9IDA7XG4vLyAgICAgcmV2aWV3cyA9IFtdO1xuXG5cblxuZXhwb3J0IGNsYXNzIEJvb2sge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBnZW5yZTogc3RyaW5nO1xuICAgIHByaWNlOiBudW1iZXIgfCBudWxsO1xuICAgIGF1dGhvcjogSUF1dGhvcjtcbiAgICByZXZpZXdzOiBbc3RyaW5nLCBudW1iZXIsIHN0cmluZ11bXTtcblxuICAgIC8vIGNvbnN0cnVjdG9yKHtuYW1lLCBnZW5yZSwgcHJpY2V9OiBpQm9vaykge1xuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgZ2VucmU6IHN0cmluZywgcHJpY2U6IG51bWJlciB8IG51bGwsIGF1dGhvcj86IElBdXRob3IsIHJldmlld3M/OiBbc3RyaW5nLCBudW1iZXIsIHN0cmluZ11bXSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmdlbnJlID0gZ2VucmU7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB9XG59XG5cbi8vIFsnVmFkaW0nLCAzLCAnbm90IGJhZCddXG5cbmNvbnN0IGJvb2tzOiBCb29rW10gPSBbIC8v0LzQvtC20L3QviDQt9Cw0L/QuNGB0LDRgtGMINGC0LjQv9C40LfQsNGG0LjRjiBBcnJheTxCb29rPlxuICAgIC8vIG5ldyBCb29rKHtcbiAgICAvLyAgICAgbmFtZTogJ0hhcnJ5IFBvdHRlcicsXG4gICAgLy8gICAgIGdlbnJlOiB7dmFsdWU6ICdmYW50YXN5JywgdHlwZTogJ25ldyd9LFxuICAgIC8vICAgICBwcmljZTogOTgwXG4gICAgLy8gfSksXG4gICAgbmV3IEJvb2soJ0hhcnJ5IFBvdHRlcicsICdmYW50YXN5JywgOTgwKSxcbiAgICAvLyBuZXcgQm9vaygnbG9yZCBvZiB0aGUgUmluZycsICdmYW50YXN5JywgMTAwMSxbWydWYWRpbScsIDMsICdub3QgYmFkJ10sIFsnVmFkaW0nLCAzLCAnbm90IGJhZCddXSksXG4gICAgLy8gbmV3IEJvb2soJ0hvdyB0byBiZSBwcm9kdWN0aXZlJywgJ2xpZmVzdHlsZScsIDUwMCksXG4gICAgLy8gbmV3IEJvb2soJ0dhbWUgb2YgVGhyb25lcycsICdmYW50YXN5JywgOTk5KVxuXVxuXG4vLyBmdW5jdGlvbiBmaW5kU3VpdGFibGVCb29rKGdlbnJlOiBzdHJpbmcsIHBhZ2VzTGltaXQ6IG51bWJlcik6IEJvb2sgfCB1bmRlZmluZWQge1xuLy8gICAgIHJldHVybiBib29rcy5maW5kKChib29rKSA9PiB7XG4vLyAgICAgICAgIHJldHVybiBib29rLmdlbnJlID09PSBnZW5yZSAmJiBib29rLnBhZ2VBbW91bnQgPD0gcGFnZXNMaW1pdFxuLy8gICAgIH0pXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGZpbmRTdWl0YWJsZUJvb2soZ2VucmU6IHN0cmluZywgcGFnZXNMaW1pdDogbnVtYmVyLCBtdWx0aXBsZVJlY29tbWVuZGF0aW9ucyA9IHRydWUpOiBCb29rIHwgQm9va1tdIHwgc3RyaW5nIHtcbi8vICAgICBjb25zdCBmaW5kQWxnb3JpdGhtID0gKGJvb2s6IEJvb2spID0+IHtcbi8vICAgICAgICAgcmV0dXJuIGJvb2suZ2VucmUgPT09IGdlbnJlICYmIGJvb2sucGFnZUFtb3VudCA8PSBwYWdlc0xpbWl0XG4vLyAgICAgfVxuLy8gICAgIGlmIChtdWx0aXBsZVJlY29tbWVuZGF0aW9ucykge1xuLy8gICAgICAgICByZXR1cm4gYm9va3MuZmlsdGVyKGZpbmRBbGdvcml0aG0pO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIHJldHVybiBib29rcy5maW5kKGZpbmRBbGdvcml0aG0pID8gYm9va3MuZmluZChmaW5kQWxnb3JpdGhtKSA6ICfQmtC90LjQs9CwINC90LUg0L3QsNC50LTQtdC90LAnIC8vINC10YHQu9C4INC60L3QuNCz0LAg0LXRgdGC0YwsINGC0L4g0LXQtSDQstC+0LfQstGA0LDRidCw0Y7RglxuLy8gICAgICAgICAgICAgLy8g0LXRgdC70Lgg0L3QtdGCINGC0L4g0LLQvtC30LLRgNCw0YnQsNC10YIg0YHRgtGA0L7QutGDXG4vLyAgICAgfVxuLy8gfVxuXG5mdW5jdGlvbiBmaW5kU3VpdGFibGVCb29rKFxuICAgIGdlbnJlVmFsdWU6IHN0cmluZyxcbiAgICBwYWdlc0xpbWl0OiBudW1iZXIsXG4gICAgbXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMgPSB0cnVlXG4pOiBCb29rIHwgQm9va1tdIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBjb25zdCBmaW5kQWxnb3JpdGhtID0gKGJvb2s6IGlCb29rKSA9PiB7XG4gICAgY29uc3QgZmluZEFsZ29yaXRobSA9IChib29rOiBCb29rKSA9PiB7XG4gICAgICAgIC8vIHJldHVybiBib29rLmdlbnJlLnZhbHVlID09PSBnZW5yZVZhbHVlICYmIGJvb2sucHJpY2UgPD0gcGFnZXNMaW1pdFxuICAgICAgICByZXR1cm4gYm9vay5nZW5yZSA9PT0gZ2VucmVWYWx1ZSAmJiBib29rLnByaWNlIDw9IHBhZ2VzTGltaXRcblxuICAgIH1cbiAgICBpZiAobXVsdGlwbGVSZWNvbW1lbmRhdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIGJvb2tzLmZpbHRlcihmaW5kQWxnb3JpdGhtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYm9va3MuZmluZChmaW5kQWxnb3JpdGhtKTtcbiAgICAgICAgLy8g0LXRgdC70Lgg0L3QtdGCINGC0L4g0LLQvtC30LLRgNCw0YnQsNC10YIg0YHRgtGA0L7QutGDXG4gICAgfVxufVxuXG5jb25zdCByZWNvbW1lbmRlZEJvb2sgPSBmaW5kU3VpdGFibGVCb29rKCdmYW50YXN5JywgMTAwMCk7XG5cbmlmIChyZWNvbW1lbmRlZEJvb2sgaW5zdGFuY2VvZiBCb29rKSB7XG4gICAgY29uc29sZS5sb2cocmVjb21tZW5kZWRCb29rLm5hbWUpXG59XG5cblxuY29uc29sZS5sb2coZmluZFN1aXRhYmxlQm9vaygnZmFudGFzeScsIDEwMDApKTtcbmNvbnNvbGUubG9nKGZpbmRTdWl0YWJsZUJvb2soJ2ZhbnRhc3knLCAxMDAwKSk7XG5cbi8vIGNvbnN0IG5hbWUgPSAnVmFzeWEnO1xuLy9cbi8vIGNvbnNvbGUubG9nKGBIZWxsbyAke25hbWV9YClcblxuLy8gdHlwZW9mIHVuZGVmaW5lZCAvLyBcInVuZGVmaW5lZFwiXG4vLyB0eXBlb2YgMCAvLyBcIm51bWJlclwiXG4vLyB0eXBlb2YgMTBuIC8vIFwiYmlnaW50XCJcbi8vIHR5cGVvZiB0cnVlIC8vIFwiYm9vbGVhblwiXG4vLyB0eXBlb2YgJ2ZvbycgLy8gXCJzdHJpbmdcIlxuLy8gdHlwZW9mIFN5bWJvbCgnaWQnKSAvLyBcInN5bWJvbFwiXG4vLyB0eXBlb2Yge30gLy8gXCJvYmplY3RcIlxuLy8gdHlwZW9mIG51bGwgLy8gXCJvYmplY3RcIiAqXG4vLyB0eXBlb2YgYWxlcnQgLy8gXCJmdW5jdGlvblwiICpcbi8vXG4vLyBsZXQgYTogdW5kZWZpbmVkXG4vLyBsZXQgYjogbnVsbFxuLy8gbGV0IGM6IGJvb2xlYW5cbi8vIGxldCBkOiBudW1iZXJcbi8vIGxldCBlOiBiaWdpbnRcbi8vIGxldCBmOiBzdHJpbmdcbi8vIGxldCBqOiBzeW1ib2xcblxuLy8g0LXRgdC70Lgg0L/RgNC40LvQvtC20LXQvdC4INCz0YDQsNC80LzQvtGC0L3QviDQvdCw0L/QuNGB0LDQvdC+LCDRgtC+IGFueSDQvdC1INC40YHQv9C+0LvRjNC30YPQtdGC0YHRj1xuLy8gY29uc3QgY29uc29sZU5hbWUgPSAobmFtZTogYW55KSA9PiB7XG4vLyAgICAgY29uc29sZS5sb2cobmFtZSlcbi8vIH1cblxuLy8gdW5rbm93biDQvNC+0LbQvdC+INGF0L7RgNC+0YjQviDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0Ywg0LTQu9GPINC+0LHRgNCw0LHQvtGC0LrQuCDQvtGI0LjQsdC+0LosINC10YHQu9C4INC90LUg0LfQvdCw0LXRiNGMINGH0YLQviDQv9GA0LjQtNC10YJcbi8vIGNvbnN0IGNvbnNvbGVOYW1lID0gKG5hbWU6IHVua25vd24pID0+IHtcbi8vICAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKG5hbWUudG9VcHBlckNhc2UoKSlcbi8vICAgICB9XG4vLyAgICAgLy/QtNCw0LvRjNGI0LUg0L3Rg9C20L3QviDQvtCx0YDQsNCx0L7RgtCw0YLRjCDQtNCw0LvRjNGI0LUg0L7RiNC40LHQutC4XG4vLyB9XG5cbi8vIGNvbnN0IG5hbWU6IHN0cmluZyA9ICdWYXN5YSc7XG5cbmxldCBjOiBib29sZWFuW11cbmxldCBkOiBudW1iZXJbXVxubGV0IGU6IGJpZ2ludFtdXG5sZXQgZjogc3RyaW5nW11cbmxldCBqOiBzeW1ib2xbXVxuXG5jb25zdCBib29rID0gbmV3IEJvb2soJ0hhcnJ5IFBvdHRlcicsICdmYW50YXN5JywgOTgwKVxuY29uc29sZS5sb2coYm9vay5nZW5yZS50b1VwcGVyQ2FzZSgpLCBib29rLnByaWNlLnRvRml4ZWQoMikpXG5cbi8v0LjQvdGC0LXRgNGE0LXQudGB0YtcbmludGVyZmFjZSBJQm9vayB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGdlbnJlOiBzdHJpbmc7XG4gICAgcHJpY2U6IG51bWJlciB8IG51bGw7XG4gICAgcmV2aWV3czogW3N0cmluZywgbnVtYmVyLCBzdHJpbmddW107XG59XG5cbmNvbnN0IE5ld09iamVjdEJvb2s6IElCb29rID0ge1xuICAgIG5hbWU6ICdIYXJyeSBQb3R0ZXInLFxuICAgIGdlbnJlOiAnZmFudGFzeScsXG4gICAgcHJpY2U6IDk4MCxcbiAgICByZXZpZXdzOiBbXG4gICAgICAgIFsnVmFkaW0nLCAzLCAnbm90IGJhZCddLFxuICAgICAgICBbJ1ZhZGltJywgMywgJ25vdCBiYWQnXVxuICAgIF0sXG59XG5jb25zdCBCYWRPYmplY3RCb29rID0ge1xuICAgIG5hbWU6ICdIYXJyeSBQb3R0ZXInLFxuICAgIHJldmlld3M6IFtcbiAgICAgICAgWydWYWRpbScsIDMsICdub3QgYmFkJ10sXG4gICAgICAgIFsnVmFkaW0nLCAzLCAnbm90IGJhZCddXG4gICAgXSxcbn1cblxuY29uc3QgcHJpbnRCb29rTmFtZSA9IChib29rOiBJQm9vaykgPT4gY29uc29sZS5sb2coYm9vay5uYW1lKTtcblxucHJpbnRCb29rTmFtZShOZXdPYmplY3RCb29rKTtcbi8v0L7RiNC40LHQutCwXG4vLyBwcmludEJvb2tOYW1lKEJhZE9iamVjdEJvb2spO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1JhdGluZyhlbnRpdHk6IFJhdGluZ2FibGUpIHtcbiAgICBpZiAoZW50aXR5LnJhdGluZyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnbm90IHJhdGVkIHlldCdcbiAgICB9XG4gICAgY29uc3Qgcm91bmRlZFJhdGluZyA9IE1hdGgucm91bmQoZW50aXR5LnJhdGluZylcbiAgICBsZXQgcmF0aW5nID0gJydcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdW5kZWRSYXRpbmc7IGkrKykge1xuICAgICAgICByYXRpbmcgKz0gJ+KtkCdcbiAgICB9XG4gICAgcmV0dXJuIHJhdGluZyArIGAgKCR7ZW50aXR5LnJhdGluZy50b0ZpeGVkKDIpfSlgXG59XG4iXX0=