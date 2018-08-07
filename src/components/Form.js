import React from 'react';
import guessButton from './css/Form.css'

// Displays guess button
export default function Form() {
    return (
        <form>
            <input type="text" />
            <input value="Guess" type="submit" />
        </form>
    );
}