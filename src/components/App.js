//The entire app
import React from 'react';
import Header from './Header';
import Game from './game';
import './css/App.css';

export default function App() {
    return (
        <div id="body">
            <Header />
            <Game />
        </div>
    );
}