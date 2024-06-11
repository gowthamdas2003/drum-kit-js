var randomnumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage1="dice"+randomnumber1+".png";

var randomImageSource1="images/"+randomDiceImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource1);


var randomnumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomnumber2+".png";

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player1 wins";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player2 wins";
}
else{
document.querySelector("h1").innerHTML="draw";

}


