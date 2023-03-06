const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const myRoutes = require('./routes/routes.js');

app.use(bodyParser.urlencoded({extended: false}))

app.use('/extra', myRoutes); //Importante: Nunca poner inclusiones después del estado 404

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); // Avanza al siguiente middleware
});

app.use((request, response, next) => {
    console.log('New Middleware!');
    next();
});

app.use('/hello', (request, response, next) => {
    response.send('Welcome New Galaxy!'); // Envia respuesta al cliente
});

app.use('/new', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.player);
    let html = '<form action="new" method="POST"><label for="player">Player name:</label><input type="text" id="player" name="player"><input type="submit" value="Send"></form>';
    response.send(html);
});

app.use((request, response, next) => {
    console.log('Newer Middleware!');
    response.status(404).send("Not welcome, that site doesn't exist!");
});

app.listen(1128);