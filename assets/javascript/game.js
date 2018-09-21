// array of 32 kanye songs, 4 songs from each of 8 latest albums
var songs = ["all|falls|down", "we|dont|care", "spaceship", "jesus|walks", 
            "heard|em|say", "touch|the|sky", "gold|digger", "hey|mama", 
            "good|morning", "stronger", "cant|tell|me|nothing", "flashing|lights",
            "say|you|will", "welcome|to|heartbreak", "amazing", "paranoid",
            "dark|fantasy", "power", "all|of|the|lights", "monster",
            "new|slaves", "im|in|it", "blood|on|the|leaves", "bound|2", 
            "ultralight|beam", "waves", "wolves", "real|friends", 
            "i|thought|about|killing|you", "all|mine", "ghost|town", "violent|crimes"]; 

// one variable for each album cover file
var album0 = "College_Dropout.jpg";
var album1 = "Late_Registration.jpg";
var album2 = "Graduation.jpg";
var album3 = "808s_&_Heartbreak.jpg";
var album4 = "My_Beautiful_Dark_Twisted_Fantasy.jpg";
var album5 = "Yeezus.png";
var album6 = "Life_of_Pablo.jpg";
var album7 = "Ye.jpg";

// initializing global variables
var song = '';
var albumCoverFile = '';
var board = [];

var songArr = [];

var ind = -1;

var guess = '';
var guesses = [];

var guessesLeft = 6;

var beenGuessed = false;
var correctGuess = false;


// function to get random song
function getRandomSong () {
    ind = Math.floor(Math.random() * 31);
    song = songs[ind];
    console.log('song = '+song);
    console.log('---');
    for (var i=0; i<song.length; i++ ) {
        songArr[i] = song[i];
    }
    return song;
}

// function to create initial board based on song
function createInitialBoard () {
    for (i=0; i<song.length; i++) {        
        if (song[i] == '|') {
            board.push('|');
        } else {
            board.push('_');
        }
    }
    return board;
}

// function to get album cover image file
function getAlbumCoverFile () {
    if (ind<4) {
        return album0;
    } else if (ind<8) {
        return album1;
    } else if (ind<12) {
        return album2;
    } else if (ind<16) {
        return album3;
    } else if (ind<20) {
        return album4;
    } else if (ind<24) {
        return album5;
    } else if (ind<28) {
        return album6;
    } else if (ind<32) {
        return album7;
    }
}
        
// set up game when window loads (get song, album cover img and board)
window.onload = function () {
    console.log("start window.onload");

    // get song
    song = getRandomSong();

    // get album cover 
    albumCoverFile = 'assets/images/'+getAlbumCoverFile();

    // set albumCover html element
    document.getElementById('album-cover').src = albumCoverFile;

    // get board
    board = createInitialBoard();

    // set board html element
    document.getElementById('board').textContent = board;

    console.log("stop window.onload");
    console.log("---");
};

// function to update board 
function updateBoard () {
    console.log('updateBoard() started');
    document.getElementById('board').textContent = board;
    console.log('updateBoard() ended');
    console.log('---');
}

// function to update album cover
function updateAlbumCover () {
    console.log('updateAlbumCover started');
    document.getElementById('album-cover').src = 'assets/images/'+albumCoverFile;
    console.log('updateAlbumCover ended');
}

// function to reset aviso div after failure
function resetAviso () {
    console.log('updateAviso started');
    document.getElementById('aviso').textContent = 'guess a letter';
    console.log('updateAviso ended');
}

// function to reset guesses-left div
function resetGuessesLeftDiv () {
    console.log('resetGuessesLeftDiv started');
    document.getElementById('guesses-left').textContent = guessesLeft;
    console.log('resetGuessesLeftDiv ended');
}

// function to reset turn (reset board, song and aviso)
function reset () {
    console.log("reset started");
    // Reset all variables to starting values
    guesses = [];
    board = [];
    beenGuessed = false;
    correctGuess = false;
    guessesLeft = 6;
    ind = -1;
    // Update song
    song = getRandomSong();
    // Update board
    board = createInitialBoard();
    // Update album cover
    albumCoverFile = getAlbumCoverFile();

    updateBoard();
    updateAlbumCover();
    resetAviso();
    resetGuessesLeftDiv();
    console.log("reset ended");
}

// Function to tell user they've failed and reveal song title
function failed () {
    console.log("failed() started");
    // document.getElementById('board').textContent = song;
    // document.getElementById('aviso').textContent = "You're out of guesses. Time for a new song";
    reset();
    console.log("failed() ended");
}

// Function to check to see if need new song
function checkForReset () {
    console.log("checkForReset() started");
    // If out of guesses, fail user
    if (guessesLeft<1) {
        failed();
    }
    console.log("checkForReset() ended");
}

// Function to let user know they've already guessed letter
function alreadyGuessed () {
    console.log("alreadyGuessed() started");
    document.getElementById("aviso").textContent = "You have already guessed " + guess;
    console.log("alreadyGuessed() ended");
}

// Function to let user know they've guessed a correct letter
function correctGuessMade () {
    console.log("correctGuessMade() started");
    document.getElementById("aviso").textContent = "You correctly guessed a letter";
    console.log("correctGuessMade() ended");
}

// Function to let user know they've won
function winConfirmed () {
    console.log("winConfirmed() started");
    alert("You've correctly guessed the song title!");
    console.log("updateGuessesLeftDiv() ended");
}

// Function to check to see if user has won
function checkForWin () {
    var count = 0;
    console.log("checkForWin() started");
    for (var i=0; i<songArr.length; i++) {
        if (board[i] == songArr[i]) {
            count++
        }
    }
    if (count == songArr.length) {
        winConfirmed();
        console.log("passed winConfirmed***");
        reset();
    }     
    console.log("checkForWin() ended");
}

// Function to check if valid guess is correct
function checkValidGuess () {
    console.log("checkValidGuess() started");
    for (var i=0; i<song.length; i++) {
        if (song[i] == guess) {
            // Set successful aviso 
            correctGuessMade();
            // Update board var
            board[i] = guess; 
            // Update board html element
            updateBoard();    
            // Set correct guess to true
            correctGuess = true; 
            console.log("about to check for win+++");    
            checkForWin();
        }
    }
    if (!correctGuess) {
        guessesLeft--;
        checkForReset();
    }
    correctGuess = false;
    console.log("checkValidGuess() ended");
}

// Function to update guesses-left div
function updateGuessesLeftDiv () {
    console.log("updateGuessesLeftDiv() started");
    document.getElementById("guesses-left").textContent = 'guesses left: ' + guessesLeft;
    console.log("updateGuessesLeftDiv() ended");
}

// Function executed when key pressed
document.onkeypress = function (event) {
    console.log("donkeypress started");
    guess = event.key;
    console.log('guess: '+guess);
        // If letter has been already guessed, then let user know and return function
        if (guesses.includes(guess)) {
            alreadyGuessed(); 
            return;
        // Else add the guess to guess array and check to see if it matches any letters in song title             
        } else { 
            guesses.push(guess);
            checkValidGuess();
        }
    updateGuessesLeftDiv();
    updateBoard();
    console.log("donkeypress ended");
}



   


