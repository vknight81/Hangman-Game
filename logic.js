var wordList=["aaliyah", "radiohead", "bustarhymes", "nirvana", "delasoul", "boystomen", "newedition"]
var chosenWord = "";
var lettersinChosenword = [];
var numBlanks = 0;
var blanksandSuccesses = [];
var wrongGuesses = [];
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;



function startGame(){
	/*1. select a word at random
	2. want to break up that random word into letters and replace with underscores
	3. add the underscores to the HTML
	4. numGuesses always equals 9, blanksandSuccesses is an empty array, and wrongGuesses is empty as well. 
	*/
numGuesses = 9;
blanksandSuccesses = [];
wrongGuesses = [];

chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersinChosenword = chosenWord.split("");
numBlanks = lettersinChosenword.length;

	for (var i = 0; i < numBlanks; i++){
		blanksandSuccesses.push("_");
	
}

}






function checkLetters(letter){
	/*1. compare the letter that the user picks matches any of the letters in the word.
	2. I want a conditional statement to determine if the letter the user picked is in the word.  If so, do something.  If not, do something else.
	3. If the user is wrong we want to decrease numGuesses variable by one.
	*/
	var letterInWord = false;

	for (var i = 0; i < numBlanks; i++){
		if (chosenWord[i] === letter) {
			letterInWord = true;
		}
	}
	if (letterInWord){
		for (i = 0; i < numBlanks; i++) {	
			if (chosenWord[i] === letter){
				blanksandSuccesses[i] = letter;
		}
	}
}
	else{
		numGuesses --;
		wrongGuesses.push(letter)
	}
	

}

function roundComplete(){
	/*1. this updates the HTML w/ letters that are in the word.
	2. this updates the HTML w/ guesses that we have left.
	3. this updates the HTML to show the wrong guesses.
	4. this determines whether the user won game or not.
	*/
	document.getElementById('wordblank').innerHTML=blanksandSuccesses.join(" ");
	document.getElementById('guessesleft').innerHTML=numGuesses;
	document.getElementById('wrong-guesses').innerHTML= wrongGuesses.join(" ");

	if (lettersinChosenword.join(" ") === blanksandSuccesses.join(" ")){
		winCounter++;
		alert("You Win!");
		document.getElementById('win-counter').innerHTML = winCounter;
		startGame(); 
	}
	else if (numGuesses === 0){
		document.getElementById('loss-counter').innerHTML = lossCounter++;
		alert("You Lose!");
		startGame();
	}
}	

startGame();
document.onkeyup = function(event) {
	/*1. take in the letter that we type in.
	2. it will pass through the checkLetters function.
	*/
	var letterGuessed = event.key;
	console.log ("this is the letter we typed", letterGuessed);
	checkLetters(letterGuessed);
	roundComplete();
}	

