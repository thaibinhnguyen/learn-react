import React from "react";

export default function Filtering({
    genres,
    onSelectGenre,
    selectedGenre,
    textProperty,
}) {
    return (
        <ul className="list-group">
            <li
                style={{ cursor: "pointer" }}
                onClick={() => onSelectGenre("All genres")}
                className={
                    selectedGenre === "All genres"
                        ? "list-group-item active"
                        : "list-group-item"
                }
            >
                All genres
            </li>
            {genres.map((genre, index) => (
                <li
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={() => onSelectGenre(genre[textProperty])}
                    className={
                        genre[textProperty] === selectedGenre
                            ? "list-group-item active"
                            : "list-group-item"
                    }
                >
                    {genre[textProperty]}
                </li>
            ))}
        </ul>
    );
}
Filtering.defaultProps = {
    textProperty: "name",
};
