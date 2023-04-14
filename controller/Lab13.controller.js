const express = require('express');
const path = require('path');
const Character = require('../models/character.model');
const Kart = require('../models/kart.model');
const Map = require('../models/versus_maps.model');
const Build = require('../models/build.model');
const Race = require('../models/races.model');
const { cp } = require('fs');
// const BattleMap = require('../models/battle_maps.model');


exports.get_List = (request, response, next) => {    
    const cookies = request.get('Cookie') || '';
    let query = cookies.split('=')[1] || 0;
    query++;
    //Crear una cookie
    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');
    const id = request.params.id || 0;
    Character.fetch(id).then(([rows, fieldData]) => {
        console.log(rows);
        response.render('list', { 
            character: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            sessionName: request.session.sessionName || '',
            perks: request.session.perks || [],
        });
    }).catch(error => { console.log(error);});
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

    Character.save().then(([rows, fieldData]) => {
        request.session.latestChar = newCharacter.name;
        response.status(300).redirect('/list');
    }).catch(error => console.log(error));
};

exports.lab1 = (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views', 'index'))
};

exports.post_Char = (request, response, next) => {
    request.session.origin = request.body.origin;
    Character.fetchAll().then(([rows, fieldData]) => {
        response.render(path.join(__dirname, '..', 'views', 'charSelect'), {
            characters: rows,
            from: request.session.origin
        })
    }).catch(err => console.log(err));
}

exports.post_Kart = (request, response, next) => {
    Character.fetchByName(request.body.character).then(([character, fieldData]) => {
        request.session.character = character[0];
        Kart.fetchAll().then(([rows, fieldData]) => {
                response.render(path.join(__dirname, '..', 'views', 'kartSelect'), {
                    karts: rows,
                    from: request.session.origin
                })
            }).catch(err => console.log(err));
    }).catch(err => console.log(err));
        
}

exports.get_VMaps = (request, response, next) => {
    Map.fetchCupTracks(request.params.cupSelection)
        .then(([rows, fieldData]) => {
            response.status(200).json({maps: rows[0]})
        }).catch(err => {console.log(err);
            response.status(500).json({message: "Internal Server Error"});
        });
}

exports.post_Cups = (request, response, next) => {
    Kart.fetchByName(request.body.kart).then(([kart, fieldData]) => {
        request.session.kart = kart[0];
        Map.fetchCups().then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'cupSelect'), {
                cups: rows,
                from: request.session.origin
            })
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}

exports.post_BMap = (request, response, next) => {
    Kart.fetchByName(request.body.kart).then(([kart, fieldData]) => {
        request.session.kart = kart[0];
        Map.fetchBattle().then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'mapSelect'), {
                maps: rows,
                from: request.session.origin
            })
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
};

exports.post_race =  (request, response, next) => {
    request.session.map = request.body.map;
    let bldID = 0
    Build.countBuilds().then(([amnt, fieldData]) => {
        Build.exists(request.session.character, request.session.kart).then(([build, fieldData]) => {
            let control = 0;
            if (!build[0]){
                const bld = new Build(request.session.character, request.session.kart);
                bld.save()
                bldID = amnt[0].amount+1;
            }  else {        
                bldID = build[0].buildID;
                Build.addUseCount(bldID);
                control = 1;
            }
            request.session.playerBld = bldID;
            var blds = [];
            var used = [];
            for (let i=0;i<(amnt[0].amount-control)&&i<12;i++){
                let j = Math.floor(Math.random() * amnt[0].amount)+1;
                while(used.includes(j) || j == bldID) {
                    j = Math.floor(Math.random() * amnt[0].amount)+1;
                }
                used.push(j);
                Build.fetchBuild(j).then(([cpubld, fieldData]) => {
                    cbld = [cpubld[0].character,cpubld[0].kart];
                    blds.push(cbld);
                }).catch(err => console.log(err));
            }
            setTimeout(() => {
                request.session.cpu = used;
                response.render(path.join(__dirname, '..', 'views', 'racers'), {
                    character: request.session.character,
                    kart: request.session.kart.name,
                    from: request.session.origin,
                    racers: blds
                })
            },"2000")
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
};

exports.post_confirm =  (request, response, next) => {
    Race.countRaces().then(([ramnt, fieldData]) => {
        let raceNum = 0;
        console.log(ramnt[0].raceAmount);
        if (!ramnt[0]){
            raceNum = 1;
        } else {
            raceNum = ramnt[0].raceAmount+1;
        }

        const playerEntry = new Race(raceNum, request.session.playerBld);
        playerEntry.save();

        for(i=0;i<request.session.cpu.length;i++){
            let cpuEntry = new Race(raceNum, request.session.cpu[i]);
            cpuEntry.save();
        }
        Map.get_Link(request.session.map).then(([rows, fieldData]) => {
            response.render(path.join(__dirname, '..', 'views', 'confirm'), {
                character: request.session.character.name,
                kart: request.session.kart.name,
                map: request.session.map,
                redirect: rows[0][0].link,
                from: request.session.origin
            })
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
};

exports.postFile = (request, response, next) => {
    response.redirect('/index/Lab1');
};

exports.addChar = (request, response, next) => {
    const newChar = new Character(request.body.name, request.body.weight, request.body.image);
    newChar.save().then(() => {
        response.redirect('/index/Lab1');
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