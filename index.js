
let cards = [];
let sum = 0 ;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = { //Object Creation
        name : "Per",
        chips : 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $"+ Player.chips;

let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
}


function getRandomCard(){
    let num = Math.floor(Math.random() * 13) + 1
    
    if (num > 10){
        return 10
    } else if (num === 1 ) {
        return 11
    } else {
        return num
    }
}


function renderGame() {
    cardsEl.textContent = "Cards: " ;

    for (let i = 0; i < cards.length; i++){     //for loop
        cardsEl.textContent += cards[i] + " "; //print cards with spaces
    }


    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    
    } else if(sum === 21) {
        message = "You have got black jack!";
        hasBlackJack = false;
    } else {
        message = "You are out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    
}


function newCard() {

    if (isAlive == true && hasBlackJack == false) {

    console.log("new Card!")
    
    let newCard = getRandomCard();

    sum += newCard;

    cards.push(newCard);

    renderGame();
    }
}



