import React from "react";
import Like from "./common/Like";

export default function MoviesTable({
    movies,
    onSorting,
    sorting,
    onLike,
    onDelete,
}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" onClick={() => onSorting(sorting)}>
                        Title{" "}
                        {sorting === "up" ? (
                            <i className="fa fa-arrow-up" aria-hidden="true" />
                        ) : (
                            sorting === "down" && (
                                <i
                                    className="fa fa-arrow-down"
                                    aria-hidden="true"
                                />
                            )
                        )}
                    </th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
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
