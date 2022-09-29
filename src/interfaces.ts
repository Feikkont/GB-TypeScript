// export interface IAuthor {
//     name: string;
//     age: number;
// }

export interface Ratingable {
    rating: number;
}

export interface IAuthor extends Ratingable {
    firstName: string
    lastName: string
}

// export interface User {
//     name: string;
//     age: number;
// }
//
// export interface Admin extends User {
//     rules: string[];
// }

export interface IProduct {
    price: number
    getProductDescription(): string
}
