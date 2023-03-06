const express = require('express');
const router = express.Router();


let char_selection;
let kart_selection;
let map_selection;

router.get('/charSelect', (request, response, next) => {
    let char = "<form action='/battle/kartSelect' method='POST'>";
    char += "<fieldset><legend>Select your player:</legend>";
    char += "<div><input type='radio' id='mr' name='character' value='Mario'>";
    char += "<label for='mr'>Mario</label></div>";
    char += "<div><input type='radio' id='lg' name='character' value='Luigi'>";
    char += "<label for='lg'>Luigi</label></div>";
    char += "<div><input type='radio' id='pc' name='character' value='Peach'>";
    char += "<label for='pc'>Peach</label></div>";
    char += "<div><input type='radio' id='kn' name='character' value='Toad'>";
    char += "<label for='kn'>Toad</label></div>";
    char += "<div><input type='radio' id='ys' name='character' value='Yoshi'>";
    char += "<label for='ys'>Yoshi</label></div>";
    char += "<div><input type='radio' id='dk' name='character' value='Donkey Kong'>";
    char += "<label for='dk'>Donkey Kong</label></div>";
    char += "<div><input type='radio' id='wr' name='character' value='Wario'>";
    char += "<label for='wr'>Wario</label></div>";
    char += "<div><input type='radio' id='kp' name='character' value='Bowser'>";
    char += "<label for='kp'>Bowser</label></div></fieldset><br>";
    char += "<input type='submit' value='OK!'>";
    char += "</form>";
    response.send(char);
});

router.post('/kartSelect', (request, response, next) => {
    char_selection = request.body.character;
    let karts = "<form action='/battle/mapSelect' method='POST'>";
    karts += "<fieldset><legend>Select your kart:</legend>";
    karts += "<div><input type='radio' id='pf' name='kart' value='Pipeframe'>";
    karts += "<label for='pf'>Pipeframe</label></div>";
    karts += "<div><input type='radio' id='ww' name='kart' value='Wild Wing'>";
    karts += "<label for='ww'>Wild Wing</label></div>";
    karts += "<div><input type='radio' id='be' name='kart' value='Blazing Eagle'>";
    karts += "<label for='be'>Blazing Eagle</label></div>";
    karts += "<div><input type='radio' id='or' name='kart' value='Offroader'>";
    karts += "<label for='or'>Offroader</label></div>";
    karts += "<div><input type='radio' id='tg' name='kart' value='Egg 1'>";
    karts += "<label for='tg'>Egg 1</label></div>";
    karts += "<div><input type='radio' id='rb' name='kart' value='Rambi Rider'>";
    karts += "<label for='rb'>Rambi Rider</label></div>";
    karts += "<div><input type='radio' id='bw' name='kart' value='Badwagon'>";
    karts += "<label for='bw'>Badwagon</label></div>";
    karts += "<div><input type='radio' id='kk' name='kart' value='Koopa King'>";
    karts += "<label for='kk'>Koopa King</label></div></fieldset><br>";
    karts += "<input type='submit' value='OK!'>";
    karts += "</form>";
    response.send(karts);
});

router.post('/mapSelect', (request, response, next) => {
    kart_selection = request.body.kart;
    let maps = "<form action='/battle/confirm' method='POST'>";
    maps += "<fieldset><legend>Select map:</legend>";
    maps += "<div><input type='radio' id='bc' name='map' value='Battle Course 1'>";
    maps += "<label for='bc'>Battle Course 1</label></div>";
    maps += "<div><input type='radio' id='bd' name='map' value='Big Donut'>";
    maps += "<label for='bd'>Big Donut</label></div>";
    maps += "<div><input type='radio' id='cl' name='map' value='Cookie Land'>";
    maps += "<label for='cl'>Cookie Land</label></div>";
    maps += "<div><input type='radio' id='ps' name='map' value='Palm Shore>";
    maps += "<label for='ps'>Palm Shore</label></div>";
    maps += "<div><input type='radio' id='dp' name='map' value='Delfino Pier'>";
    maps += "<label for='dp'>Delfino Pier</label></div>";
    maps += "<div><input type='radio' id='wt' name='map' value='Wuhu Town'>";
    maps += "<label for='wt'>Wuhu Town</label></div>";
    maps += "<div><input type='radio' id='lc' name='map' value='Lunar Colony'>";
    maps += "<label for='lc'>Lunar Colony</label></div>";
    maps += "<div><input type='radio' id='ny' name='map' value='New York Minute B'>";
    maps += "<label for='ny'>New York Minute B</label></div></fieldset><br>";
    maps += "<input type='submit' value='OK!'>";
    maps += "</form>";
    response.send(maps);
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