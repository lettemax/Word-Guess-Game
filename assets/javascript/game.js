// Functions for Kanye West Hangman

// Declare and fill dictionary of Kanye song: album [cover image] key pairs
var songs = {"all|falls|down": "College_Dropout.jpg", "we|dont|care": "College_Dropout.jpg", "spaceship": "College_Dropout.jpg", "jesus|walks": "College_Dropout.jpg", 
            "heard|em|say": "Late_Registration.jpg", "touch|the|sky": "Late_Registration.jpg", "gold|digger": "Late_Registration.jpg", "hey|mama": "Late_Registration.jpg", 
            "good|morning": "Graduation.jpg", "stronger": "Graduation.jpg", "cant|tell|me|nothing": "Graduation.jpg", "flashing|lights": "Graduation.jpg",
            "say|you|will": "808s_&_Heartbreak.jpg", "welcome|to|heartbreak": "808s_&_Heartbreak.jpg", "amazing": "808s_&_Heartbreak.jpg", "paranoid": "808s_&_Heartbreak.jpg",
            "dark|fantasy": "My_Beautiful_Dark_Twisted_Fantasy.jpg", "power": "My_Beautiful_Dark_Twisted_Fantasy.jpg", "all|of|the|lights": "My_Beautiful_Dark_Twisted_Fantasy.jpg", "monster": "My_Beautiful_Dark_Twisted_Fantasy.jpg",
            "new slaves": "Yeezus.png", "im in it": "Yeezus.png", "blood on the leaves": "Yeezus.png", "bound 2": "Yeezus.png", 
            "ultralight beam": "Life_of_Pablo.jpg", "waves": "Life_of_Pablo.jpg", "wolves": "Life_of_Pablo.jpg", "real friends": "Life_of_Pablo.jpg", 
            "i|thought|about|killing|you": "Ye.jpg", "all|mine": "Ye.jpg", "ghost|town": "Ye.jpg", "violent|crimes": "Ye.jpg"}; 


// Declare current song variable
var song = '';
// Declare current board variable
var board = '';
// Declare array to save guesses
var guesses = [];
// Declare variable to indicate whether or not letter has been guessed
var beenGuessed = false;
// Declare and assign value to correctGuess variable
var correctGuess = false;
// Declare and assign value needNew variable
var needNew = false;
// Declare wrong guesses variable
var wrongGuesses = 0;
// Declare guesses left variable
var guessesLeft = 6;
// Declare variable for album cover file
var albumCoverFile = '';


// Function to get random song
function getRandomSong () {
    var num = Math.floor(Math.random() * 31);
    return songs[num];
}

function getBoard () {
    for (i=0; i<song.length; i++) {
        if (song[i] == '|') {
            board[i] = ' ';
        } else {
            board[i] = '_';
        }
    }
    return board;
}
        
// Set up game when window loads
$(document).ready(function() {
    // Get song
    song = getRandomSong();
    console.log(song);
    // Get album cover 
    albumCoverFile = songs[song];
    console.log(albumCoverFile);
    document.getElementById('albumCover').src = albumCoverFile;
    // Get board
    board = getBoard();
    console.log(board);
    // Set textContent of board column to board
    document.getElementById('board').textContent = board;
});

// Function to reset turn
function reset () {
    guesses = [];
    beenGuessed = false;
    correctGuess = false;
    wrongGuesses = 0;
    guessesLeft = 6;
    song = getRandomSong();
    board = getBoard();
}

// Function to check to see if need new song
function checkForReset () {
    if (wrongGuesses>guessesLeft) {
        alert("You're out of guesses!");
        document.getElementById('board').textContent = song;
    }
    if (confirm("Next song?")) {
        reset();
    }
}

// Function to execute on each guess
function checkGuess () {
    //
    // assign value of key pressed to guess
    var guess = '';
    document.onkeyup = function (event) {
        guess = event.key;
        for (var i=0; i<guesses.length; i++) {
            if (guess == guesses[i]) {
                beenGuessed = true;
                document.getElementById("aviso").textContent = "You have already guessed " + currentGuess;
                return;               
            } 
        }
        guesses.push(guess);
    }
    // loop to see if letter has been guessed
    
    // if has been guessed, change aviso div text to
    // "you already guessed ${currentGuess}"
    // if (beenGuessed) {
    //     document.getElementById("aviso").textContent = "You have already guessed " + currentGuess;
    } else {
        for (var i=0; i<song.length; i++) {
            if (song[i] == guess) {
                // Set correct guess to true
                correctGuess = true;
                // Set successful aviso 
                document.getElementById("aviso").textContent = "Nice!";
                // Update board
                board[i] = guess;              
            }
        }
        if (correctGuess == false) {      
    }

}
