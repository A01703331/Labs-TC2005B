const express = require('express');
const path = require('path');
const Character = require('../models/character.model');
const Kart = require('../models/kart.model');
const Map = require('../models/versus_maps.model');
// const BattleMap = require('../models/battle_maps.model');


exports.get_List = (request, response, next) => {    

    const cookies = request.get('Cookie') || '';

    let query = cookies.split('=')[1] || 0;

    query++;

    //Crear una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    const id = request.params.id || 0;

    Character.fetch(id)
    .then(([rows, fieldData]) => {
        console.log(rows);
        //console.log(fieldData);

        response.render('list', { 
            character: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            sessionName: request.session.sessionName || '',
            perks: request.session.perks || [],
        });
    })
    .catch(error => {
        console.log(error);
    });

};

exports.get_New = (request, response, next) => {
    response.render('new', {
        isLoggedIn: request.session.isLoggedIn || false,
        sessionName: request.session.sessionName || '',
        csrfToken: request.csrfToken(), 
    });
};

exports.post_nuevo = (request, response, next) => {
    const newCharacter = new Character({
        name: request.body.newName,
        weightClass: request.body.weightClass,
        image: request.body.icon,
    });

    Character.save()
    .then(([rows, fieldData]) => {
        request.session.latestChar = newCharacter.name;

        response.status(300).redirect('/list');
    })
    .catch(error => console.log(error));

};

exports.lab1 = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views', 'index'))
};

exports.post_Char = (request, response, next) => {
    request.session.origin = request.body.origin;
    Character.fetchAll()
        .then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'charSelect'), {
                characters: rows,
                from: request.session.origin
            })
        })
        .catch(err => console.log(err));
}

exports.post_Kart = (request, response, next) => {
    request.session.character = request.body.character;
    Kart.fetchAll()
        .then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'kartSelect'), {
                karts: rows,
                from: request.session.origin
            })
        })
        .catch(err => console.log(err));
}

exports.post_VMap1 = (request, response, next) => {
    request.session.kart = request.body.kart;
    Map.fetchVersus()
        .then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'mapSelect'), {
                maps: rows,
                from: request.session.origin
            })
        })
        .catch(err => console.log(err));
}

exports.post_VMap2 = (request, response, next) => {
    request.session.kart = request.body.kart;
    Map.fetchCups()
        .then(([rows, fieldData]) => {
            //response.status(200).json({cups: rows});
            response.render(path.join(__dirname, '..', 'views', 'cupSelect'), {
                cups: rows,
                from: request.session.origin
            })
        })
        .catch(err => console.log(err));
}

exports.post_BMap = (request, response, next) => {
    request.session.kart = request.body.kart;
    Map.fetchBattle()
        .then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'mapSelect'), {
                maps: rows,
                from: request.session.origin
            })
        })
        .catch(err => console.log(err));
};

exports.post_confirm =  (request, response, next) => {
    request.session.map = request.body.map;
    Map.get_Link(request.session.map)
        .then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'confirm'), {
                character: request.session.character,
                kart: request.session.kart,
                map: request.session.map,
                redirect: rows[0][0].link,
                from: request.session.origin
            })
        })
        .catch(err => console.log(err));
};

exports.addChar = (request, response, next) => {
    const newChar = new Character(request.body.name, request.body.weight, request.body.image);
    Character.save(request.body.weight).then(() => {
        response.redirect('/Lab1');
    }).catch(err => console.log(err));
};

// exports.post_Bconfirm = (request, response, next) => {
//     request.session.map = request.body.map;
//     let redirect;
//     if(request.session.map=='Battle Course 1'){
//         redirect = 'n8qaa3mNtlk';
//     } else if (request.session.map=='Big Donut'){
//         redirect = 'pnAn9rYsas0';
//     } else if (request.session.map=='Cookie Land'){
//         redirect = 'p2oCxHIgTfU';
//     } else if (request.session.map=="Palm Shore"){
//         redirect = '2-UKBHWhHtY';
//     } else if (request.session.map=="Delfino Pier"){
//         redirect = 'TWZGyZMT3yc';
//     } else if (request.session.map=='Wuhu Town'){
//         redirect = '-kjO7CcX0_s';
//     } else if (request.session.map=="Lunar Colony"){
//         redirect = 'Ty7NbPsIrq0';
//     } else if (request.session.map=='New York Minute B'){
//         redirect = 'WPdM3ZQQNKI';
//     } else {
//         redirect = '8kN1IULIq-M';
//     response.render(path.join(__dirname, '..', 'views', 'confirm'), {character: request.session.character, kart: request.session.kart, map: request.session.map, link: redirect})
// };