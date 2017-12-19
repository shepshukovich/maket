"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

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
