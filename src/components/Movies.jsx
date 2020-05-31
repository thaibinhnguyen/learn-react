import React, { Component } from "react";
import Like from "./common/Like";


export default class Movies extends Component {
    render() {
        if (this.props.movies.length === 0)
            return <div>There're no movies</div>;
        return (
            <React.Fragment>
                <span>There're {this.props.movies.length} movies</span>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rate</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map((movie) => (
                            <tr key={movie.id}>
                                <td>{movie.title}</td>
                                <td>{movie.genre}</td>
                                <td>{movie.stock}</td>
                                <td>{movie.rate}</td>
                                <td>
                                    <Like
                                        onLike={() => this.props.onLike(movie)}
                                        liked={movie.liked}
                                    />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.props.onDelete(movie)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
