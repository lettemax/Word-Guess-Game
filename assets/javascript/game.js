// Functions for Kanye West Hangman

// Declare and fill array of albums
var albums = ['College Dropout', 'Late Registration', 'Graduation', '808s & Heartbreak',
                    'My Beautiful Dark Twisted Fantasy', 'Yeezus', 'Life of Pablo', 'Ye'];


// Declare and fill album arrays with songs
var collegeDropout = ['All Falls Down', "We Dont Care", 'Spaceship', 'Jesus Walks'];
var lateRegistration = ["Heard Em Say", "Touch the Sky", "Gold Digger", "Hey Mama"];
var graduation = ["Good Morning", "Stronger", "Cant Tell Me Nothing", "Flashing Lights"];
var heartbreak = ["Say You Will", "Welcome to Hearbreak", "Amazing", "Paranoid"];
var myBeautiful = ["Dark Fantasy", "Power", "All of the Lights", "Monster"];
var yeezus = ["New Slaves", "Im in it", "Blood on the leaves", "Bound 2"];
var lifeOfPablo = ["Ultralight Beam", "Waves", "Wolves", "Real Friends"];
var ye = ["I Thought About Killing You", "All Mine", "Ghost Town", "Violent Crimes"];

// Declare and fill array of album cover images
var albumCoverImages = ['College_Dropout.jpg', 'Late_Registration.jpg', 'Graduation.jpg', '808s_&_Heartbreak.jpg',
                        'My_Beautiful_Dark_Twisted_Fantasy.jpg', 'Yeezus.png', 'Life_of_Pablo.jpg', 'Ye.jpg'];


// Functions to get first song when window loads

// When the textOrange button is pressed...
$("#textOrange").on("click", function() {
	// Change funText to orange.
	$("#funText").css("color", "orange")
})


// When the window loads
window.onload = getSong();

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
    var songArr = getSong().split();
    // 
    var arr;
    //
    for (var i=0; i<songArr.length; i++) {
         arr.push('placeholder');
    }

    

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

