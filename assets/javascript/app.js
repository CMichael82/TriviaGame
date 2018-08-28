//GlLOBAL VARIABLES//
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choiceMade = true;
var count = 0;
var intervalId;
var timeRemaining = 15
var timeRunning = false;
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

//Timer: Display Options in DOM//
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
		unanswered++;
		choiceMade = false;
		$("#displayOptions").empty();
		$("#result").text("Time's up! The correct answer is " + trivia[count].answer);
		setTimeout(nextQuestion,1000*3);
	} else { }
}

//Timer: Start Countdown//
function timerStart() {
	// console.log('TR: ', timeRunning);
	// if (!timeRunning) {
		intervalId = setInterval(timerTicks, 1000);
	// 	timeRunning = true;
	// }
}

//Hide Start Button, Show First Question, and Next Question in 15 sec//
function startTriva() {
	$("#startGame").hide();
	showQuestion();
	setTimeOut(nextQuestion, 1000 * 15);
}

//Display Question, Create Answer Buttons, & Start Timer//
function showQuestion() {
	$("#displayQuestion").text(trivia[count].question);
	$("#mainImage").attr("src", "assets/images/" + trivia[count].image + "");
	for (var i = 0; i < 3; i++) {
		var optionBtn = $("<button>");
		optionBtn.addClass("button answer");
		optionBtn.attr("data-optionsindex", trivia[count].options[i]);
		optionBtn.text(trivia[count].options[i]);
		$("#displayOptions").append(optionBtn);
	}
	clearInterval(intervalId);
	timerStart();
}

//Move to Next Question//
function nextQuestion() {
	//Count = Trivia Array Index//
	count++;
	console.log(count);
	//Reset Time to 16 since showQuestion starts after 1 sec//
	timeRemaining = 16;
	//Reset Display in DOM//
	$("#mainImage").attr("src", "assets/images/pondering.jpg");
	$("#displayQuestion").empty();
	$("#displayOptions").empty();
	$("#result").empty();
	//Restart Countdown//
	// timerStart();
	setTimeout(showQuestion, 1000);
	//Once All Questions Displayed - Stop Game//
	if (count === trivia.length) {
		stop();
	}
}

//Clicking an Answer Button Calls SelectAnswer Function//
$("body").on("click", ".answer", selectAnswer);

function selectAnswer() {
	console.log("I've been clicked");
	//Assign Data from Selected Button to answer variable//
	var answer = ($(this).data("optionsindex"));
	console.log(answer);
	//Check for Correct Answer, Update Final Score,and Move to Next Question//
	if (answer === trivia[count].answer) {
		correct++;
		choiceMade = true;
		console.log("Number Correct: " + correct);
		$("#mainImage").attr("src", "assets/images/checkMark.jpg");
		$("#displayOptions").empty();
		$("#result").html("CORRECT!<br>The answer is " + trivia[count].answer);
		setTimeout(nextQuestion, 1000 * 3);
		
	} else if (answer !== trivia[count.answer]) {
		incorrect++;
		choiceMade = true;
		console.log("Number Incorrect: " + incorrect);
		$("#mainImage").attr("src", "assets/images/xMark.jpg");
		$("#displayOptions").empty();
		$("#result").html("INCORRECT!<br> The answer is " + trivia[count].answer);
		setTimeout(nextQuestion, 1000 * 3);
		
	}

	//If No Answer Selected, Count as Unanswered, Move to Next Question//
	//THIS IS CURRENTLY NOT WORKING AS HOPED!!//
	else {
		unanswered++;
		choiceMade = false;
		$("#displayOptions").empty();
		$("result").text
		("Time's up! The correct answer is " + trivia[count].answer);
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
selectAnswer();
$("#startGame").click(startTriva);