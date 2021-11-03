const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const guessesRemaining = document.querySelector(".remaining");
const spanRemaining = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const againButton = document.querySelector(".play-again");

const word = "magnolia";

const letterProgress = function(word) {
    const symbolSubs = [];
    for(const item of word){
        console.log(item);
        symbolSubs.push("●")
    } 
    wordProgress.innerText = symbolSubs.join("");
};

letterProgress(word);

guessButton.addEventListener("click", function(e){
    e.preventDefault();
    const letterEntry = letterInput.value;
    console.log(letterEntry);
});