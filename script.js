let firstCard = 9;
let secondCard = 11;
let hasBlackJack = false;
let isActive = true;
let message = "";
let sum = firstCard + secondCard;
console.log(sum);
let meesageEl = document.getElementById("message-el");



function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wooho! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You are out of the game!";
        isActive = false;
    }
    
    console.log(message)
    meesageEl.textContent = message
}

startGame();