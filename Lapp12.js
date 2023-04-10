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
const multer = require('multer');


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

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, "public/uploads");
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, file.originalname);
    },
});

const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' || 
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg' ) {
            callback(null, true);
    } else {
            callback(null, false);
    }
}

app.use(multer({ storage: fileStorage, fileFilter: fileFilter  }).single('file'));

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
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use((request, response, next) => {
    console.log('Site Accessed!');
    next();
});


app.use((request, response, next) => {
    response.status(404).send("Error 404, Site not Found");
});

app.listen(port);