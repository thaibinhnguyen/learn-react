import React, { Component } from "react";
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
    validate = () => {
        const errors = {};
        const { account } = this.state;
        if (account.username.trim() === '') {
            errors.username = 'Username is required';
        }
        if (account.password.trim() === '') {
            errors.password = 'Password is required';
        }
        return Object.keys(errors).length === 0 ? null : errors;
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
        if (name === 'username') {
            if (value.trim() === '') return 'Username is required';
        }
        if (name === 'password') {
            if (value.trim() === '') return 'Password is required';
        }
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
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
