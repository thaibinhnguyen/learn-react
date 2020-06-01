export const genres = [
    { name: "Action" },
    { name: "Comedy" },
    { name: "Thriller" },
];

export function getGenres() {
    return genres.filter((g) => g);
}
