import React from 'react';
import Nav from './Nav';
import './css/header.css';

//Displays the header
export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    newGameHandler() {

    }

    render() {
        return (
            <header>
                <Nav onClick={this.newGameHandler} />
                <h1 id="game-title-h1">Hot or Cold</h1>
            </header>
        );
    }
}