const express = require('express');
const path = require('path');
const Character = require('../models/character.model');
const Kart = require('../models/kart.model');
const Map = require('../models/versus_maps.model');
// const BattleMap = require('../models/battle_maps.model');

exports.getCookie = (request, response, next) => {
    const data = request.get('Cookie') || '';
    let values = cookies.split('=')[1] || 0;
}

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

exports.post_VMap = (request, response, next) => {
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
                redirect: rows[0].link,
                from: request.session.origin
            })
        })
        .catch(err => console.log(err));
};

exports.addChar = (request, response, next) => {
    const newTrack = new Character(request.body.charID, request.body.name, request.body.weight, request.body.image);
    Character.save().then(() => {
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