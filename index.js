var Randomnumber= Math.floor(Math.random()*6) + 1;

var Randomdiceimage =  "dice" + Randomnumber +".png";

var Randomimage1 = "images/" + Randomdiceimage; 

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",Randomimage1);

var Randomnumber2 = Math.floor(Math.random()*6)+1;

var Randomimage2 = "images/dice" + Randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",Randomimage2);

if(Randomnumber> Randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player1Win";
}
else if(Randomnumber2>Randomnumber){
    document.querySelector("h1").innerHTML="🚩Player2Win";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}