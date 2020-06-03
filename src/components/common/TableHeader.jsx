import React, { Component } from "react";

export default class TableHeader extends Component {
    displayArrow = (sorting, type) => {
        if (sorting.sortingType === type) {
            if (sorting.sortingState === "up")
                return <i className="fa fa-arrow-up" aria-hidden="true" />;
            if (sorting.sortingState === "down")
                return <i className="fa fa-arrow-down" aria-hidden="true" />;
        }
    };
    render() {
        const { columns, onSorting, sorting } = this.props;
        return (
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            className="clickable"
                            key={column.path || column.key}
                            onClick={() => onSorting(sorting, column.path)}
                        >
                            {column.label}{" "}
                            {this.displayArrow(sorting, column.path)}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}
