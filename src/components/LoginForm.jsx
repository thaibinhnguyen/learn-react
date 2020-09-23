import React, { Component } from "react";
import Joi from 'joi';

import Form from './common/Form';

export default class LoginForm extends Form {
    // username = React.createRef();
    state = {
        data: {
            password: "",
            username: ""
        },
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    doSubmit = () => {
        console.log("created");
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    }
}
