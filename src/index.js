document.addEventListener("DOMContentLoaded", () => {
  /************  HTML ELEMENTS  ************/
  // View divs
  const quizView = document.querySelector("#quizView");
  const endView = document.querySelector("#endView");

  // Quiz view elements
  const progressBar = document.querySelector("#progressBar");
  const questionCount = document.querySelector("#questionCount");
  const questionContainer = document.querySelector("#question");
  const choiceContainer = document.querySelector("#choices");
  const nextButton = document.querySelector("#nextButton");
 // restart button
 const restartButton = document.querySelector("#restartButton");

  // End view elements
  const resultContainer = document.querySelector("#result");

  /************  SET VISIBILITY OF VIEWS  ************/

  // Show the quiz view (div#quizView) and hide the end view (div#endView)
  quizView.style.display = "block";
  endView.style.display = "none";

  /************  QUIZ DATA  ************/

  // Array with the quiz questions
  const questions = [
    new Question(
      "What is the capital of France?",
      ["Miami", "Paris", "Oslo", "Rome"],
      "Paris",
      1
    ),
    new Question(
      "Who created JavaScript?",
      ["Plato", "Brendan Eich", "Lea Verou", "Bill Gates"],
      "Brendan Eich",
      2
    ),/*
    new Question(
      "What is the mass–energy equivalence equation?",
      ["E = mc^2", "E = m*c^2", "E = m*c^3", "E = m*c"],
      "E = mc^2",
      3
    ),
    new Question(
      "What is the chemical symbol for gold?",
      ["Au", "Ag", "Pb", "Fe"],
      "Au",
      1
    ),
    new Question(
      "Who developed the theory of general relativity?",
      ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
      "Albert Einstein",
      2
    ),
    new Question(
      "Which planet is known as the Red Planet?",
      ["Venus", "Mars", "Jupiter", "Saturn"],
      "Mars",
      1
    ),
    new Question(
      "What is the powerhouse of the cell?",
      ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
      "Mitochondria",
      1
    ),
    new Question(
      "What is the derivative of sin(x)?",
      ["cos(x)", "-cos(x)", "-sin(x)", "tan(x)"],
      "cos(x)",
      2
    ),
    new Question(
      "What is the capital of Japan?",
      ["Beijing", "Seoul", "Bangkok", "Tokyo"],
      "Tokyo",
      1
    ),
    new Question(
      "Who wrote 'To be, or not to be'?",
      ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      "William Shakespeare",
      2
    ),
    new Question(
      "What is the speed of light in vacuum?",
      ["299,792,458 m/s", "150,000,000 m/s", "3,000,000 m/s", "30,000 m/s"],
      "299,792,458 m/s",
      3
    ),
    new Question(
      "Which element has the atomic number 1?",
      ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"],
      "Hydrogen",
      1
    ),
    new Question(
      "What is the integral of x^2?",
      ["(1/3)x^3 + C", "(1/2)x^3 + C", "x^3 + C", "(1/4)x^3 + C"],
      "(1/3)x^3 + C",
      3
    ),*/

  ];
  const quizDuration = 120; // 120 seconds (2 minutes)

  /************  QUIZ INSTANCE  ************/

  // Create a new Quiz instance object
  const quiz = new Quiz(questions, quizDuration, quizDuration);
  // Shuffle the quiz questions
  quiz.shuffleQuestions();

  /************  SHOW INITIAL CONTENT  ************/

  // Convert the time remaining in seconds to minutes and seconds, and pad the numbers with zeros if needed
  const minutes = Math.floor(quiz.timeRemaining / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (quiz.timeRemaining % 60).toString().padStart(2, "0");

  // Display the time remaining in the time remaining container
  const timeRemainingContainer = document.getElementById("timeRemaining");
  timeRemainingContainer.innerText = `${minutes}:${seconds}`;

  // Show first question
  showQuestion();

  /************  TIMER  ************/

  let timer;

  /************  EVENT LISTENERS  ************/

  nextButton.addEventListener("click", nextButtonHandler);
  // Restart button listener
  restartButton.addEventListener("click", restartButtonHandler);

  /************  FUNCTIONS  ************/

  // showQuestion() - Displays the current question and its choices
  // nextButtonHandler() - Handles the click on the next button
  // showResults() - Displays the end view and the quiz results

  function showQuestion() {
    // If the quiz has ended, show the results
    if (quiz.hasEnded()) {
      showResults();
      return;
    }

    // Clear the previous question text and question choices
    questionContainer.innerText = "";
    choiceContainer.innerHTML = "";

    // Get the current question from the quiz by calling the Quiz class method `getQuestion()`
    const question = quiz.getQuestion();
    // Shuffle the choices of the current question by calling the method 'shuffleChoices()' on the question object
    question.shuffleChoices();

    // YOUR CODE HERE:
    //
    // 1. Show the question
    // Update the inner text of the question container element and show the question text
    let interationOne = document.querySelector("#question");
    interationOne.innerHTML = question.text;

    // 2. Update the green progress bar
    // Update the green progress bar (div#progressBar) width so that it shows the percentage of questions answered

    //progressBar.style.width = `20%`; // This value is hardcoded as a placeholder

    /*let progressBar = document.getElementById("progressBar");
    let width = 10;

    let interval = setInterval(function(){
      if(width >= 100) {
        clearInterval(interval);
      } else {
        width ++;
        progressBar.style.width = width + '%';
        progressBar.textContent = width + '%';
      }
    }, ); */

    let currentIndex = quiz.currentQuestionIndex + 1;
    let totalQuestions = quiz.questions.length;
    let progress = (currentIndex / totalQuestions) * 100;
    console.log(`Progress: ${progress}%`);
    progressBar.style.width = `${progress}%`;

    // 3. Update the question count text
    // Update the question count (div#questionCount) show the current question out of total questions

    questionCount.innerText = `Question ${currentIndex} of ${totalQuestions}`; //  This value is hardcoded as a placeholder

    // 4. Create and display new radio input element with a label for each choice.
    // Loop through the current question `choices`.
    // For each choice create a new radio input with a label, and append it to the choice container.
    // Each choice should be displayed as a radio input element with a label:
    /* 
          <input type="radio" name="choice" value="CHOICE TEXT HERE">
          <label>CHOICE TEXT HERE</label>
        <br>
      */
    // Hint 1: You can use the `document.createElement()` method to create a new element.
    // Hint 2: You can use the `element.type`, `element.name`, and `element.value` properties to set the type, name, and value of an element.
    // Hint 3: You can use the `element.appendChild()` method to append an element to the choices container.
    // Hint 4: You can use the `element.innerText` property to set the inner text of an element.

    question.choices.forEach((choice, index) => {
      let radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "choice";
      radioInput.value = choice;
      radioInput.id = `choice${index}`;

      let radioLabel = document.createElement("label");
      radioLabel.setAttribute("for", `choice${index}`);
      radioLabel.innerText = choice;

      choiceContainer.appendChild(radioInput);
      choiceContainer.appendChild(radioLabel);
      choiceContainer.appendChild(document.createElement("br"));
    });
  }

  function nextButtonHandler() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    const selectedAnswer = selectedChoice ? selectedChoice.value : null;

    if (selectedAnswer) {
      if (quiz.checkAnswer(selectedAnswer)) {
        console.log("Correct!");
      } else {
        console.log("Wrong!");
      }
      console.log(`Current Score: ${quiz.correctAnswers}`);
      quiz.moveToNextQuestion();
      showQuestion();
    } else {
      alert("Please select an answer before proceeding!");
    }
  }

  //
  // YOUR CODE HERE:
  //
  // 1. Get all the choice elements. You can use the `document.querySelectorAll()` method.

  // 2. Loop through all the choice elements and check which one is selected
  // Hint: Radio input elements have a property `.checked` (e.g., `element.checked`).
  //  When a radio input gets selected the `.checked` property will be set to true.
  //  You can use check which choice was selected by checking if the `.checked` property is true.

  // 3. If an answer is selected (`selectedAnswer`), check if it is correct and move to the next question
  // Check if selected answer is correct by calling the quiz method `checkAnswer()` with the selected answer.
  // Move to the next question by calling the quiz method `moveToNextQuestion()`.
  // Show the next question by calling the function `showQuestion()`.

  function showResults() {
    // YOUR CODE HERE:
    const quizView = document.getElementById("quizView");
    // 1. Hide the quiz view (div#quizView)
    quizView.style.display = "none";

    // 2. Show the end view (div#endView)
    const endView = document.getElementById("endView");
    endView.style.display = "flex";

    // 3. Update the result container (div#result) inner text to show the number of correct answers out of total questions
    resultContainer.innerText = `You scored ${quiz.correctAnswers} out of ${quiz.questions.length} correct answers!`;

    // resultContainer.innerText = `You scored 1 out of 1 correct answers!`; // This value is hardcoded as a placeholder
  }
// button restart
function restartButtonHandler() {
  quizView.style.display = "flex";
  endView.style.display = "none";
  quiz.currentQuestionIndex = 0;
  quiz.correctAnswers = 0;
  quiz.shuffleQuestions();
  showQuestion();
};




});

