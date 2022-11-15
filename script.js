
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isActive = false;
let message = "";
let meesageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")

console.log(cards)

function getRandomCard() {
    let randomNumber =  Math.floor ( Math.random() * 13 ) + 1;
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    isActive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEL.textContent = "Sum: " + sum
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
    let card = getRandomCard()
    sum += card;
    cards.push(card)
    console.log(cards)
    renderGame()

}