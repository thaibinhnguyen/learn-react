import React, { Component } from "react";

export default class LoginForm extends Component {
    username = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        //call the server
        const username = this.username.current.value;
        console.log("submitted");
    };
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            autoFocus
                            ref={this.username}
                            id="username"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="text"
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}
