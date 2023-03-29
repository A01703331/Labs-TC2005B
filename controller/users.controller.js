const User = require('../models/users.model')
const bcrypt = require('bcryptjs')

exports.get_login = (request, response, next) => {

    let mssg = '';

    if (request.session.mssg != '') {
        mssg = request.session.mssg;
        request.session.mssg = '';
    }

    response.render('login', {
        mssg: mssg,
        isLoggedIn: request.session.isLoggedIn || false,
        name: request.session.name || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_login = (request, response, next) => {
    User.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            console.log(rows);
            bcrypt.compare(request.body.password, rows[0].password)
            .then((doMatch) => {
                if(doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.name = rows[0].name;

                    User.fetchPerks(rows[0].username)
                    .then(([perk_query, fieldData]) => {
                        const perks = [];
                        for(let perk of perk_query) {
                            perks.push(perk.name);
                        }
                        request.session.perks = perks;
                        return request.session.save(err => {
                            response.redirect('/index/Lab1');
                        });
                    })
                    .catch((error) => {console.log(error)})
                    
                } else {
                    request.session.mssg = "Incorrect User or Password";
                    response.redirect('/login');
                }
            })
            .catch((error) => console.log(error));
        } else {
            request.session.mssg = "Incorrect User or Password";
            response.redirect('/login');
        }
    })
    .catch((error => {
        console.log(error);
    }));
};

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        isLoggedIn: request.session.isLoggedIn || false,
        name: request.session.name || '',
        csrfToken: request.csrfToken(),
    });
};

exports.post_signup = (request, response, next) => {
    const newUser = new User({
        username: request.body.username,
        name: request.body.name,
        password: request.body.password,
    });

    console.log(newUser);

    newUser.save()
    .then(([rows, fieldData]) => {
        request.session.mssg = "User registered.";

        response.redirect('/login');
    })
    .catch((error) => console.log(error));
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};