import React, { Component } from "react";
import { getMovie, getMovies } from "./fakeGenreService";

export default class Movies extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (movie) => {
    let movieDeleted = getMovie(movie.id);
    let listMovies = this.state.movies.filter(
      (movie) => movie.id !== movieDeleted.id
    );
    this.setState({
      movies: listMovies,
    });
  };
  render() {
    if (this.state.movies.length === 0) return <div>There're no movies</div>;
    return (
      <React.Fragment>
        <span>There're {this.state.movies.length} movies</span>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.stock}</td>
                <td>{movie.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDelete(movie)}
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
