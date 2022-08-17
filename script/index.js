var dicee1 = 0;
var dicee2 = 1;

//Randomize Function
function randomize() {
  var ran;
  ran = Math.random();
  ran = ran * 6;
  ran = Math.floor(ran);
  return ran + 1;
}

dicee1 = randomize();
dicee2 = randomize();

function gatherAttributes() {
  document.querySelector(".img1").setAttribute("src", ("images/dice" + dicee1 + ".png"));
  document.querySelector(".img2").setAttribute("src", ("images/dice" + dicee2 + ".png"));
}

console.log(dicee1);
console.log(dicee2);

  if (dicee1 > dicee2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
    gatherAttributes();
  } else if (dicee1 < dicee2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
    gatherAttributes();
  } else if (dicee1 == dicee2) {
    document.querySelector("h1").innerHTML = "TIE! REFRESH!";
    gatherAttributes();
  }
