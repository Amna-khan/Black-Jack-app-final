let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true
let message = "";



function getRandomCard(){


}




let messageEl = document.getElementById("message-el");
console.log(messageEl);

let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")

function renderGame() {
    cardsEl.textContent = "Cards: " ;

    for (let i = 0; i < cards.length; i++){     //for loop
        cardsEl.textContent += cards[i] + " "; //print cards with spaces
    }


    sumEl.textContent = "Sum: " + sum;
    if (sum < 20) {
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

function startGame() {
    renderGame();
}


function newCard() {
    console.log("new Card!")
    
    let newCard = getRandomCard();

    sum += newCard;

    cards.push(newCard);

    renderGame();
}



