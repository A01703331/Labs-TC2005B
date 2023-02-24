const http = require('http');
const fs = require('fs');

const port=1128; 

// Abrir archivo html
fs.readFile('./Lab1.html', "UTF-8", function (err, htmlData) {
    // Lanzar error si ocurre
    if (err) throw err;  
    
    // Crear servidor
    http.createServer(function(request, response) {  
        response.setHeader("Content-Type", "text/html");  
        response.write(htmlData);  
        response.end();  
    }).listen(port);
});

