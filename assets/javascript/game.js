// Functions for Kanye West Hangman

// Declare and fill dictionary of Kanye song: album [cover image] key pairs
var songs = {"all falls down": "College_Dropout.jpg", "we dont care": "College_Dropout.jpg", "spaceship": "College_Dropout.jpg", "jesus walks": "College_Dropout.jpg", 
            "heard em say": "Late_Registration.jpg", "touch the sky": "Late_Registration.jpg", "gold digger": "Late_Registration.jpg", "hey mama": "Late_Registration.jpg", 
            "good morning": "Graduation.jpg", "stronger": "Graduation.jpg", "cant tell me nothing": "Graduation.jpg", "flashing lights": "Graduation.jpg",
            "say you will": "808s_&_Heartbreak.jpg", "welcome to heartbreak": "808s_&_Heartbreak.jpg", "amazing": "808s_&_Heartbreak.jpg", "paranoid": "808s_&_Heartbreak.jpg",
            "dark fantasy": "My_Beautiful_Dark_Twisted_Fantasy.jpg", "power": "My_Beautiful_Dark_Twisted_Fantasy.jpg", "all of the lights": "My_Beautiful_Dark_Twisted_Fantasy.jpg", "monster": "My_Beautiful_Dark_Twisted_Fantasy.jpg",
            "new slaves": "Yeezus.png", "im in it": "Yeezus.png", "blood on the leaves": "Yeezus.png", "bound 2": "Yeezus.png", 
            "ultralight beam": "Life_of_Pablo.jpg", "waves": "Life_of_Pablo.jpg", "wolves": "Life_of_Pablo.jpg", "real friends": "Life_of_Pablo.jpg", 
            "i thought about killing you": "Ye.jpg", "all mine": "Ye.jpg", "ghost town": "Ye.jpg", "violent crimes": "Ye.jpg"}; 

// Declare first song when window loads
var firstSong = '';

// Functions to get first song when window loads

// When the textOrange button is pressed...
// $("#textOrange").on("click", function() {
// 	// Change funText to orange.
// 	$("#funText").css("color", "orange")
// })

// Function to get random number 0-7
function getAlbumNum() {
    // Generate and return random int 0-7
    var num = Math.floor(Math.random() * 8);
    return num;
}

// Function to get random number 0-3
function getSongNum() {
    // Generate and return random int 0-3
    var num = Math.floor(Math.random() * 4);
    return num;
}

// Function to get album
function getAlbum() {
    // Call get num function, store random int 0-7 in var num
    var num = getAlbumNum();
    // Return album 
    return albums[num];

}

// Function to pick song
function getSong() {
    // Assign random album to var album
    var album = getAlbum();
    // Assign random int 0-3 to var num
    var num = getSongNum();
    // Return random song from random album
    return album[num];
}

// Function to get number of lines and spaces for board
function generateBoard() {
    // Get number of characters (including spaces) of song
    var song = getSong();
    // 
    var board = [];
    //
    for (var i=0; i<song.length; i++) {
        if (song[i] == ' ') {
            board.push(' ');
        } else {
            board.push('_');
        }
    }

    return board.toString();

}

// Generate board string
function createBoardStr() {
    // 
}

// Function to load random guess template with album cover when page loads
function loadGame() {
    // Get song and make uppercase
    var song = getSong().toUpperCase();
    // 

}

// When the window loads
window.onload = getSong();

