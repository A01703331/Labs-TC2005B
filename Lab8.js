const filesystem = require('fs');

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function averages(myArray){
    let sum=0;
    let count = 0;
    let avg=0;
    let text;
    if (myArray.length < 1) {
        text ="<li>El promedio del arreglo [";
        for(let i=0; i< myArray.length; i++) {
            let x = myArray[i];
            text += "(";
            for(let j=0; j< x.length; j++) {
                count++;
                sum = sum + x[j];
                if (j==x.length-1){
                    text += x[j];
                }
                else {
                    text += x[j]+","
                }
            }
            if (i==myArray.length-1){
                text += ")";
            }
            else {
                text += "),";
            }
        }
        avg = sum/count;
        text += "] es "+avg+"</li>";
    }
    else {
        text ="<li>El promedio del arreglo (";
        for(let j=0; j< myArray.length; j++) {
            count++;
            sum = sum + myArray[j];
            if (j==myArray.length-1){
                text += myArray[j];
            }
            else {
                text += myArray[j]+","
            }
        }
        avg = sum/count;
        text += ") es "+avg+"</li>";
    }
    return text;
}

var array = [23,39,57,12,54,21,14,73,63,46,34,82];
htmlInner = averages(array);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Dame un string para poner en un archivo', text => {
    filesystem.writeFileSync("GivenString.txt", text);
    readline.close();
});

var result = random(1,10);
var answer = random(0,10);

htmlInner += "<li>Aleatorio A tiene un numero pensado entre el 1 y el 10... Podra Aleatorio B adivinarlo?</li>";

if (answer == 0){
    htmlInner += "<ul>B:...</ul>";
}
else {
    htmlInner += "<ul>B: Pienso que la respuesta es " + answer + ".</ul>";
}

if (answer == result){
    htmlInner += "<ul>A: ¡Correcto! La respuesta era " + result + ".</ul>";
  }
else if (answer == 0){
    htmlInner += "<ul>A: Al menos responde algo B... La respuesta era " + result + ".</ul>";
}
else {
    htmlInner += "<ul>A: Incorrecto! La respuesta era " + result + ".</ul>";
}

const http = require('http');
const server = http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1>Laboratorio 8</h1>")
    response.write(htmlInner);
    response.end();
})

// Listen activa el puerto del servidor
server.listen(1128);