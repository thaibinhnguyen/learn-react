import React, { Component } from "react";
import Pagination from "./common/Pagination";
import { getMovies, getMovie } from "./fakeMovieService";
import { getGenres } from "./fakeGenreService";
import PropTypes from "prop-types";
import Like from "./common/Like";
import Filtering from "./common/Filtering";
import { paginate } from "../utils/paginate";

export default class Movies extends Component {
    state = {
        movies: [],
        pageSize: 3,
        currentPage: 1,
        genres: [],
        currentGenre: "All genres",
        sorting: "none",
    };
    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }
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
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };
    handleChangeGenre = (genre) => {
        console.log(genre);
        this.setState({ currentGenre: genre });
        let movies = [...this.state.movies];
        for (let i = 0; i < movies.length; i++) {
            let movie = { ...movies[i] };
            movie.filt = false;
            movies[i] = movie;
        }
        movies.forEach((movie) => {
            if (movie.genre.includes(genre) || genre === "All genres") {
                movie.filt = true;
            }
        });
        this.setState({ movies, sorting: "none" });
    };
    handleSorting = (sorting) => {
        if (sorting === "up") {
            this.setState({ sorting: "down" });
        } else {
            this.setState({ sorting: "up" });
        }
    };
    render() {
        const {
            pageSize,
            currentPage,
            movies: allMovies,
            currentGenre,
            genres,
            sorting,
        } = this.state;
        const moviesFiltered = allMovies.filter(
            (movie) =>
                movie.genre.includes(currentGenre) ||
                currentGenre === "All genres"
        );
        const { length: count } = moviesFiltered;

        if (count === 0) return <div>There're no movies</div>;
        let movies = paginate(moviesFiltered, currentPage, pageSize);
        if (sorting === "up") {
            movies.sort();
        } else if (sorting === "down") {
            movies.sort().reverse();
        }
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Filtering
                                currentGenre={this.state.currentGenre}
                                onChangeGenre={this.handleChangeGenre}
                                genres={this.state.genres}
                            />
                        </div>
                        <div className="col-9">
                            <span>There're {count} movies</span>

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th
                                            scope="col"
                                            onClick={() =>
                                                this.handleSorting(sorting)
                                            }
                                        >
                                            Title{" "}
                                            {sorting === "up" ? (
                                                <i
                                                    className="fa fa-arrow-up"
                                                    aria-hidden="true"
                                                />
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
                                                    onLike={() =>
                                                        this.handleLike(movie)
                                                    }
                                                    liked={movie.liked}
                                                />
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() =>
                                                        this.handleDelete(movie)
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination
                                itemsCount={count}
                                pageSize={pageSize}
                                onPageChange={this.handlePageChange}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};
