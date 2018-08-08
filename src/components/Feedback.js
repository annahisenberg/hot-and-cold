import React from 'react';
import './css/Feedback.css';

//Displays a div which says if guess is either hot or cold
export default function Feedback(props) {
    return <h2 id="feedback-h2">{props.hotCold}</h2>
}