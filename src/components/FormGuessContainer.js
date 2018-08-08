import React from 'react';
import GuessTracker from './GuessTracker';
import Form from './Form';

// Displays the form and number of guesses the user has made so far
export default class FormGuessContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.guessNumberHandler(this.state.value);
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} value={this.state.value} onChange={this.handleChange} onClick={this.props.activeElement} />
                <GuessTracker hasValue={this.props.numberOfGuesses} />
            </div >
        )
    }
}