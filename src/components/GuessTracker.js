import React from 'react';
import './css/GuessTracker.css';

// Displays the # of guesses the user has done so far
export default function GuessTracker(props) {
    return <p id="guess-tracker-p">Guess #<span id="count">{props.hasValue}</span> !</p>
}