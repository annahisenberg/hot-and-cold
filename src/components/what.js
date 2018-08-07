import React from 'react';

//Displays the "what?" lighbox which explains the game
export default function What() {
    return (
        <div>
            <h2>What do I do?</h2>
            <h3>This is a Hot or Cold Number Guessing Game. The game goes like this:</h3>
            <ol>
                <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
                <li>You need to guess until you can find the hidden secret number.</li>
                <li>You will get feedback on how close("hot") or far("cold") your guess is. </li>
            </ol>
            <p>So, are you ready?</p>
            <button>Got it!</button>
        </div>
    );
}