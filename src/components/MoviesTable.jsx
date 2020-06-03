import React, { Component } from "react";
import TableHeader from "./common/TableHeader";
import TableBody from "./common/TableBody";
import Like from "./common/Like";

export default class MoviesTable extends Component {
    columns = [
        { path: "title", label: "Title" },
        { path: "genre", label: "Genre" },
        { path: "stock", label: "Stock" },
        { path: "rate", label: "Rate" },
        {
            key: "like",
            content: (movie) => (
                <Like
                    onLike={() => this.props.onLike(movie)}
                    liked={movie.liked}
                />
            ),
        },
        {
            key: "delete",
            content: (movie) => (
                <button
                    className="btn btn-danger"
                    onClick={() => this.props.onDelete(movie)}
                >
                    Delete
                </button>
            ),
        },
    ];
    render() {
        const { movies, onSorting, sorting } = this.props;
        return (
            <table className="table">
                <TableHeader
                    columns={this.columns}
                    sorting={sorting}
                    onSorting={onSorting}
                />
                <TableBody data={movies} columns={this.columns} />
            </table>
        );
    }
}
