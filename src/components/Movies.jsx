import React, { Component } from "react";
import Pagination from "./common/Pagination";
import { getMovies, getMovie } from "./fakeMovieService";
import { getGenres } from "./fakeGenreService";
import PropTypes from "prop-types";

import MoviesTable from "./MoviesTable";
import Filtering from "./common/Filtering";
import { paginate } from "../utils/paginate";

export default class Movies extends Component {
    state = {
        movies: [],
        pageSize: 3,
        currentPage: 1,
        genres: [],
        currentGenre: "All genres",
        sorting: { sortingState: "none", sortingType: null },
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
    handleSelectGenre = (genre) => {
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
    handleSorting = (sorting, type) => {
        if (sorting.sortingState === "up") {
            const updatedSorting = { sortingState: "down", sortingType: type };
            this.setState({ sorting: updatedSorting });
        } else {
            const updatedSorting = { sortingState: "up", sortingType: type };
            this.setState({ sorting: updatedSorting });
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
        const { sortingState, sortingType } = sorting;
        if (sortingState === "up") {
            moviesFiltered.sort((current, next) =>
                current[sortingType] > next[sortingType] ? 1 : -1
            );
            console.log(moviesFiltered);
        } else if (sortingState === "down") {
            moviesFiltered
                .sort((current, next) =>
                    current[sortingType] > next[sortingType] ? 1 : -1
                )
                .reverse();
            console.log("reverse", moviesFiltered);
        }
        let movies = paginate(moviesFiltered, currentPage, pageSize);

        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Filtering
                                selectedGenre={currentGenre}
                                onSelectGenre={this.handleSelectGenre}
                                genres={genres}
                            />
                        </div>
                        <div className="col-9">
                            <span>There're {count} movies</span>

                            <MoviesTable
                                movies={movies}
                                onSorting={this.handleSorting}
                                sorting={sorting}
                                onLike={this.handleLike}
                                onDelete={this.handleDelete}
                            />
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
