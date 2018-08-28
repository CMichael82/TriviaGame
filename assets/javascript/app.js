//GlLOBAL VARIABLES//
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choiceMade = true;
var count = 0;
var intervalId;
var timeRemaining = 15
var trivia = [
	{
		question: "What color are aircraft black boxes?",
		options: ["Blue", "Yellow", "Orange"],
		answer: "Orange",
		image: "airplane.jpg",
	},
	{
		question: "In which state was Tennessee Williams born?",
		options: ["Kentucky", "Mississippi", "West Virginia"],
		answer: "Mississippi",
		image: "williams.jpg",
	},
	{
		question: "How long is New Zealands Ninety Nine Mile Beach?",
		options: ["77 miles", "55 miles", "111 miles"],
		answer: "55 miles",
		image: "beach.jpg",
	},
	{
		question: "What is the main ingredient in Bombay Duck?",
		options: ["Fish", "Steak", "Pork"],
		answer: "Fish",
		image: "bombay.jpg",
	},
	{
		question: "What kind of animal is a prairie dog?",
		options: ["Rodent", "Marsupial", "Leporid"],
		answer: "Rodent",
		image: "prairieDog.jpg",
	},
	{
		question: "Where did the Spanish flu originate?",
		options: ["Peru", "Italy", "USA"],
		answer: "USA",
		image: "flu.jpg",
	},
	{
		question: "In which country was the Caesar salad invented?",
		options: ["Spain", "Egypt", "Mexico"],
		answer: "Mexico",
		image: "salad.jpg",
	},
	{
		question: "What nationality was Cleopatra, Queen of Eqypt?",
		options: ["Nigerian", "Greek", "Libyan"],
		answer: "Greek",
		image: "cleopatra.jpg",
	},
	{
		question: "How long did the 100 years war last?",
		options: ["88 years", "116 years", "107 years"],
		answer: "116 years",
		image: "yearsWar.jpg",
	},
	{
		question: "In which country are Panama hats made?",
		options: ["Ecuador", "Portugal", "Brazil"],
		answer: "Ecuador",
		image: "hat.jpg",
	},
];
//FUNCTIONS//

//New Game Screen//
function startScreen() {
	$("#mainImage").attr("src", "assets/images/pondering.jpg");
	$("#timer").text("00:00");
	$("#displayQuestion").empty();
	$("#displayOptions").empty();
	$("#result").empty();
	$("#finalScore").empty();
	$("#startGame").show();
	count = 0;
	correct = 0;
	incorrect = 0;
	unanswered = 0;
}

//Timer: Display in DOM//
function timerTicks() {
	timeRemaining--;
	console.log(timeRemaining);
	if (timeRemaining >= 10) {
		$("#timer").text("00:" + timeRemaining);
	} if (timeRemaining < 10) {
		$("#timer").text("00:0" + timeRemaining);
	} if (timeRemaining <= 0) {
		clearInterval(intervalId);
		$("#timer").text("00:00")
		//If Time's Up, Mark as Unanswered, Display Answer, and Move to Next Question//
		unanswered++;
		console.log("# Unanswered: " + unanswered);
		choiceMade = false;
		$("#displayOptions").empty();
		$("#result").html("Time's up!<br>The correct answer is " + trivia[count].answer);
		setTimeout(nextQuestion, 1000 * 2);
	} else { }
}

//Timer: Start Countdown//
function timerStart() {
	intervalId = setInterval(timerTicks, 1000);
}

//Hide Start Button and Show First Question//
function startTriva() {
	$("#startGame").hide();
	showQuestion();
}

//Display Question//
function showQuestion() {
	$("#timer").text("00:00")
	$("#displayQuestion").text(trivia[count].question);
	$("#mainImage").attr("src", "assets/images/" + trivia[count].image + "");
	//Create Answer Buttons//
	for (var i = 0; i < 3; i++) {
		var optionBtn = $("<button>");
		optionBtn.addClass("button answer");
		optionBtn.attr("data-optionsindex", trivia[count].options[i]);
		optionBtn.text(trivia[count].options[i]);
		$("#displayOptions").append(optionBtn);
	}
	//Reset Countdown//
	clearInterval(intervalId);
	$("#timer").text("00:15");
	timeRemaining = 15;
	timerStart();
}

//Move to New Question//
function nextQuestion() {
	//Count = Trivia Array Index - Increase Moves to Next Question//
	count++;
	//Reset Display in DOM//
	$("#displayQuestion").empty();
	$("#displayOptions").empty();
	$("#result").empty();
	setTimeout(showQuestion, 1000);
	//Once All Questions Displayed - Stop Game//
	if (count === trivia.length) {
		stop();
	}
}

//Determining Correct Answer//
function selectAnswer() {
	//Assign Data from Selected Button to answer variable//
	var answer = ($(this).data("optionsindex"));
	console.log("Question #: " + count);
	console.log("Answer Selected " + answer);

	//Check for Correct Answer, Update Final Score,and Move to Next Question//
	if (answer === trivia[count].answer) {
		choiceMade = true;
		clearInterval(intervalId);
		correct++;
		console.log("# Correct: " + correct);
		$("#timer").text("00:00")
		$("#mainImage").attr("src", "assets/images/checkMark.jpg");
		$("#displayOptions").empty();
		$("#result").html("CORRECT!<br>The answer is " + trivia[count].answer);
		setTimeout(nextQuestion, 1000 * 2);

	} else if (answer !== trivia[count.answer]) {
		choiceMade = true;
		clearInterval(intervalId);
		incorrect++;
		console.log("# Incorrect: " + incorrect);
		$("#timer").text("00:00")
		$("#mainImage").attr("src", "assets/images/xMark.jpg");
		$("#displayOptions").empty();
		$("#result").html("INCORRECT!<br> The answer is " + trivia[count].answer);
		setTimeout(nextQuestion, 1000 * 2);

	}
	else {
	}
}

//Once All Questions Displayed, Clear Timer and Show Final Scores//
function stop() {
	clearInterval(intervalId);
	unanswered = (trivia.length - correct - incorrect);
	$("#finalScore").html("FINAL SCORE: <br>" + "Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" + "Unanswered: " + unanswered);
	setTimeout(startScreen, 1000 * 3);
}

//CALL FUNCTIONS TO RUN GAME
startScreen();
//Clicking on Start Game Button Calls startTriva Function
$("#startGame").click(startTriva);
//Clicking an Answer Button Calls SelectAnswer Function//
selectAnswer();
$("body").on("click", ".answer", selectAnswer);