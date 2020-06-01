import React, { Component } from "react";

class Pagination extends Component {
    state = {
        items: [],
    };
    componentDidMount() {
        let items = [];

        for (let i = 0; i < this.props.listMovies; i++) {
            let item = {
                selected: false,
                id: i,
            };
            items.push(item);
        }
        this.setState({ items });
    }
    handleChange = (id) => {
        console.log(id);
        this.props.filterMovies(id);
        let { items } = this.state;
        items[id] = { ...items[id] };
        items[id].selected = true;
        console.log("select", items[id], items);
        for (let i = 0; i < items.length; i++) {
            if (i !== id) {
                console.log("result", i, id);
                items[i] = { ...items[i] };
                items[id].selected = false;
            }
        }

        this.setState({ items });
    };
    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {this.state.items.map((item) => (
                        <li
                            key={item.id}
                            className={
                                item.selected ? "page-item active" : "page-item"
                            }
                            onClick={() => this.handleChange(item.id)}
                        >
                            <a className="page-link">{item.id + 1}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Pagination;
