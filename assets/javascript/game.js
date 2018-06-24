var computerLetter;
var wins=0;
var losses=0;
var guesses=9;
var guessHistory= [];
var computerLetterArrayIndex;
var alphabetArray= ["a","b","c","d","e","f","g","h","i","j","k","l","m","o","p","q","r","s","t","u","v","w","x","y","z"];

//Generate random number between 1 an 25 to select letter for computer if they still have all of their guessses


// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    //Generates a random number between 0 and 25 
    computerLetterArrayIndex= Math.floor(Math.random()*26);
computerLetter= alphabetArray[computerLetterArrayIndex];


    
    if (userGuess===computerLetter){
         wins++;
         guesses=9;
         guessHistory=[];
    }
    else if(guesses===0){
        guesses=9;
        losses++;
        guessHistory=[];
    }else{
        guesses--;
        guessHistory.push(userGuess);
    }


    var html = 
    "<h1> The Psychic Game </h1>" +
    "<p>" +computerLetter +"</p> " +
    "<p>Guess what letter I'm thinking of.</p>" +
    "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guesses + "</p>" +
    "<p>Your Guesses so far: " + guessHistory.join(", ") + "</p>";

    document.querySelector("#game").innerHTML = html;

    }




