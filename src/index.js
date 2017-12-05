"use strict";


var css = require("./output.css");

var newLink = document.createElement('link');
newLink.setAttribute('href', css);
newLink.setAttribute('rel', 'stylesheet');
document.head.appendChild(newLink);

