const express = require('express');
const path = require('path');
const Character = require('../models/character.model');
const Kart = require('../models/kart.model');
const VersusMap = require('../models/versus_maps.model');
const BattleMap = require('../models/battle_maps.model');

let char_selection;
let kart_selection;
let map_selection;

exports.get_VChar = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views', 'charSelect'), {characters: Character.fetchAll(), from: 'versus'})
};

exports.get_VKart = (request, response, next) => {
    char_selection = request.body.character;
    response.render(path.join(__dirname, '..', 'views', 'kartSelect'), {karts: Kart.fetchAll(), from: 'versus'})
}

exports.get_VMap = (request, response, next) => {
    kart_selection = request.body.kart;
    response.render(path.join(__dirname, '..', 'views', 'mapSelect'), {maps: VersusMap.fetchAll(), from: 'versus'})
};

exports.get_BChar = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views', 'charSelect'), {characters: Character.fetchAll(), from: 'battle'})
};

exports.get_BKart = (request, response, next) => {
    char_selection = request.body.character;
    response.render(path.join(__dirname, '..', 'views', 'kartSelect'), {karts: Kart.fetchAll(), from: 'battle'})
}

exports.get_BMap = (request, response, next) => {
    kart_selection = request.body.kart;
    response.render(path.join(__dirname, '..', 'views', 'mapSelect'), {maps: BattleMap.fetchAll(), from: 'battle'})
};

exports.Vconfirm =  (request, response, next) => {
    map_selection = request.body.map;
    let redirect;
    if(map_selection=='Mario Circuit'){
        redirect = '-HaMsPMRlA8';
    } else if (map_selection=='Coconut Mall'){
        redirect = 'omNPg-ttAZ0';
    } else if (map_selection=='Singapore Speedway'){
        redirect = '-JfhBus8qvU';
    } else if (map_selection=="Toad's Factory"){
        redirect = 'F6oDoGqSk2g';
    } else if (map_selection=="Yoshi's Island"){
        redirect = 'ev9ubsGxbR0';
    } else if (map_selection=='DK Summit'){
        redirect = 'HL9RN8VFojY';
    } else if (map_selection=="Bowser's Castle"){
        redirect = 'MDhG8I9Bhdg';
    } else if (map_selection=='Rainbow Road'){
        redirect = 'rdQeuPu-Crw';
    } else {
        redirect = 'dQw4w9WgXcQ';
    }
    response.render(path.join(__dirname, '..', 'views', 'confirm'), {character: char_selection, kart: kart_selection, map: map_selection, link: redirect, from: 'versus'})
};

exports.Bconfirm = (request, response, next) => {
    map_selection = request.body.map;
    let redirect;
    if(map_selection=='Battle Course 1'){
        redirect = 'n8qaa3mNtlk';
    } else if (map_selection=='Big Donut'){
        redirect = 'pnAn9rYsas0';
    } else if (map_selection=='Cookie Land'){
        redirect = 'p2oCxHIgTfU';
    } else if (map_selection=="Palm Shore"){
        redirect = '2-UKBHWhHtY';
    } else if (map_selection=="Delfino Pier"){
        redirect = 'TWZGyZMT3yc';
    } else if (map_selection=='Wuhu Town'){
        redirect = '-kjO7CcX0_s';
    } else if (map_selection=="Lunar Colony"){
        redirect = 'Ty7NbPsIrq0';
    } else if (map_selection=='New York Minute B'){
        redirect = 'WPdM3ZQQNKI';
    } else {
        redirect = '8kN1IULIq-M';
    }
    response.render(path.join(__dirname, '..', 'views', 'confirm'), {character: char_selection, kart: kart_selection, map: map_selection, link: redirect, from: 'battle'})
};