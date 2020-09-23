import React, { Component } from 'react'
import Joi from 'joi';
import Form from './common/Form';
export default class NewMovie extends Form {
    state = {
        data: {
            title: "",
            genre: "",
            stock: "",
            rate: "",
        },
        errors: {}
    }
    schema = {
        title: Joi.string().required().label('Title'),
        genre: Joi.string().required().label('Genre'),
        stock: Joi.number().min(0).max(100).required().label('Stock'),
        rate: Joi.number().min(0).max(10).required().label('Rate')
    }
    doSubmit = () => {

    }
    render() {
        return (
            <div>
                <h1>New movie</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderInput('genre', 'Genre')}
                    {this.renderInput('stock', 'Stock', 'number')}
                    {this.renderInput('rate', 'Rate', 'number')}
                    {this.renderButton("Create")}
                </form>
            </div>
        )
    }
}
