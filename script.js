let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isActive = true;
let message = "";


let meesageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")



function startGame() {
    sumEL.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!";
        isActive = false;
    }
    meesageEl.textContent = message;
}

function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 6;
    sum += card;
    startGame();

}