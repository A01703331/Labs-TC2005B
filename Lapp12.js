const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const path = require('path');
const csrf = require('csurf');
const userRoutes = require('./routes/Lab18.js');
const versusRoutes = require('./routes/Lab12A.js');
const battleRoutes = require('./routes/Lab12B.js');
const otherRoutes = require('./routes/Lab12C.js');
const isAuth = require('./util/is-auth');
const port = 1128;

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
      counter += 1;
    }
    return result;
}

app.use(session({
    secret: makeid(100),
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const csrfProtection = csrf();
app.use(csrfProtection);

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

app.use('/', userRoutes);
app.use('/versus', versusRoutes);
app.use('/battle', battleRoutes);
app.use('/index', otherRoutes);

app.use((request, response, next) => {
    console.log('Site Accessed!');
    next();
});


app.use((request, response, next) => {
    response.status(404).send("Error 404, Site not Found");
});

app.listen(port);