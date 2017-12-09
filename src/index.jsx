"use strict";
//let path = require("path");
//let css = require("../dist/CSS/app.css");
let createLinkTagInDOM = () => {
    let newLink = document.createElement('link');
    newLink.setAttribute('href', '/CSS/app.css');
    newLink.setAttribute('rel', 'stylesheet');
    document.head.appendChild(newLink);
};


createLinkTagInDOM();

//<link href="output.css" rel="stylesheet">
