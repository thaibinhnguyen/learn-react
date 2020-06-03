import React from "react";
import Like from "./common/Like";

export default function MoviesTable({
    movies,
    onSorting,
    sorting,
    onLike,
    onDelete,
}) {
    let displayArrow = (sorting, type) => {
        if (sorting.sortingType === type) {
            if (sorting.sortingState === "up")
                return <i className="fa fa-arrow-up" aria-hidden="true" />;
            if (sorting.sortingState === "down")
                return <i className="fa fa-arrow-down" aria-hidden="true" />;
        }
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" onClick={() => onSorting(sorting, "title")}>
                        Title {displayArrow(sorting, "title")}
                    </th>
                    <th scope="col" onClick={() => onSorting(sorting, "genre")}>
                        Genre {displayArrow(sorting, "genre")}
                    </th>
                    <th scope="col" onClick={() => onSorting(sorting, "stock")}>
                        Stock {displayArrow(sorting, "stock")}
                    </th>
                    <th scope="col" onClick={() => onSorting(sorting, "rate")}>
                        Rate {displayArrow(sorting, "rate")}
                    </th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie) => (
                    <tr key={movie.id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre}</td>
                        <td>{movie.stock}</td>
                        <td>{movie.rate}</td>
                        <td>
                            <Like
                                onLike={() => onLike(movie)}
                                liked={movie.liked}
                            />
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => onDelete(movie)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
