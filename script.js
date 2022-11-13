let firstCard = 1;
let secondCard = 11;
let hasBlackJack = false;
let isActive = false;

let sum = firstCard + secondCard;
console.log(sum);

if (sum <= 20) {
    console.log("Do you want to draw a new card?  🙂") 
} else if (sum === 21) {
    console.log("Wooho! You've got Blackjack! 🥳")
    hasBlackJack = true;
} else {
    console.log("You are out of the game! 👎")
    isActive = true;
}

console.log(hasBlackJack);