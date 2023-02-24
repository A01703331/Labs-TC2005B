function TextToggle(id)
{
    var section = document.getElementById(id);
    if (section.style.display == "none")
    {
        section.style.display = "block";
    }
    else {
        section.style.display = "none";
    }
}

function validate(){
    let confirmtxt=document.getElementById("confirmtxt").value;
    let pswrdtxt=document.getElementById("pswrdtxt").value;
    if(pswrdtxt == "" & confirmtxt==""){
        window.alert("No password detected");
    }
    else if (pswrdtxt == "" || confirmtxt=="") {
        window.alert("All areas should be filled");
    }
    else if (pswrdtxt == confirmtxt) {
        window.alert("Passwords match")
    }
    else {
        window.alert("Passwords don't match");
    }
}

var x = 0;
var y = 0;
var z = 0;

function addA(){
    let posterGoods = document.getElementById("Poster");
    x = x+1
    posterGoods.innerHTML = x;
}

function addB(){
    let gameGoods = document.getElementById("Game");
    y = y+1
    gameGoods.innerHTML = y
}

function addC(){
    let cdGoods = document.getElementById("CD");
    z = z+1
    cdGoods.innerHTML = z
}

function remA(){
    let posterGoods = document.getElementById("Poster");
    x = x-1
    posterGoods.innerHTML = x;
}

function remB(){
    let gameGoods = document.getElementById("Game");
    y = y-1
    gameGoods.innerHTML = y
}

function remC(){
    let cdGoods = document.getElementById("CD");
    z = z-1
    cdGoods.innerHTML = z
}

function totals(){
    purchase = document.getElementById("Purchase");
    purchase.innerHTML = (x*10 + y*15 + z*20) + " Dollars (Tax included)"
}

var fontSwitch = false;
var matches = document.querySelectorAll('li');
var storeFont;
storeFont = matches[0].style.fontFamily

function changeStyle(){
    matches = document.querySelectorAll('li');
    if (!fontSwitch){
        fontSwitch = !fontSwitch;
        matches.forEach(function(target) {
            target.style.fontFamily = 'Mochiy Pop One';
        });
    }
    else{
        fontSwitch = !fontSwitch; 
        matches.forEach(function(target) {
            target.style.fontFamily = storeFont;
        });
    }
}