const movies = [
    {
        id: 1,
        title: "Bella",
        genre: "Drama|Romance",
        stock: 21,
        rate: 11,
        liked: false,
    },
    {
        id: 2,
        title: "Exporting Raymond",
        genre: "Comedy|Documentary",
        stock: 2,
        rate: 22,
        liked: true,
    },
    {
        id: 3,
        title: "Faith Like Potatoes",
        genre: "Drama",
        stock: 63,
        rate: 73,
        liked: false,
    },
    {
        id: 4,
        title: "More Than Honey",
        genre: "Documentary",
        stock: 24,
        rate: 4,
        liked: true,
    },
    {
        id: 5,
        title: "Horror of Dracula (Dracula)",
        genre: "Horror",
        stock: 15,
        rate: 35,
        liked: false,
    },
    {
        id: 6,
        title: "Sorry, Haters",
        genre: "Drama|Thriller",
        stock: 61,
        rate: 26,
        liked: true,
    },
    {
        id: 7,
        title: "Erkan & Stefan 2",
        genre: "Comedy",
        stock: 17,
        rate: 10,
        liked: false,
    },
    {
        id: 8,
        title: "Air Guitar Nation",
        genre: "Comedy|Documentary|Musical",
        stock: 8,
        rate: 8,
        liked: true,
    },
    {
        id: 9,
        title: "Tetsuo, the Ironman (Tetsuo)",
        genre: "Action|Horror|Sci-Fi|Thriller",
        stock: 9,
        rate: 9,
        liked: true,
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id) {
    return movies.find((element) => element.id === id);
}
