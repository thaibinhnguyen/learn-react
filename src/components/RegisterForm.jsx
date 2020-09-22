import React, { Component } from 'react';
import Form from './common/Form';

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
        email: Joi.string().email().required().label('Password')
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
