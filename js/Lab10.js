const http = require('http');

const port=1128; 
var datos = [];
var data_sheet;
var char_selection;
var kart_selection;
var map_selection;

http.createServer((request, response) => {  
    response.setHeader("Content-Type", "text/html");  
    if(request.url === '/') {
        datos = [];
        let char = "<form action='/kartSelect' method='POST'>";
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
        response.write(char);
    } else if (request.url === '/kartSelect' && request.method==='POST') {
        request.on('data', (data_item) => {
            console.log(data_item);
            datos.push(data_item);
        });
        let karts = "<form action='/mapSelect' method='POST'>";
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
        response.write(karts);
        return request.on('end', () => {
            data_sheet = Buffer.concat(datos).toString();
            char_selection = data_sheet.split('=')[1];
            console.log(data_sheet);
            if (char_selection.split('+').length >= 2){
                let joined_string = '';
                for (let i=0; i<char_selection.split('+').length;i++){
                    if (i==char_selection.split('+').length-1){
                        joined_string += char_selection.split('+')[i];
                    }
                    else {
                        joined_string += char_selection.split('+')[i] + ' ';
                    }
                }
                char_selection = joined_string;
            }
            console.log(char_selection);
            return response.end();
        });
    } else if (request.url === '/mapSelect' && request.method==='POST') {
        request.on('data', (data_item) => {
            console.log(data_item);
            datos.push(data_item);
        });
        let maps = "<form action='/confirm' method='POST'>";
        maps += "<fieldset><legend>Select map:</legend>";
        maps += "<div><input type='radio' id='mc' name='map' value='Mario Circuit'>";
        maps += "<label for='mc'>Mario Circuit</label></div>";
        maps += "<div><input type='radio' id='cm' name='map' value='Coconut Mall'>";
        maps += "<label for='cm'>Coconut Mall</label></div>";
        maps += "<div><input type='radio' id='ss' name='map' value='Singapore Speedway'>";
        maps += "<label for='ss'>Singapore Speedway</label></div>";
        maps += "<div><input type='radio' id='kf' name='map' value='Toad's Factory'>";
        maps += "<label for='kf'>Toad's Factory</label></div>";
        maps += "<div><input type='radio' id='yi' name='map' value='Yoshi's Island'>";
        maps += "<label for='yi'>Yoshi's Island</label></div>";
        maps += "<div><input type='radio' id='ds' name='map' value='DK Summit'>";
        maps += "<label for='ds'>DK Summit</label></div>";
        maps += "<div><input type='radio' id='kc' name='map' value='Bowser's Castle'>";
        maps += "<label for='kc'>Bowser's Castle</label></div>";
        maps += "<div><input type='radio' id='rr' name='map' value='Rainbow Road'>";
        maps += "<label for='rr'>Rainbow Road</label></div></fieldset><br>";
        maps += "<input type='submit' value='OK!'>";
        maps += "</form>";
        response.write(maps);
        return request.on('end', () => {
            data_sheet = Buffer.concat(datos).toString();
            kart_selection = data_sheet.split('=')[2];
            console.log(data_sheet);
            if (kart_selection.split('+').length >= 2){
                let joined_string = '';
                for (let i=0; i<kart_selection.split('+').length;i++){
                    if (i==kart_selection.split('+').length-1){
                        joined_string += kart_selection.split('+')[i];
                    }
                    else {
                        joined_string += kart_selection.split('+')[i] + ' ';
                    }
                }
                kart_selection = joined_string;
            }
            console.log(kart_selection);
            return response.end();
        });
    } else if (request.url === '/confirm' && request.method==='POST') {
        request.on('data', (data_item) => {
            console.log(data_item);
            datos.push(data_item);
        });
        return request.on('end', () => {
            data_sheet = Buffer.concat(datos).toString();
            map_selection = data_sheet.split('=')[3];
            console.log(data_sheet);
            if (map_selection.split('+').length >= 2){
                let joined_string = '';
                for (let i=0; i<map_selection.split('+').length;i++){
                    if (i==map_selection.split('+').length-1){
                        joined_string += map_selection.split('+')[i];
                    }
                    else {
                        joined_string += map_selection.split('+')[i] + ' ';
                    }
                }
                map_selection = joined_string;
            }
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
            console.log(map_selection);
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
            response.write(race_prep);
            return response.end();
        });
    } else if (request.url === '/startRace' && request.method==='POST') {
        
    } else {
        response.statusCode = 404;
        response.write("Error 404, Planet Not Found");
    }
    response.write('</body></html>')
    response.end();
}).listen(port);