import React, { Component } from "react";

class PaginationItem extends Component {
    handleChange = (id) => {
        this.props.onSelect(id);
    };
    render() {
        const { id } = this.props;
        return (
            <li
                key={id}
                className={
                    this.state.selected ? "page-item active" : "page-item"
                }
                onClick={() => this.handleChange(id)}
            >
                <a className="page-link">{id + 1}</a>
            </li>
        );
    }
}

export default PaginationItem;
