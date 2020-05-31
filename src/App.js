import React, { Component } from "react";
import Movies from "./components/Movies";
import Pagination from "./components/common/Pagination";
import { getMovie, getMovies } from "./components/fakeGenreService";

export default class App extends Component {
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
    handleLike = (movie) => {
        console.log("clicked");
        let movies = [...this.state.movies];
        const index = movie.id - 1;
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    };
    render() {
        return (
            <React.Fragment>
                <main className="main">
                    <Movies
                        movies={this.state.movies}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                    />
                </main>
                <nav>
                    <Pagination />
                </nav>
            </React.Fragment>
        );
    }
}
