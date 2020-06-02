const movies = [
    {
        id: 1,
        title: "Bella",
        genre: "Drama|Romance",
        stock: 1,
        rate: 1,
        liked: false,
    },
    {
        id: 2,
        title: "Exporting Raymond",
        genre: "Comedy|Documentary",
        stock: 2,
        rate: 2,
        liked: true,
    },
    {
        id: 3,
        title: "Faith Like Potatoes",
        genre: "Drama",
        stock: 3,
        rate: 3,
        liked: false,
    },
    {
        id: 4,
        title: "More Than Honey",
        genre: "Documentary",
        stock: 4,
        rate: 4,
        liked: true,
    },
    {
        id: 5,
        title: "Horror of Dracula (Dracula)",
        genre: "Horror",
        stock: 5,
        rate: 5,
        liked: false,
    },
    {
        id: 6,
        title: "Sorry, Haters",
        genre: "Drama|Thriller",
        stock: 6,
        rate: 6,
        liked: true,
    },
    {
        id: 7,
        title: "Erkan & Stefan 2",
        genre: "Comedy",
        stock: 7,
        rate: 7,
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