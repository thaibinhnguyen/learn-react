import React, { Component } from 'react';
import Form from './common/Form';
import Joi from 'joi';

export default class RegisterForm extends Form {
    state = {
        data: {
            password: "",
            username: "",
            email: ""
        },
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
        email: Joi.string().email().required().label('Email')
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
