var correct = 0;
var incorrect = 0;
var unanswered = 0;
var count = 0;
var start;
var timerRunning = false;
var intervalID;
var trivia = [
	{
		question: "What color are aircraft black boxes?",
		options: "a) Blue\n b) Yellow\n c) Orange",
		answer: "c"
	},

	{
		question: "In which state was Tennessee Williams born?",
		options: "a) Kentucky\n b) Mississippi\n c) West Virginia",
		answer: "b"
	},

	{
		question: "How long is New Zealands Ninety Nine Mile Beach?",
		options: "a) 99 miles\n b) 55 miles\n c) 111 miles",
		answer: "b"
	},

	{
		question: "What is the main ingredient in Bombay Duck?",
		options: "a) Fish\n b) Steak\n c) Pork",
		answer: "a"
	},

	{
		question: "What kind of animal is a prairie dog?",
		options: "a) Rodent\n b) Marsupial\n c) Leporid",
		answer: "a"
	},

	{
		question: "Where did the Spanish flu originate?",
		options: "a) Peru\n b) Italy\n c) USA",
		answer: "c"
	},

	{
		question: "In which country was the Caesar salad invented?",
		options: "a)Spain\n b) Egypt\n c) Mexico",
		answer: "c"
	},

	{
		question: "What nationality was Cleopatra, Queen of Eqypt?",
		options: "a) Nigeria\n b) Greek\n c) Libyan",
		answer: "b"
	},

	{
		question: "How long did the 100 years war last?",
		options: "a) 88 years\n b) 116 years\n c) 107 years",
		answer: "b"
	},

	{
		question: "In which country are Panama hats made?",
		options: "a) Ecuador\n b) Portugal\n c) Brazil",
		answer: "a"
	},
];

var timer = {
	time: 0,
	reset: function(){
		timer.time = 0;
		$("#timer").text("00:00")
	},
}
// var timeRemaining= 15;
// var showTime= setInterval(function(){
//     timeRemaining--;
//     $("#timer").text("00:"+ timeRemaining);
//     if(timeRemaining <= 0)
//         clearInterval(showTime);
//     },1000);

timer.reset();
showQuestion();
selectAnswer();
$("#mainImage").click(startTriva);

function startTriva() {
	start = setInterval(nextQuestion, 1000 * 5)
}

function showQuestion() {
	$("#displayQuestion").html(trivia[count].question + "<br><br>" + trivia[count].options);
}

function nextQuestion() {
	count++;
	$("displayQuestion").empty();
	setTimeout(showQuestion, 1000);
	if (count === trivia.length) {
		stop();
	}
}

function selectAnswer() {
	$("#answerA").click(function () {
		if (this.id === "answerA") {
			console.log("A chosen");
		};
	});
		$("#answerB").click(function () {
		if (this.id === "answerB") {
			console.log("B chosen");
		};
	});
		$("#answerC").click(function () {
			if (this.id === "answerC") {
				console.log("C chosen");
	};
});
}



function stop() {
	clearInterval(start);
}