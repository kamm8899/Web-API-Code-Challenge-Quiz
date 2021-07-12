var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["A.strings", "B.booleans", "C.alerts", "D.numbers"],
    answer: "C.alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["A.quotes", "B.curly brackets", "C.parentheses", "D.square brackets"],
    answer: "C.parentheses",
  },
  {
    question:
      "Javascript is a .........-side programming language",
    choices: ["A.Client", "B.Server", "C.Both", "D.None"],
    answer: "C.Both",
  },
 
  {
    question:
      "Which of the following will write message 'Hello DataFlair!' in an alert Box?",
    choices: ["A. alertBox('Hello DataFlair!')", "B. alert(Hello DataFlair!", "C.msgAlert('Hello DataFlair')", "D. alert('Hello DataFlair!');"],
    answer: "D. alert('Hello DataFlair!')",
  },
  {
  question:
    "How do you find the minimum of x and y using JavaScript",
  choices: ["A.min(x,y)", "B. Math.min(x,y)", "C. Math.min(xy)", "D. min(xy)"],
  answer: "B.Math.min(x,y)",
  },
  {
    question:
      "Which of the following statements will throw an error? ",
    choices: ["A.var fun = function bar(){}", "B.var fun = function bar {}", "C.function fn (){}"],
    answer: "B. var fun = function bar {}",
    },
    {
      question:
        "If the value of x is 40, then what is the output of the following program?(x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”)",
      choices: ["A. ReferenceError", "B. Divisible by 10", "C. Not divisible by 10", "D. None of the above"],
      answer: "B. Divisible by 10",
      },
      {
        question:"Which JavaScript label catches all the values, except for the ones specified?",
        choices: ["A. catch", "B. label", "C. try", "D. default"],
        answer: "D. default",
        },

        {
          question:"Which are the correct 'if' statements to execute certain code if 'x' equal to 2? ",
          choices: ["A. if(x 2)", "B. if(x=2)", "C. if(x==2)", "D. if(x!=2)"],
          answer: "if(x==2)",
          },
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");
//added variable for email input
var initialsInput = document.querySelector('#initial');
var saveScoreButton = document.querySelector('#btn-save-highscore');
var startButton = document.querySelector('#btn-start');
var gameContainer= document.querySelector('#game');
var welcomeContainer= document.querySelector('#home');
var saveContainer= document.querySelector('#save');
var gamerInitial = document.querySelector('#gamer-initials');
var endScore = document.querySelector('#end-score');


//setting the Index and counter at 0
var questionIndex = 0;
var score = 0;
//setting time to 20 seconds
var time = 20;
var intervalId;


function endQuiz() {
  gameContainer.classList.add('hidden');
  saveContainer.classList.remove('hidden');

  clearInterval(intervalId);
  console.log(intervalId);
  var body = document.body;
  var finalscore = document.querySelector('#endScore');
  finalscore.innerHTML = "Game over, Your final score is:  " + score;
}

//add logic to save score and email to highscore
function saveScore(){
  
  initial = document.querySelector("#initials").value;
  console.log(initial);
  localStorage.setItem('score', score);
  localStorage.setItem('initial', initial);

  console.log(localStorage.getItem('score'));
  console.log(localStorage.getItem('initial'));

  displayHighScore();

}



function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time === 0) {
    endQuiz();
  }
}

function renderQuestion() {
  //welcomeContainer.classList.add('hidden');
  //gameContainer.classList.remove('hidden');
  
  //if (time <= 0) {
    //updateTime();
    //return;
  //}

  //intervalId = setInterval(updateTime, 1000);
  
  questionEl.textContent = questions[questionIndex].question;
  //console.log(questions[questionIndex].question);
  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLength = choices.length;


  for (var i = 0; i < choicesLength; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }

}

function nextQuestion() {
  questionIndex++;
  if (questionIndex >= questions.length -1) {
    time = 0;
    //added clear Interval
    endQuiz();
  }
  else{
    renderQuestion();
  }
  
}

function checkAnswer(event) {
  //clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      score++;
    } else{
      questionResultEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }

  setTimeout(nextQuestion, 2000);
}

function displayHighScore (){
document.querySelector("#high-score").classList.remove('hidden');
saveContainer.classList.add('hidden');
  
endScore.textContent = localStorage.getItem('score');
gamerInitial.textContent = localStorage.getItem('initial');

}

saveScoreButton.addEventListener('click', function(event){
  event.preventDefault();
  saveScore();
} );

console.log(saveScoreButton);
optionListEl.addEventListener("click", checkAnswer);
startButton.addEventListener('click', function(){
  intervalId = setInterval(updateTime, 1000);
  welcomeContainer.classList.add('hidden');
  gameContainer.classList.remove('hidden');
  renderQuestion();

});

//renderQuestion();

//Questions for Office hours:
//1. Highscore button at the beginning
// **2. How do I get the score, and the name on the same line.
//***Styles how do I get the High Score button at the same line as the Time
//I need the time on the first page
//*Why does it not save all my highScores, only the most recent one? 