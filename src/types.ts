
type Id = number | string
type WeekDay = 'Mo' | 'Tu' | 'We' | 'Thu' | 'Fr' | 'Sa' | 'Su'
type WeekDayNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6
type MonthNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
type Direction = 'back' | 'forward'
type YesNo = boolean | 0 | 1

const newDay = 'Mo'

// export enum Genre {
//     Fantasy,
//     Adventure,
//     Horror
// }
//индексы можно переопределить
// export enum Genre {
//     Fantasy = 100,
//     Adventure = 105,
//     Horror = 109
// }
// const horror = Genre.Horror


// export enum Status {
//     loading,
//     success,
//     error
// }
//
// export function getGenreName(props: {status: Status, data: string[]}) {
//     const genreMapping = {
//         [Status.loading]: () =>'<div>loading...</div>',
//         [Status.success]: (data) => `<div>success ${data[0]}</div>`,
//         [Status.error]: () => '<div>error</div>'
//     }
//     return genreMapping[props.status](props.data)
// }
//
// getGenreName({status: Status.loading, data:['hello']})
