"use strict";
var path = require("path");

var css = require("../dist/CSS/app.css");

var newLink = document.createElement('link');
newLink.setAttribute('href', './CSS/app.css');
newLink.setAttribute('rel', 'stylesheet');
document.head.appendChild(newLink);



//<link href="output.css" rel="stylesheet">