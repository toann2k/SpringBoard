const gameContainer = document.getElementById("game");
let card1Flip = null;
let card2Flip = null;
let cardsFlippedCounter = 0;
let noClickingFlag = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}
let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(e) {
  if (noClickingFlag) return;
  

  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.classList[0];
 

  if (!card1Flip || !card2Flip)
   {
    
    currentCard.classList.add("cardFlipped");
    
    card1Flip = card1Flip || currentCard;
    card2Flip = currentCard === card1Flip ? null : currentCard;
  }

  if (card1Flip && card2Flip) {
    noClickingFlag = true;
    let card1select = card1Flip.className;
    let card2select = card2Flip.className;

    if (card1select === card2select) {
        
      card1Flip.removeEventListener("click", handleCardClick);
      card2Flip.removeEventListener("click", handleCardClick);
      card1Flip = null;
      card2Flip = null;
      noClickingFlag = false;
      cardsFlippedCounter += 2;

    } else {
      setTimeout(function() {
        card1Flip.style.backgroundColor = "";
        card2Flip.style.backgroundColor = "";
        card1Flip.classList.remove("cardFlipped");
        card2Flip.classList.remove("cardFlipped");
        card1Flip = null;
        card2Flip = null;
        noClickingFlag = false;
      }, 1000);
    }
  }

  if (cardsFlippedCounter === COLORS.length) alert("game over!");
}

createDivsForColors(shuffledColors);
