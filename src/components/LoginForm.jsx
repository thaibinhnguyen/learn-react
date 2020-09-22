import React, { Component } from "react";
import Joi from 'joi';
import Input from './common/Input';
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
        console.log("submitted");
    }
    render() {
        const { data, errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username" label="Username" value={data.name} onChange={this.handleChange} error={errors.username ? errors.username : null} />
                    <Input name="password" label="Password" value={data.password} onChange={this.handleChange} error={errors.password ? errors.password : null} />
                    <button disabled={this.validate()} className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
