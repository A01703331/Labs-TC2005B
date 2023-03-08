const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const versusRoutes = require('./routes/Lab12A.js');
const battleRoutes = require('./routes/Lab12B.js');
const labRoutes = require('./routes/Lab12C.js');
const port = 1128;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}))


app.use('/versus', versusRoutes);
app.use('/battle', battleRoutes);
app.use('/index', labRoutes);

app.use((request, response, next) => {
    console.log('Site Accessed!');
    next();
});


app.use((request, response, next) => {
    response.status(404).send("Error 404, Site not Found");
});

app.listen(port);