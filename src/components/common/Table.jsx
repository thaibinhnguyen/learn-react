import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

export default function Table({ columns, sorting, onSorting, movies }) {
    return (
        <table className="table">
            <TableHeader
                columns={columns}
                sorting={sorting}
                onSorting={onSorting}
            />
            <TableBody data={movies} columns={columns} />
        </table>
    );
}
