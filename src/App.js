import React, { Component } from "react";
import Movies from "./components/Movies";
import Pagination from "./components/common/Pagination";
import { getMovie, getMovies } from "./components/fakeGenreService";

export default class App extends Component {
    state = {
        movies: getMovies(),
        moviesByPagination: [],
    };
    componentDidMount() {
        this.paginate(0);
    }
    handleDelete = (movie) => {
        let movieDeleted = getMovie(movie.id);
        let listMovies = this.state.movies.filter(
            (movie) => movie.id !== movieDeleted.id
        );
        let listMoviesPagination = this.state.moviesByPagination.filter(
            (movie) => movie.id !== movieDeleted.id
        );
        this.setState({
            movies: listMovies,
            moviesByPagination: listMoviesPagination,
        });
    };
    handleLike = (movie) => {
        console.log("clicked");
        let movies = [...this.state.movies];
        const index = movie.id - 1;
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    paginate = (num = 0) => {
        if (num > 0) {
            const listMoviesFiltered = this.state.movies.filter(
                (movie) =>
                    this.state.movies.indexOf(movie) <= num * 3 &&
                    this.state.movies.indexOf(movie) > (num - 1) * 3
            );
            this.setState({ moviesByPagination: listMoviesFiltered });
        } else {
            const listMoviesFiltered = this.state.movies.slice(
                0,
                (num + 1) * 3
            );
            this.setState({ moviesByPagination: listMoviesFiltered });
        }
    };
    diviseListMovies = () => {
        const x = Math.floor(this.state.movies.length / 3);
        if (this.state.movies.length - 3 * x !== 0) return x + 1;

        return x;
    };
    render() {
        return (
            <React.Fragment>
                <main className="main">
                    <Movies
                        movies={this.state.moviesByPagination}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                    />
                </main>
                <nav>
                    <Pagination
                        listMovies={this.diviseListMovies()}
                        filterMovies={this.paginate}
                    />
                </nav>
            </React.Fragment>
        );
    }
}
