import React, { Component } from "react";
import Movies from "./components/Movies";
import Navbar from "./components/common/Navbar";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <main className="main">
                    <Movies />
                </main>
            </React.Fragment>
        );
    }
}
