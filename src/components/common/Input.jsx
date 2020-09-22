import React from 'react'
//...rest technique
export default function Input({ name, label, error, ...rest }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                autoFocus
                name={name}
                id={name}
                {...rest}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}
