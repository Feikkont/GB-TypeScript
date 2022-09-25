type GenreType = { type: string, value: string };

interface iBook {
    name: string;
    genre: GenreType;
    pageAmount: number;
}

//
// type BookType = {
//     name: string;
//     genre: string;
//     pageAmount: number;
// }

class Book {
    name = '';
    genre = null;
    pageAmount = 0;

    constructor({name, genre, pageAmount}: iBook) {
        this.name = name;
        this.genre = genre;
        this.pageAmount = pageAmount;
    }
}

const books: Book[] = [ //можно записать типизацию Array<Book>
    new Book({
        name: 'Harry Potter',
        genre: {value: 'fantasy', type: 'new'},
        pageAmount: 980
    }),
    // new Book('lord of the Ring', 'fantasy', 1001),
    // new Book('How to be productive', 'lifestyle', 500),
    // new Book('Game of Thrones', 'fantasy', 999)
]

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

function findSuitableBook(
    genreValue: string,
    pagesLimit: number,
    multipleRecommendations = true
): Book | Book[] | undefined {
    const findAlgorithm = (book: iBook) => {
        return book.genre.value === genreValue && book.pageAmount <= pagesLimit
    }
    if (multipleRecommendations) {
        return books.filter(findAlgorithm);
    } else {
        return books.find(findAlgorithm);
        // если нет то возвращает строку
    }
}

const recommendedBook = findSuitableBook('fantasy', 1000);

if (recommendedBook instanceof Book) {
    console.log(recommendedBook.name)
}


console.log(findSuitableBook('fantasy', 1000));
console.log(findSuitableBook('fantasy', 1000));
