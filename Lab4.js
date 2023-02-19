document.write("<section id='Lab4EX' style='display:none'> <ul class='nes-list is-disc'>");

var numInp = prompt("Dame un número", "0");
while (numInp <= 0){
    var numInp = prompt("Pero que sea un número mayor a 0", "0");
}
const number = parseInt(numInp);
document.write("<li class = 'pregunta'> Cuadrados y Cubos desde 1 hasta " + number +".</li><ul class='nes-list is-circle'>");
for (let i = 1; i <= number; i++) {
    document.write("<li>",i," ",i*i," ",i*i*i,"</li>");
}
document.write("</ul>");

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
var x = random(0,20);
var y = random(0,20);
var result = x+y;
var start = new Date;
start.getSeconds();
var finish = new Date;
const answer = prompt("Cuanto es "+ x + " + "+ y + "?");
finish.getSeconds();
var Ttime = finish-start;
if (answer == result){
    alert("Correcto, tardaste " + Ttime + "ms en contestar.");
}
else {
    alert("Incorrecto, tardaste "+ Ttime + "ms en contestar.");
}

array1 = new Array();
for (let i = 0; i <= 9; i++){
    numA = prompt("Dame un número, el que sea. ("+(i+1)+"/10)");
    array1.push(parseInt(numA));
}

function counter(myArray){
    var zeroes = 0;
    var negatives = 0;
    var overZero = 0;
    for (let i = 0; i<= myArray.length;i++){
        if(myArray[i]==0){
        zeroes++;
    }
    else if (myArray[i]<0){
        negatives++;
    }
    else if (myArray[i]>0){
      overZero++;
    }
  }
  document.write("<li>Entre los números dados, hay "+zeroes+" ceros, "+negatives+" negativos, y "+overZero+" numeros mayores a cero.</li>");
}
counter(array1);

let array2 = [[9,8],[9,7]];
let sum=0;
let avg=0;
function averages(myArray){
    for(var i=0; i< myArray.length; i++) {
        var x = myArray[i];
        for(var j=0; j< x.length; j++) {
            sum   = sum + x[j];
        }
    }
    avg = sum/4;
    document.write("<li class = 'pregunta'>El promedio del arreglo ((9,8),(9,7)) es"+avg+"</li>");
}
averages(array2);

function reverseNum(num){
  return (
    parseFloat(
      num
        .toString()
        .split("")
        .reverse()
        .join("")
    ) * Math.sign(num)
  )
}

document.write("<li>"+number+" inverso es ",reverseNum(number),"</li>");

document.write("<li class ='pregunta'>Problema de JavaScript (En ingles)</li><ul class='nes-list is-circle'>");
document.write("<li>It was a normal day in the Mushroom Kingdom, Mario went to gather some coins in order to help Yoshi pay off the money he owed after comitting tax fraud countless times, however, Mario doesn't know how much money Yoshi owes as he's been on the run from the cops for over 30 years now.</li>");
document.write("<li>As far as we know, taxes in the mushroom kingdom are a set fee of 1000 coins each year, however, for every missed payment, a fraud must pay what they haven't payed as well as an extra 200 coins on legal fees. Help Mario figure out how much Yoshi owes.</li>");

function Coins(years){
    this.years = years;
    this.yevaded = years_evaded(years);
    this.legal = legal_fees(years);
    this.total = calculation(years);
}

function years_evaded(years){
    var coins = 0
    for(let i=0; i< parseInt(years); i++){
        coins = coins + 1000
    }
    return coins
}

function legal_fees(years){
    var coins = 0
    for(let i=1; i< parseInt(years); i++){
        coins = coins + 200
    }
    return coins
}

function calculation(years){
    return years_evaded(years) + legal_fees(years)
}

var total_coins = new Coins(30);
document.write("<ul class='nes-list is-circle'><li>The perpetrator owes ", total_coins.yevaded, " coins to the IRS.</li>");
document.write("<li>The cost of legal fees for evading the IRS for ", total_coins.years," years is an estimated ", total_coins.legal ," coins.</li>");
document.write("<li>That means Yoshi owes a total of ",total_coins.total, " coins for evading the IRS for ",  total_coins.years, " years.</li></ul>");

document.write("</section>");
