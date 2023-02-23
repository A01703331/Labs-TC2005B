console.log("Esto es un print a la consola");
console.info("Este script se ejecuta en una compu y no en el navegador");
console.warn("document, alert, confirm, y prompt, no existen en nodejs");
console.error("Asé se ve un error")


// fs es el modulo para usar archivos del sistema
const filesystem = require('fs');
filesystem.writeFileSync('HW.txt',"Hello World from nodejs");
console.log("Escritura a archivo terminada");
// node es como un ambiente de ejecucion para js dentro de un ordenador

const array = [7000, 5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

// setTimeout funciona por ms, por cada cantidad de tiempo que pase que haya en el arreglo, se imprimira ese tiempo
for (let item of array) {
    setTimeout(() => {console.log(item);}, item);
}
console.log("Se terminó el 'ordenamiento asincrono'");

setTimeout(() => {console.log("Hackeamos tu BD, danos 1.5 BitCoin");}, 13000);

// el modulo http sirve para crear un servidor que tome peticiones http como post, get, etc.
const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Testo</h1>")
    response.write("HW from Node");
    response.end();
})

// Listen activa el puerto del servidor
server.listen(3000);
