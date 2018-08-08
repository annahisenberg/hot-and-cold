import React from 'react';
import './css/GuessListUL.css';

// Displays the list of previous guesses made
export default function GuessListUL(props) {
    return (
        <ul id="guess-list">
            {props.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    );
}