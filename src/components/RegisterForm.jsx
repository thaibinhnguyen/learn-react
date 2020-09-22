import React, { Component } from 'react';
import Form from './common/Form';
import Joi from 'joi';

export default class RegisterForm extends Form {
    state = {
        data: {
            password: "",
            name: "",
            email: ""
        },
        errors: {}
    }
    schema = {
        name: Joi.string().min(3).required().label('Name'),
        password: Joi.string().min(5).required().label('Password'),
        email: Joi.string().email({tlds: false}).required().label('Email')
    }
    doSubmit = () => {
        console.log('Registered');
    }
    render() {
        return (
            <div>
            <h1>Register</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('email', 'Email')}
                {this.renderInput('name', 'Name')}
                {this.renderInput('password', 'Password', 'password')}
                {this.renderButton("Register")}
            </form>
        </div>
        )
    }
}
