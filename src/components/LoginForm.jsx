import React, { Component } from "react";
import Joi from 'joi'
import Input from './common/Input';

export default class LoginForm extends Component {
    // username = React.createRef();
    state = {
        account: {
            password: "",
            username: ""
        },
        errors: {}
    }
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.object(this.schema).validate(this.state.account, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //call the server
        // const username = this.username.current.value;
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        console.log("submitted");
    };
    validateProperty = ({ name, value }) => {
        // computed property
        const obj = { [name]: value };
        const schema = Joi.object({ [name]: this.schema[name] });
        const { error } = schema.validate(obj);
        if (!error) return null;
        return error.details[0].message;
    }
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account, errors })
    }
    render() {
        const { account, errors } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username" label="Username" value={account.name} onChange={this.handleChange} error={errors.username ? errors.username : null} />
                    <Input name="password" label="Password" value={account.password} onChange={this.handleChange} error={errors.password ? errors.password : null} />
                    <button disabled={this.validate()} className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
