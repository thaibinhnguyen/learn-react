import React, { Component } from "react";

export default class LoginForm extends Component {
    // username = React.createRef();
    state = {
        account: {
            password: "",
            username: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //call the server
        const username = this.username.current.value;
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
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            autoFocus
                            name="username"
                            value={account.username}
                            onChange={this.handleChange}
                            id="username"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            name="password"
                            id="password"
                            type="text"
                            className="form-control"
                            value={account.password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
