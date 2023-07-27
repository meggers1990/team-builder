import React from 'react';

const Form = (props) => {
    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label>Name
                <input
                    placeholder="Enter your name here!"
                    value={Values.name}
                    name="name"
                    onchange={handleChange}
                />
            </label>
            <label>Email
                <input
                    placeholder="Enter your email here!"
                    value={Values.name}
                    name="email"
                    onchange={handleChange}
                />
            </label>
            <label>Role
                <input
                    placeholder="Enter your role here!"
                    value={Values.name}
                    name="role"
                    onchange={handleChange}
                />
            </label>
            <input type="submit" value="Create you team!" />
        </Form>
    )
}
export default Form;