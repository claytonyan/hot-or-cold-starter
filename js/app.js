
$(document).ready(function(){
	
	//Global variables

	var randNum = Math.floor(Math.random()*100);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	/*--- On click, take input value and compare to random number and give feedback---*/
	$(".button").click(function(e){
		e.preventDefault();
		var guess = +$('.text').val();
		calculateTemp(guess);
		$(".text").val('');
		$('#guessList').append("<li>"+guess+"</li>");

	});

	function calculateTemp(x) {
		var diff = Math.abs(randNum - x);
		if (diff === 0) {
			$('#feedback').html("Right on!");
			$('h2').css("background", "#cc324b");
		}
		else if (diff >= 50) {
			$('#feedback').html("Ice cold");
			$('h2').css("background", "#11a8ab");
		}
		else if (diff >= 30) {
			$('#feedback').html("Cold");
			$('h2').css("background", "#369097");
		}
		else if (diff >= 20) {
			$('#feedback').html("Warm");
			$('h2').css("background", "#5A7985");
		}
		else if (diff >= 10) {
			$('#feedback').html("Hot");
			$('h2').css("background", "#816171");
		}
		else if (diff > 0) {
			$('#feedback').html("On fire");
			$('h2').css("background", "#A34B5F");
		}
	}

	
	/*--- Generating a new random number at start of game ---*/
	$('.new').click(newGame);

	function newGame() {
		randNum = Math.floor(Math.random()*100);
		$('#feedback').html("Make your Guess!");
		$('h2').css("background", "#cc324b");
		$('#guessList').empty();
	};



});


