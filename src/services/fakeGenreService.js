export const genres = [
    { name: "Action" },
    { name: "Comedy" },
    { name: "Thriller" },
    { name: "Drama" },
    { name: "Documentary" },
    { name: "Horror" },
    { name: "Musical" },
    { name: "Sci-Fi" },
];

export function getGenres() {
    return genres.filter((g) => g);
}
