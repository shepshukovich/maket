"use strict";

//let css = require("../dist/CSS/app.css");

import React from 'react';
import ReactDOM from 'react-dom';

let createLinkTagInDOM = () => {
    let newLink = document.createElement('link');
    newLink.setAttribute('href', '/CSS/app.css');
    newLink.setAttribute('rel', 'stylesheet');
    document.head.appendChild(newLink);
};

let timeIn = () => {
    const element = (
        <div>
            <h1>Текущее время в Минске:</h1>
            <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
};


createLinkTagInDOM();

setInterval(timeIn, 1000);



//<link href="output.css" rel="stylesheet">

