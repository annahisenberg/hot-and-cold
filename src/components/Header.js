import React from 'react';
import Nav from './Nav';
import './css/header.css';

//Displays the header
export default function Header() {
    return (
        <header>
            <Nav />
            <h1 id="game-title-h1">Hot or Cold</h1>
        </header>
    )
}