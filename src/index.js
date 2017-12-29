import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {    //This is a root route(route handler), so when anybody goes there it'll give a renderer
    const store = createStore();

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log("This thing works");
    console.log("Listening to port 3000");
});
