const express = require('express');
const router = express.Router();
const path = require('path');

const characters = [
    {
        charName: "Mario",
        charID: "mr"
    },
    {
        charName: "Luigi",
        charID: "lg"
    },
    {
        charName: "Peach",
        charID: "pc"
    },
    {
        charName: "Toad",
        charID: "kn"
    },
    {
        charName: "Yoshi",
        charID: "ys"
    },
    {
        charName: "Donkey Kong",
        charID: "dk"
    },
    {
        charName: "Wario",
        charID: "wr"
    },
    {
        charName: "Bowser",
        charID: "kp"
    }
];

const karts = [
    {
        kartName: "Pipeframe",
        kartID: "pf"
    },
    {
        kartName: "Wild Wing",
        kartID: "ww"
    },
    {
        kartName: "Blazing Eagle",
        kartID: "be"
    },
    {
        kartName: "Offroader",
        kartID: "or"
    },
    {
        kartName: "Egg 1",
        kartID: "tg"
    },
    {
        kartName: "Rambi Rider",
        kartID: "rb"
    },
    {
        kartName: "Badwagon",
        kartID: "bw"
    },
    {
        kartName: "Koopa King",
        kartID: "kk"
    }
];

const maps = [
    {
        mapName: "Mario Circuit 1",
        mapID: "mc"
    },
    {
        mapName: "Coconut Mall",
        mapID: "cm"
    },
    {
        mapName: "Singapore Speedway",
        mapID: "ss"
    },
    {
        mapName: "Toad's Factory",
        mapID: "kf"
    },
    {
        mapName: "Yoshi's Island",
        mapID: "yi"
    },
    {
        mapName: "DK Summit",
        mapID: "ds"
    },
    {
        mapName: "Bowser's Castle",
        mapID: "kc"
    },
    {
        mapName: "Rainbow Road",
        mapID: "rr"
    }
];

let char_selection;
let kart_selection;
let map_selection;

router.get('/charSelect', (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views', 'charSelect'), {characters: characters, from: 'versus'})
});

router.post('/kartSelect', (request, response, next) => {
    char_selection = request.body.character;
    response.render(path.join(__dirname, '..', 'views', 'kartSelect'), {karts: karts, from: 'versus'})
});

router.post('/mapSelect', (request, response, next) => {
    kart_selection = request.body.kart;
    response.render(path.join(__dirname, '..', 'views', 'mapSelect'), {maps: maps, from: 'versus'})
});

router.post('/confirm', (request, response, next) => {
    map_selection = request.body.map;
    let redirect;
    if(map_selection=='Mario Circuit'){
        redirect = 'cthJ4qKq5JU';
    } else if (map_selection=='Coconut Mall'){
        redirect = 'omNPg-ttAZ0';
    } else if (map_selection=='Singapore Speedway'){
        redirect = 'cT_wI8wA_Ek';
    } else if (map_selection=="Toad's Factory"){
        redirect = 'F6oDoGqSk2g';
    } else if (map_selection=="Yoshi's Island"){
        redirect = 'Ve9s6kOeKM8';
    } else if (map_selection=='DK Summit'){
        redirect = '3BYLEIXshqo';
    } else if (map_selection=="Bowser's Castle"){
        redirect = 'MDhG8I9Bhdg';
    } else if (map_selection=='Rainbow Road'){
        redirect = 'rdQeuPu-Crw';
    } else {
        redirect = 'dQw4w9WgXcQ';
    }   
    console.log(redirect);
    let race_prep = "<form action='https://www.youtube.com/watch?v=' method='GET'>";
    race_prep += '<fieldset><legend>Is this OK?</legend>';
    race_prep += "<ul>Character: " + char_selection + '</ul>';
    race_prep += "<ul>Kart: " + kart_selection + '</ul>';
    race_prep += "<ul>Track: " + map_selection + '</ul></fieldset><br>';
    race_prep += '<input type="hidden" name="v" value='+redirect+'>';
    race_prep += '<button type="submit">GO!</button>';
    race_prep += "</form><br>";
    race_prep += "<a href='/'>Back</a>";
    response.send(race_prep);
});

module.exports = router;