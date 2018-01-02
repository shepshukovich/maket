"use strict";
// This code actually make a boot up process
// import ReduxThunk from 'redux-thunk';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';                        //async action creators
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import {renderRoutes} from 'react-router-config';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk.withExtraArgument(axiosInstance)));

console.log("Hey yo!");
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>
    , document.querySelector('#root'));




//Below is old stuff

//import { createStore } from 'redux';
//const store = createStore();

// let app = express();
// app.use(express.static('public'));

/*class Leftcolumn extends React.Component {
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
*/

//<link href="output.css" rel="stylesheet">
