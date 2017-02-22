alert("You have 9 guesses")

var answer = "h"
var guess= document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
};

for (i=0; i<10; i++){
	document.getElementById("guess").onkeyup = function() {myFunction()};
	
	function myFunction() {
    var x = document.getElementById("guess");
    x.value = x.value.toUpperCase();
}
}

	