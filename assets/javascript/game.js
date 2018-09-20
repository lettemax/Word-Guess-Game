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
// Declare and define array to save guesses
var guesses = [];
// Declare and define variable to indicate whether or not letter has been guessed
var beenGuessed = false;
// Declare and assign value to correctGuess variable
var correctGuess = false;
// Declare and define needNew variable
var needNew = false;
// Declare and define wrong guesses variable
var wrongGuesses = 0;
// Declare and define guesses left variable
var affordableMistakesLeft = 6;


// Function to get random song
function getRandomSong () {
    var num = Math.floor(Math.random() * 31);
    return songs[num];
}

function createBoard () {
    for (i=0; i<song.length; i++) {
        if (song[i] == '|') {
            board[i] = ' ';
        } else {
            board[i] = '_';
        }
    }
}
        
// Get first song when window loads
$(document).ready(function() {
    song = getRandomSong();
    console.log(song);
    createBoard();
    console.log(board);
});

// Function to check to see if need new song
function checkForNeedNew () {
    if (wrongGuesses>affordableMistakesLeft) {
        needNew = true;
    }
}

// Function to execute on each guess
function checkGuess () {
    // if letter matches, change board

    // assign value of key pressed to guess
    var guess = '';
    document.onkeyup = function (event) {
        guess = event.key;
    }

    // loop to see if letter has been guessed
    for (var i=0; i<guesses.length; i++) {
        if (guess == guesses[i]) {
            beenGuessed = true;
        } 
    }

    // if has been guessed, change aviso div text to
    // "you already guessed ${currentGuess}"
    if (beenGuessed) {
        document.getElementById("aviso").textContent = "You have already guessed " + currentGuess;
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
    }

}
