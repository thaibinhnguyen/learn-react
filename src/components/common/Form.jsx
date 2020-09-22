import React, { Component } from 'react'
import Joi from 'joi';
export default class Form extends Component {
    state = {
        data: {},
        errors: {}
    }
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.object(this.schema).validate(this.state.data, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }
        return errors
    }
    validateProperty = ({ name, value }) => {
        // computed property
        const obj = { [name]: value };
        const schema = Joi.object({ [name]: this.schema[name] });
        const { error } = schema.validate(obj);
        if (!error) return null;
        return error.details[0].message;
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //call the server
        // const username = this.username.current.value;
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit()
    };
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];
        const data = { ...this.state.data };
        data[input.name] = input.value;
        this.setState({ data, errors })
    }
}
