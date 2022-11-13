let firstCard = 1;
let secondCard = 11;
let hasBlackJack = false;
let isActive = false;
let message = "";

let sum = firstCard + secondCard;
console.log(sum);



function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?  🙂"
    } else if (sum === 21) {
        message = "Wooho! You've got Blackjack! 🥳";
        hasBlackJack = true;
    } else {
        message = "You are out of the game! 👎";
        isActive = true;
    }
    
    console.log(message)
}