const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const guessesRemaining = document.querySelector(".remaining");
const spanRemaining = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const againButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const letterProgress = function(word) {
    // array of icons as placeholders for letters of word being guessed
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
    // variable for input value
    const letterEntry = letterInput.value;
    // console.log(letterEntry);
    // empty message to user
    message.innerText = "";
    // validateInput(letterEntry);
    const checkedInput = validateInput(letterEntry);
    console.log(checkedInput);
    // if entry is valid, add it to the possible word
    if(checkedInput)
    makeGuess(letterEntry);
    // empty input value
    letterInput.value = "";
});

const validateInput = function(input){
    // variable to make sure input is a letter
    const acceptedLetter = /[a-zA-Z]/;
    // check if input is empty
    if(input.length === 0){
        message.innerHTML = "You need to enter a letter to play!  Try again...";
    // check if there is more than one letter entered
    } else if(input.length > 1){
        message.innerText = "Try to keep it to one letter, Friend-O! 😎";
    // check to see if the input is a letter
    } else if(!input.match(acceptedLetter)){
        message.innerText = "If you wanna play, you gotta use letters!"
    } else {
        return input;
    }
}

const makeGuess = function(letter) {
    // convert letter to uppercase
    letter = letter.toUpperCase();
    // check to see if letter has already been used
    if(guessedLetters.includes(letter)){
        message.innerText = "You already guessed that letter.  Try another one!";
    } else {
        // if letter hasn't been used, add it to the array of guessed letters
        guessedLetters.push(letter);
        updateGuessedLetters()
        // console.log(guessedLetters);
        updateWord(guessedLetters);
    }
    
}

const updateGuessedLetters = function () {
    guessedLettersList.innerHTML = "";
    // creating list items in the ul that display the guessed letters
    for(let entry of guessedLetters){
    const listItem = document.createElement("li");
    listItem.innerText = entry;
    guessedLettersList.append(listItem);
}
}

const updateWord = function(guessedLetters) {
    // converting the word being guessed to upper case letters
    const wordUpper = word.toUpperCase();
    // making each letter of the word being guessed into an array element
    const wordArray = wordUpper.split("");
    // creating new array to display the correctly guessed letters 
    const showWord = [];
    // checking to see if the letter entry is in the word being guessed
    for(const entry of wordArray) {
        // if the entry is in the word, the correctly guessed letter is displayed
        if(guessedLetters.includes(entry)) {
            showWord.push(entry);
        } else {
            showWord.push("●");
        }
    }
    // the word in progress is displayed as each letter is correctly guessed
    const newShowWord = showWord.join("");
    wordProgress.innerHTML = newShowWord;

    wordCheck();
}

// checking to see if the correct word has been guessed and user has won
const wordCheck = function() {
    if(wordProgress.innerText === word.toUpperCase()){
        message.classList.add("win");
        message.innerHTML = `<p class = "highlight">You guessed the right word! Congrats!</p>`;
    }

}