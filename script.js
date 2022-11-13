let firstCard = 2;
let secondCard = 9;

let sum = firstCard + secondCard;
console.log(sum);

if (sum < 21) {
    console.log("Do you want to draw a new card?  🙂") 
} else if (sum === 21) {
    console.log("Wooho! You've got Blackjack! 🥳")
} else {
    console.log("You are out of the game! 👎")
}
