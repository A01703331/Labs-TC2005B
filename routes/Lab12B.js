const express = require('express');
const router = express.Router();const path = require('path');

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
        mapName: "Battle Course 1",
        mapID: "bc"
    },
    {
        mapName: "Big Donut",
        mapID: "bd"
    },
    {
        mapName: "Cookie Land",
        mapID: "cl"
    },
    {
        mapName: "Palm Shore",
        mapID: "ps"
    },
    {
        mapName: "Delfino Pier",
        mapID: "dp"
    },
    {
        mapName: "Wuhu Town",
        mapID: "wt"
    },
    {
        mapName: "Lunar Colony",
        mapID: "lc"
    },
    {
        mapName: "New York Minute B",
        mapID: "ny"
    }
];


let char_selection;
let kart_selection;
let map_selection;

router.get('/charSelect', (request, response, next) => {
    response.render(path.join(__dirname, '..', 'views', 'charSelect'), {characters: characters, from: 'battle'})
});

router.post('/kartSelect', (request, response, next) => {
    char_selection = request.body.character;
    response.render(path.join(__dirname, '..', 'views', 'kartSelect'), {karts: karts, from: 'battle'})
});

router.post('/mapSelect', (request, response, next) => {
    kart_selection = request.body.kart;
    response.render(path.join(__dirname, '..', 'views', 'mapSelect'), {maps: maps, from: 'battle'})
});

router.post('/confirm', (request, response, next) => {
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