const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const versusRoutes = require('./routes/Lab11A.js');
const battleRoutes = require('./routes/Lab11B.js');
app.use(bodyParser.urlencoded({extended: false}))

const port=1128;

app.use('/versus', versusRoutes);
app.use('/battle', battleRoutes);


//Middleware
app.use((request, response, next) => {
    console.log('Site Accessed!');
    response.setHeader("Content-Type", "text/html");
    next();
});

app.use('/home', (request, response, next) => {
    response.send('Welcome to Mario Kart!');
});

app.use((request, response, next) => {
    response.status(404).send("Not welcome, that site doesn't exist!");
});

app.listen(port);