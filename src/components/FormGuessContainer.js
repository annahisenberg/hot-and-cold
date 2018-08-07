import React from 'react';
import GuessTracker from './GuessTracker';
import Form from './Form';

// Displays the form and number of guesses the user has made so far
export default function FormGuessContainer() {
    return (
        <div>
            <Form />
            <GuessTracker />
        </div>
    )
}