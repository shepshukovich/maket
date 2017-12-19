"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

class Leftcolumn extends React.Component {
    render() {
        return (
            <li className="sidebar">
                Левая колонка
            </li>
        );
    }
}
const placeWeWantToPutComponent = document.getElementById('qwerty');

class Middlecolumn extends React.Component {
    render() {
        return (
            <li className="article">
                Текст...
            </li>
        );
    }
}

class Rightcolumn extends React.Component {
    render() {
        return (
            <div className="flex-container">
                <Leftcolumn />
                <Middlecolumn />
                <li className="aside">
                    Правая колонка
                </li>
            </div>
        );
    }
}
ReactDOM.render(<Rightcolumn />, placeWeWantToPutComponent);


let createLinkTagInDOM = () => {
    const newLink = (
        <link href="/CSS/app.css" rel="stylesheet">
        </link>
    );
    ReactDOM.render(newLink, document.getElementById('head'));
};

let timeInDiv = () => {
    const element = (
        <div>
            <h1>Время в Минске: {new Date().toLocaleTimeString()}</h1>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
};

createLinkTagInDOM();
setInterval(timeInDiv, 1000);


//<link href="output.css" rel="stylesheet">
