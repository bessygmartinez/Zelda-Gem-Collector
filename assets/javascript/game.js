$(document).ready(function() {

	// Number Arrays

	// random computer variable array
	let rand = [];

	for (let r = 19; r < 121; r++) {
		rand.push(r);
	}

	// gem numbers array
	let gems = [];

	for (let g = 1; g < 13; g++) {

		gems.push(g);
	}

    console.log(gems);
    
    //Gets link for audio
    const youWinAudio = new Audio ("assets/sounds/OOT_Fanfare_Item.wav");
	const youLoseAudio = new Audio ("assets/sounds/LTTP_Link_Dying.wav");
	const gemSound1 = new Audio ("assets/sounds/TP_Rupee_Land.wav");
	const gemSound2 = new Audio ("assets/sounds/TP_Get_Rupee.wav");
	const gemSound3 = new Audio ("assets/sounds/WW_Get_Rupee.wav");
	const gemSound4 = new Audio ("assets/sounds/ZSS_Rupee_Blue.wav");


	// random variables selected by computer
	let randomNumber; // number to match
	let gemNumbers = []; // for array of random gem values

	let g1;
	let g2;
	let g3;
	let g4;

  let totalScore = 0; // user's score

	let wins = 0;
	let losses = 0;

	// function to pick a random number
	function pickRandomNumber(arr) {

		let x = arr[Math.floor(Math.random() * arr.length)];
		randomNumber = x;
		$("#masterNumber").html(randomNumber);

		console.log("random number: " + randomNumber);

	}

	// function to pick random numbers for gems

	function pickRandomGems(arr) {

		for (let rg = 0; rg < 4; rg++){

			let a = arr[Math.floor(Math.random() * arr.length)];

			gemNumbers.push(a);
		}
    // console log the numbers that were picked for the gems
		console.log("gem numbers: " + gemNumbers);

	}

	function gemValues(arr) {

		// change value of each gem button according to array
		for (i = 0; i < arr.length; i++) {

		$("#gem-" + (i+1)).attr("value", arr[i]);
		}
		g1 = arr[0];
		g2 = arr[1];
		g3 = arr[2];
		g4 = arr[3];
    } 
    
    //Game Reset
	function gameReset(x) {

		gemNumbers = []; // clears gem number values

		pickRandomNumber(rand);

		pickRandomGems(gems);

		gemValues(gemNumbers);

		totalScore = 0;
        $("#yourTotal").html(totalScore);

        alert(x);


	}

	// Game start settings

	pickRandomNumber(rand); // random number to match
	pickRandomGems(gems); // array of random gem values
	gemValues(gemNumbers);

		// gem functions

		$("#gem-1").on("click", function() {

			totalScore += g1;
			$("#yourTotal").html(totalScore);
			gemSound1.play();
		});

		$("#gem-2").on("click", function() {

			totalScore += g2;
			$("#yourTotal").html(totalScore);
			gemSound2.play();
		});

		$("#gem-3").on("click", function() {

			totalScore += g3;
			$("#yourTotal").html(totalScore);
			gemSound3.play();
		});

		$("#gem-4").on("click", function() {

			totalScore += g4;
			$("#yourTotal").html(totalScore);
			gemSound4.play();
		});

	$("button").on("click", function() {
		// this is what happens if the user wins
		if (totalScore == randomNumber) {

			wins++;
			console.log(totalScore);
			$("#yourTotal").html(totalScore);
            $("#playerWins").html(wins);
            youWinAudio.play();

			setTimeout(function() {gameReset("The Master Sword is yours!")}, 200);
		}

		else if (totalScore > randomNumber){

			losses++;
			$("#yourTotal").html(totalScore);
            $("#playerLosses").html(losses);
            youLoseAudio.play();

			setTimeout(function() {gameReset("No Master Sword for you!")}, 200);
		}
	});

});