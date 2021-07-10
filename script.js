var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question:
      "Javascript is a .........-side programming language",
    choices: ["Client", "Server", "Both", "None"],
    answer: "Both",
  },
  {
    question:
      "Javascript is a .........-side programming language",
    choices: ["Client", "Server", "Both", "None"],
    answer: "Both",
  },
  {
    question:
      "Which of the following will write message 'Hello DataFlair!' in an alert Box?",
    choices: ["alertBox('Hello DataFlair!')", "alert(Hello DataFlair!", "msgAlert('Hello DataFlair')", "alert('Hello DataFlair!');"],
    answer: "alert('Hello DataFlair!')",
  },
  {
  question:
    "How do you find the minimum of x and y using JavaScript",
  choices: ["min(x,y)", "Math.min(x,y)", "Math.min(xy)", "min(xy)"],
  answer: "Math.min(x,y)",
  },
  {
    question:
      "Which of the following statements will throw an error? ",
    choices: ["var fun = function bar(){}", "var fun = function bar {}", "function fn (){}"],
    answer: "var fun = function bar {}",
    },
    {
      question:
        "If the value of x is 40, then what is the output of the following program?(x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”)",
      choices: ["ReferenceError", "Divisible by 10", "Not divisible by 10", "None of the above"],
      answer: "Divisible by 10",
      },
      {
        question:"Which JavaScript label catches all the values, except for the ones specified?",
        choices: ["catch", "label", "try", "default"],
        answer: "default",
        },

        {
          question:"Which are the correct 'if' statements to execute certain code if 'x' equal to 2? ",
          choices: ["if(x 2)", "if(x=2)", "if(x==2)", "if(x!=2)"],
          answer: "if(x==2)",
          },
];

var questionEl = document.querySelector("#question");
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#question-result");
var timerEl = document.querySelector("#timer");

//setting the Index and counter at 0
var questionIndex = 0;
var correctCounter = 0;
//setting time to 20 seconds
var time = 20;
var intervalId;


function endQuiz() {
  clearInterval(intervalId);
  var body = document.body;
  body.innerHTML = "Game over, Your final score is:  " + correctCounter;
}

function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {
  //
  if (time == 0) {
    updateTime();
    return;
  }

  intervalId = setInterval(updateTime, 1000);
  
  questionEl.textContent = questions[questionIndex].question;

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
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCounter++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}


optionListEl.addEventListener("click", checkAnswer);
renderQuestion();


document
  .querySelector("#change-question")
  .addEventListener("click", function () {
    questionIndex++;
    renderQuestion();
  });


  //How do I do the view High score
  //WHEN the game is over
//THEN I can save my initials and score