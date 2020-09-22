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
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //call the server
        // const username = this.username.current.value;
        const errors = this.validate();
        this.setState({ errors });
        if (errors) return;
        console.log("submitted");
    };
    handleChange = ({ currentTarget: input }) => {
        const account = { ...this.state.account };
        account[input.name] = input.value;
        this.setState({ account })
    }
    render() {
        const { account } = this.state;
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input name="username" label="Username" value={account.name} onChange={this.handleChange} />
                    <Input name="password" label="Password" value={account.password} onChange={this.handleChange} />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
