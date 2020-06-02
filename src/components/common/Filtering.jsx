import React from "react";

export default function Filtering({ genres, onChangeGenre, currentGenre }) {
    return (
        <ul className="list-group">
            <li
                style={{ cursor: "pointer" }}
                onClick={() => onChangeGenre("All genres")}
                className={
                    currentGenre === "All genres"
                        ? "list-group-item active"
                        : "list-group-item"
                }
            >
                All genres
            </li>
            {genres.map((genre) => (
                <li
                    style={{ cursor: "pointer" }}
                    key={genre.name}
                    onClick={() => onChangeGenre(genre.name)}
                    className={
                        genre.name === currentGenre
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                >
                    {genre.name}
                </li>
            ))}
        </ul>
    );
}
