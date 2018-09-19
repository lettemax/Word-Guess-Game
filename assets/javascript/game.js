// Functions for Kanye West Hangman

// Declare and fill array of albums
var albums = ['College Dropout', 'Late Registration', 'Graduation', '808s & Heartbreak',
                    'My Beautiful Dark Twisted Fantasy', 'Yeezus', 'Life of Pablo', 'Ye'];


// Declare and fill album arrays with songs
var collegeDropout = ['All Falls Down'];
var Late_Registration = []
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
function getNum() {
    // Generate and return random int 0-7
    var num = Math.floor(Math.random() * 8);
    return num;
}

// Function to pick album
function getAlbum() {
    // Call get num function, store random int 0-7 in var num
    var num = getNum();

    // Return album cover image file 
    return 
    

}

