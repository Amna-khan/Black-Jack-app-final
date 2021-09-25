let firstCard = 10;
let secondCard = 11;
let hasBlackJack = false;
let isAlive = true
let message = "";
let sum = firstCard + secondCard;

if (sum < 21) {
    message = "Do you want to draw a new card? 🙂 ";

} else if(sum == 21) {
    message = "You have got black jack! 🥳 ";
    hasBlackJack = false;
} else {
    message = "You are out of the game! 😭 ";
    isAlive = false;
}

console.log(message);