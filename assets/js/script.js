import questions from "./questions.js";
import loadRules from "./rules.js";

//Variables for the Quiz

let questionCounter = 0
let pointScore = 0;
let acceptingAnswers = true;
let currentQuestion = {};
let availableQuestions = [];
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 15;

// Element Varibles Functions

const hideHomepage = document.getElementById('homepage_section');
const question = document.getElementById('question');
const option = Array.from(document.querySelectorAll('.option'));
const scoreText = document.getElementById('score');
const endScore = document.getElementById('end_score');
const processCounter = document.getElementById('processCounter');
const username = document.getElementById('username');
const highScoreList = document.getElementById('highScoreList');
let show_score_rolex = document.getElementById('quiz_finished');

// Element Variables Rules 

const showHomepage = document.getElementById('homepage_section');
const quizContainer = document.getElementById('quiz-container');
const openQuiz = document.getElementById('play-button');
const closeQuiz = document.getElementById('exit1');
const closeEndOfQuiz = document.getElementById('exit2');
const saveScore = document.getElementById('saveScore');
const playAgain = document.getElementById('playAgain');
const rules_container = document.getElementById('rules_container');
const openRules = document.getElementById('rule-button');
const closeRules = document.getElementById('exit');
const leaderboard = document.getElementById('leaderboard');
const openLeaderBoard = document.getElementById('leader-button');
const closeLeaderBoard = document.getElementById('exit3');
const eraseLeaderboard = document.getElementById('erase');


// Play button to open quiz and button to exit //

openQuiz.addEventListener('click', () => {
    quizContainer.classList.add('show');
    hideHomepage.style.display = "none";
    scoreText.innerText = 0;
    startQuiz()
});

closeQuiz.addEventListener('click', () => {
    quizContainer.classList.remove('show');
    showHomepage.style.display = "flex";
});

// Play again button to reset and open quiz //
playAgain.addEventListener('click', () => {
    quizContainer.classList.add('show');
    show_score_rolex.style.display = "none";
    scoreText.innerText = 0;
    startQuiz();
});

// Too close end of quiz //
closeEndOfQuiz.addEventListener('click', () => {
    show_score_rolex.style.display = "none";
    showHomepage.style.display = "flex";
});

// Functions //

// Function - start quiz, setting score and question count //
function startQuiz() {
    availableQuestions = [...questions];
    questionCounter = 0;
    pointScore = 0;
    renderNewQuestion();
}

// Function torender new questions resetting the question counter when quiz is complete or exited //
function renderNewQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        let hide_quiz_container = document.getElementById('quiz-container');
        hide_quiz_container.classList.remove('show');
        show_score_rolex.style.display = "flex";
        hideHomepage.style.display = "none";
        questionCounter = 0;
    }

    // Process counter increase as the question counter increases //
    questionCounter++;
    processCounter.innerText = questionCounter + "/" + MAX_QUESTIONS;

    // Variable to show random questions //
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    console.log(currentQuestion);
    if (currentQuestion != {}) {
        question.innerText = currentQuestion.question;
    }

    // Adding answers to relevant question //
    option.forEach(option => {
        const number = option.dataset.number;
        option.innerText = currentQuestion['option' + number];
    });

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true;
}

// Check if the correct answer has been picked //
option.forEach(option => {
    option.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        //Check to see if answer is correct or incorrect //
        let classtoApply = selectedAnswer == currentQuestion.correct ? 'correct' : 'incorrect';

        // If the correct answer is picked the points are increased by one //
        if (classtoApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }
        // Changes the color of the the answer depending whether it is correct or incorrect //
        selectedChoice.classList.add(classtoApply);

        //Reset and present next question //
        setTimeout(() => {
            selectedChoice.classList.remove(classtoApply);
            renderNewQuestion();
        }, 1000);
    });
});

// Function to increase the userscore as question
function incrementScore(num) {
    pointScore += num;
    scoreText.innerText = pointScore;

    endScore.innerText = pointScore;
} 

// Quiz completed final score section //
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Save user score to local storage //
document.getElementById("saveScore").onclick = function () {
    saveHighScore();};

function saveHighScore() {
    const score = {
        score: endScore.innerText,
        name: username.value
    };

    highScores.push(score);

    // Function to sort highscore from high to low and spice to show only top 6 highescores
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(6);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    // Return to homepage section when user has saved score  
    window.location.assign('index.html');

}

// Use map to convert the arrays items to strings and into new array //
highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name}  -  ${score.score}</li>`;
})
    .join("");

// Event listener to start quiz once DOM is loaded //
document.addEventListener("DOMContentLoaded", function () {
    
// initiate rules before everything
    loadRules(); 
    startQuiz();
});

