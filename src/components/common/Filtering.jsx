import React from "react";

export default function Filtering({
    genres,
    onChangeGenre,
    currentGenre,
    textProperty,
}) {
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
            {genres.map((genre, index) => (
                <li
                    style={{ cursor: "pointer" }}
                    key={index}
                    onClick={() => onChangeGenre(genre[textProperty])}
                    className={
                        genre[textProperty] === currentGenre
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
