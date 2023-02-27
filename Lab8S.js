const http = require('http');
const red = require('url');
const fs = require('fs');

const port=1128; 

// Abrir archivo html
fs.readFile('./Lab1.html', "UTF-8", function (err, htmlData) {
    // Lanzar error si ocurre
    if (err) throw err;  
    
    // Crear servidor
    http.createServer((request, response) => {  
        response.setHeader("Content-Type", "text/html");  
        if(request.url === '/') {
            response.write(htmlData);
            response.write("<a href='/character_select'>Choose your character!</a>");
        } else if (request.url === '/character_select' && request.method==='GET') {
            response.write("<form action='/character_select' method='POST'>");
            let radios = "<fieldset><legend> Select a brother:</legend>";
            radios += "<div><input type='radio' id='ml' name='Brother' value='Mario'>";
            radios += "<label for='ml'>Mario</label></div>";
            radios += "<div><input type='radio' id='lm' name='Brother' value='Luigi'>";
            radios += "<label for='lm'>Luigi</label></div></fieldset>";
            radios += "<label for='wl'>Anyone else?</label>";
            radios += "<input type='text' id='wl' name='third_party'><br>";
            radios += "<input type='submit' value='Go!'>";
            radios += "</form>";
            response.write(radios);
        } else if (request.url === '/character_select' && request.method==='POST') {
            const datos = [];
            request.on('data', (data_item) => {
                console.log(data_item);
                datos.push(data_item);
            });
            return request.on('end', () => {
                const data_sheet = Buffer.concat(datos).toString();
                const char_selection = data_sheet.split('&')[0].split('=')[1];
                console.log(data_sheet);
                console.log(char_selection);
                response.write('Loading...');
                return response.end();
            });
        } else if (request.url === '/404') {
            response.statusCode = 404;
            response.write("Error 404, Planet Not Found");
        } else {
            response.writeHead(301, { Location: '/404' });
        }
        response.write('</body></html>')
        response.end();
    }).listen(port);
});