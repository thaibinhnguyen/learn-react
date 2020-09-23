import React from "react";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Joi from "joi";
export default function MovieForm({ match, history }) {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    }
    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genre: Joi.required().label('Genre'),
        stock: Joi.number().min(0).max(100).required().label('Stock'),
        rate: Joi.number().min(0).max(10).required().label('Rate')
    }
    return (
        <div>
            <h1>Movie Form {match.params.id}</h1>
            <button
                className="btn btn-primary"
                onClick={() => history.push("/movies")}
            >
                Save
            </button>
        </div>
    );
}
