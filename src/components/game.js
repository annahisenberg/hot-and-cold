import React from 'react';
import Feedback from './Feedback';
import FormGuessContainer from './FormGuessContainer';
import GuessListUL from './GuessListUL';
import './css/game.css';

//Displays a div which displays the feedback, FormGuessContainer, and GuessListUL
export default function Game() {
    return (
        <section id="game">
            <Feedback />
            <FormGuessContainer />
            <GuessListUL />
        </section>
    );
}