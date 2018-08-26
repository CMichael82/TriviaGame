var correct = 0;
var incorrect = 0;
var unanswered = 0;
var choiceMade = true;
var count = 0;
var start;
var intervalId;
var timeRemaining = 15
var timeRunning = false;
var trivia = [
	{
		question: "What color are aircraft black boxes?",
		options: ["Blue", "Yellow", "Orange"],
		answer: "Orange",
	},
	{
		question: "In which state was Tennessee Williams born?",
		options: ["Kentucky", "Mississippi", "West Virginia"],
		answer: "Mississippi",
	},
	{
		question: "How long is New Zealands Ninety Nine Mile Beach?",
		options: ["99 miles", "55 miles", "111 miles"],
		answer: "55 miles",
	},
	{
		question: "What is the main ingredient in Bombay Duck?",
		options: ["Fish", "Steak", "Pork"],
		answer: "Fish",
	},
	{
		question: "What kind of animal is a prairie dog?",
		options: ["Rodent", "Marsupial", "Leporid"],
		answer: "Rodent",
	},
	{
			question: "Where did the Spanish flu originate?",
			options: ["Peru", "Italy", "USA"],
			answer: "USA",
		},
		{
			question: "In which country was the Caesar salad invented?",
			options: ["Spain", "Egypt", "Mexico"],
			answer: "Mexico",
		},
		{
			question: "What nationality was Cleopatra, Queen of Eqypt?",
			options: ["Nigeria", "Greek", "Libyan"],
			answer: "Greek",
		},
		{
			question: "How long did the 100 years war last?",
			options: ["88 years", "116 years", "107 years"],
			answer: "116 years",
		},
		{
			question: "In which country are Panama hats made?",
			options: ["Ecuador", "Portugal", "Brazil"],
			answer: "Ecuador",
	},
];

function startScreen() {
	$("#timer").text("00:00");
	$("#displayQuestion").empty();
	$("#displayOptions").empty();
	$("#result").empty();
	$("#finalScore").empty();
	$("#startGame").show();
	count=0;
	correct =0;
	incorrect = 0;
	unanswered = 0;
}
function timerStart() {
	if (!timeRunning) {
		intervalId = setInterval(timerTicks, 1000);
		timeRunning = true;
	}
}
function timerTicks() {
	timeRemaining--;
	if (timeRemaining >= 10) {
		$("#timer").text("00:" + timeRemaining);
	} if (timeRemaining < 10) {
		$("#timer").text("00:0" + timeRemaining);
	} if (timeRemaining === 0) {
		// clearInterval(intervalId);
		$("#timer").text("00:00")
		// timeRemaining = 15;
	} else { }
}
function startTriva() {
	$("#startGame").hide();
	showQuestion();
	setTimeOut(nextQuestion, 1000*15);
}

function showQuestion() {
	$("#displayQuestion").text(trivia[count].question);
	for (var i = 0; i < 3; i++) {
		var optionBtn = $("<button>");
		optionBtn.addClass("button answer");
		optionBtn.attr("data-optionsindex", trivia[count].options[i]);
		optionBtn.text(trivia[count].options[i]);
		$("#displayOptions").append(optionBtn);
	}
	timerStart();
}

function nextQuestion() {
	count++;
	console.log(count);
	timeRemaining = 16;
	$("#displayQuestion").empty();
	$("#displayOptions").empty();
	$("#result").empty();
	timerStart();
	setTimeout(showQuestion, 1000);
	if (count === trivia.length) {
		stop();
	}
}

function stop() {
	clearInterval(intervalId);
	clearInterval(start);
	unanswered = (trivia.length - correct - incorrect);
	$("#finalScore").html("<br><br> FINAL SCORE: <br>" + "Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" + "Unanswered: " + unanswered);
	setTimeout(startScreen,1000*2);
}

$("body").on("click", ".answer", selectAnswer);

function selectAnswer() {
	console.log("I've been clicked");
	var answer = ($(this).data("optionsindex"));
	console.log(answer);
	if (answer === trivia[count].answer) {
		correct++;
		choiceMade = true;
		console.log("Number Correct: " + correct);
		$("#result").text("Correct! The answer is: " + trivia[count].answer);
		setTimeout(nextQuestion, 1000*2);

	} else if (answer !== trivia[count.answer]) {
		incorrect++;
		choiceMade = true;
		console.log("Number Incorrect: " + incorrect);
		$("#result").text("Incorrect! The answer is: " + trivia[count].answer);
		setTimeout(nextQuestion, 1000*2);

	}
	else {
		unanswered++;
		choiceMade = false;
		$("result").text("Time's up! The correct answer is: " + trivia[count].answer);
	}
}

startScreen();
selectAnswer();
$("#startGame").click(startTriva);