var out = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");

//this is done because of DRY
function myGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")" ;
    out.textContent = body.style.background + ";"

}
color1.addEventListener("input", myGradient)
color2.addEventListener("input", myGradient);