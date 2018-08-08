import React from 'react';
import Feedback from './Feedback';
import FormGuessContainer from './FormGuessContainer';
import GuessListUL from './GuessListUL';
import './css/game.css';

//Displays a div which displays the feedback, FormGuessContainer, and GuessListUL
export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastGuess: null,
            guessHistory: [],
            feedback: null,
            numberOfGuesses: 0,
            randomNumber: Math.floor(Math.random() * 101)
        }
        this.guessNumberHandler = this.guessNumberHandler.bind(this);
        this.feedbackHandler = this.feedbackHandler.bind(this);
    }

    guessNumberHandler(guess) {
        const newHistory = this.state.guessHistory.slice();
        newHistory.push(guess);
        const newGuessCount = this.state.numberOfGuesses + 1;
        this.setState({
            guessHistory: newHistory,
            lastGuess: guess,
            numberOfGuesses: newGuessCount
        });
    }

    feedbackHandler() {
        let guess = this.state.lastGuess;
        let randomNum = this.state.randomNumber;

        if (guess === randomNum.toString()) {
            this.setState({
                feedback: "You won!"
            });
        } else if (guess > randomNum.toString()) {
            this.setState({
                feedback: "Hot"
            });
        } else {
            this.setState({
                feedback: "Cold"
            });
        }
    }

    render() {
        return (
            <section id="game">
                <Feedback hotCold={this.state.feedback} />
                <FormGuessContainer guessNumberHandler={this.guessNumberHandler} activeElement={this.feedbackHandler} numberOfGuesses={this.state.numberOfGuesses} />
                <GuessListUL list={this.state.guessHistory} />
            </section>
        );
    }
}