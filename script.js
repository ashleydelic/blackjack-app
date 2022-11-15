let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isActive = true;
let message = "";
let meesageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el")

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