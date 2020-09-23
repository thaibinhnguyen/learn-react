import React, { Component } from "react";
import Pagination from "./common/Pagination";
import { getMovies, getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import PropTypes from "prop-types";
import NavBar from "./common/Navbar";
import MoviesTable from "./MoviesTable";
import Filtering from "./common/Filtering";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
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
        // console.log(genre);
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
        if (type) {
            if (sorting.sortingState === "up") {
                const updatedSorting = {
                    sortingState: "down",
                    sortingType: type,
                };
                this.setState({ sorting: updatedSorting });
            } else {
                const updatedSorting = {
                    sortingState: "up",
                    sortingType: type,
                };
                this.setState({ sorting: updatedSorting });
            }
        }
    };
    getPageData = () => {
        const {
            pageSize,
            currentPage,
            sorting,
            currentGenre,
            movies: allMovies,
        } = this.state;
        const { sortingState, sortingType } = sorting;
        const moviesFiltered = allMovies.filter(
            (movie) =>
                movie.genre.includes(currentGenre) ||
                currentGenre === "All genres"
        );
        if (sortingState === "up") {
            moviesFiltered.sort((current, next) =>
                current[sortingType] > next[sortingType] ? 1 : -1
            );
        } else if (sortingState === "down") {
            moviesFiltered
                .sort((current, next) =>
                    current[sortingType] > next[sortingType] ? 1 : -1
                )
                .reverse();
        }
        let movies = paginate(moviesFiltered, currentPage, pageSize);
        return { totalCount: moviesFiltered.length, data: movies };
    };
    render() {
        const {
            pageSize,
            currentPage,
            currentGenre,
            genres,
            sorting,
        } = this.state;

        // const { length: count } = moviesFiltered;

        const { totalCount, data: movies } = this.getPageData();
        if (totalCount === 0) return <div>There're no movies</div>;
        return (
            <React.Fragment>
                <div className="container">
                    {/* <NavBar /> */}
                    <div className="row">
                        <div className="col-3">
                            <Filtering
                                selectedGenre={currentGenre}
                                onSelectGenre={this.handleSelectGenre}
                                genres={genres}
                            />
                        </div>
                        <div className="col-9">
                            <Link to="/movies/new" className="btn btn-primary">New movie</Link>
                            <br />
                            <span>There're {totalCount} movies</span>

                            <MoviesTable
                                movies={movies}
                                onSorting={this.handleSorting}
                                sorting={sorting}
                                onLike={this.handleLike}
                                onDelete={this.handleDelete}
                            />
                            <Pagination
                                itemsCount={totalCount}
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
