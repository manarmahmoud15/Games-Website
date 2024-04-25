var guessedNumber = document.getElementById("guessedNumber");
var message = document.getElementById("message");
function checkNumber() {
    var randomNum = randomNmber();
    var userGuess = Number(guessedNumber.value.trim());
    if (isNaN(userGuess) || guessedNumber.value.trim() === "") {
        message.textContent = "You Should Enter Number First";
    } else if (randomNum === userGuess) {
        message.textContent = "Congratulations! You guessed the correct number.";
    } else {
        message.textContent = `Sorry, the correct number was ${randomNum}. Try again.`;
    }
}
function randomNmber() {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    console.log(randomNum);
    return randomNum;
}