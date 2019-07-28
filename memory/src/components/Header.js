import React from 'react';

export default function Header(props){
    return (
        <nav className='navbar white-txt purple-bkg fixed-top'>
            <span className="navbar-brand"><h2>The Faces of Daisy</h2></span>
            <span id="instructions">Click Anywhere to Start</span>
            <span id="scores">
            <span id="score">Score: </span>
            <span>|</span>
            <span id="top-score">Top Score: </span>
            </span>
        </nav>
    )
}