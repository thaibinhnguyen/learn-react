import React, { Component } from "react";
import Like from "./common/Like";
import TableHeader from "./common/TableHeader";

export default class MoviesTable extends Component {
    columns = [
        { path: "title", label: "Title" },
        { path: "genre", label: "Genre" },
        { path: "stock", label: "Stock" },
        { path: "rate", label: "Rate" },
    ];
    render() {
        const { movies, onSorting, sorting, onLike, onDelete } = this.props;
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sorting={sorting}
                    onSorting={onSorting}
                />
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
}
