class Book {
    name = '';
    genre = '';
    pageAmount = 0;

    constructor(name: string, genre: string, pageAmount: number) {
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}

const books: Book[] = [ //можно записать типизацию Array<Book>
    new Book('Harry Potter', 'fantasy', 980),
    new Book('lord of the Ring', 'fantasy', 1001),
    new Book('How to be productive', 'lifestyle', 500),
    new Book('Game of Thrones', 'fantasy', 999)
]

// function findSuitableBook(genre: string, pagesLimit: number): Book | undefined {
//     return books.find((book) => {
//         return book.genre === genre && book.pageAmount <= pagesLimit
//     })
// }

function findSuitableBook(genre: string, pagesLimit: number, multipleRecommendations = true): Book | Book[] | string {
    const findAlgorithm = (book: Book) => {
        return book.genre === genre && book.pageAmount <= pagesLimit
    }
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    } else {
        return books.find(findAlgorithm) ? books.find(findAlgorithm) : 'Книга не найдена' // если книга есть, то ее возвращают
            // если нет то возвращает строку
    }
}

console.log(findSuitableBook('fantasy', 1000, false));
console.log(findSuitableBook('fantasy', 1000));

// console.log(findSuitableBook('fantasy', "1000"));
// console.log(findSuitableBook('fantasy'));
// console.log(findSuitableBook(1000, 'fantasy'));
// console.log(findSuitableBook(1000 ));
// console.log(findSuitableBook( ));