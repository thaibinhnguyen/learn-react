import React, { Component } from "react";
import Movies from "./components/Movies";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <main className="main">
                    <Movies />
                </main>
            </React.Fragment>
        );
    }
}
