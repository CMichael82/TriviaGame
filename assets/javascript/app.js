var correct = 0;
var incorrect = 0;
var unanswered = 0;
var trivia =[
	{question: "What color are aircraft black boxes?", 
	options:"a) Blue\n b) Yellow\n c) Orange", 
	answer: "c"},

	{question: "In which state was Tennessee Williams born?",
	options:"a) Kentucky\n b) Mississippi\n c) West Virginia",
	answer: "b"},

	{question: "How long is New Zealands Ninety Nine Mile Beach?", 
	options:"a) 99 miles\n b) 55 miles\n c) 111 miles", 
	answer: "b"},

	{question: "What is the main ingredient in Bombay Duck?",
	options:"a) Fish\n b) Steak\n c) Pork", 
	answer: "a"},

	{question: "What kind of animal is a prairie dog?", 
	options:"a) Rodent\n b) Marsupial\n c) Leporid", 
	answer: "a"},

	{question: "Where did the Spanish flu originate?", 
	options:"a) Peru\n b) Italy\n c) USA", 
	answer: "c"},

	{question: "In which country was the Caesar salad invented?", 
	options:"a)Spain\n b) Egypt\n c) Mexico", 
	answer: "c"},

	{question: "What nationality was Cleopatra, Queen of Eqypt?", 
	options:"a) Nigeria\n b) Greek\n c) Libyan", 
	answer: "b"},

	{question: "How long did the 100 years war last?", 
	options:"a) 88 years\n b) 116 years\n c) 107 years", 
	answer: "b"},

	{question: "In which country are Panama hats made?", 
	options:"a) Ecuador\n b) Portugal\n c) Brazil", 
	answer: "a"},
];

console.log(trivia[0].question);
console.log(trivia[0].options);
console.log(trivia[0].answer);
$("#displayQuestion").append(trivia[0].question);
$("#displayQuestion").append($("<br><br>"));
$("#displayQuestion").append(trivia[0].options);


