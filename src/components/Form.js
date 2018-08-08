import React from 'react';
import './css/Form.css'

// Displays guess button
export default function Form(props) {
    return (
        <form onSubmit={props.onSubmit} >
            <input type="text" onChange={props.onChange} maxLength="2" onClick={props.onClick} />
            <input value="Guess" type="submit" />
        </form>
    );
}   