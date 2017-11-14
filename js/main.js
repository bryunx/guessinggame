var theNumber = Math.floor(Math.random()*10+1);

function checkguess() {
	var guess = document.getElementById('guess');
	var myNumber = guess.value;

	$("#color").css("background-color", getRandomColor());
	if (myNumber < theNumber) {
		output.value = "Too Low! Please try Again!";
	} else if (myNumber > theNumber) {
		output.value = "Too High! Please try Again!";
	} else if (myNumber == theNumber) {
		output.value = "You guessed it! The correct number is " + theNumber + "!";
	}
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
