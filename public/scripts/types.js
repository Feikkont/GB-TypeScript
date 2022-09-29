const newDay = 'Mo';
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
export var Status;
(function (Status) {
    Status[Status["loading"] = 0] = "loading";
    Status[Status["success"] = 1] = "success";
    Status[Status["error"] = 2] = "error";
})(Status || (Status = {}));
export function getGenreName(props) {
    const genreMapping = {
        [Status.loading]: () => '<div>loading...</div>',
        [Status.success]: () => '<div>success</div>',
        [Status.error]: () => '<div>error</div>'
    };
    return genreMapping[status];
}
getGenreName({ status: Status.loading, data: ['hello'] });
