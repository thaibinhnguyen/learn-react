import React from 'react'

export default function Input({ name, label, value, onChange }) {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                autoFocus
                name={name}
                value={value}
                onChange={onChange}
                id={name}
                type="text"
                className="form-control"
            />
        </div>
    )
}
