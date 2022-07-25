/*
//Variables for quiz
let questionCounter = 0
let pointScore = 0;
let acceptingAnswers = true;
let currentQuestion = {};
let availableQuestions = [];
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 15;

// Element Varibles

const hideHomepage = document.getElementById('homepage_section');
const question = document.getElementById('question');
const option = Array.from(document.querySelectorAll('.option'));
const scoreText = document.getElementById('score');
const endScore = document.getElementById('end_score');
const processCounter = document.getElementById('processCounter');
const username = document.getElementById('username');
let show_score_rolex = document.getElementById('quiz_finished');

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

// Function to increase the userscore as question
function incrementScore(num) {
    pointScore += num;
    scoreText.innerText = pointScore;

    endScore.innerText = pointScore;
}

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

*/


//module.export  = {startQuiz, renderNewQuestion, incrementScore, saveHighScore}

//export {startQuiz, renderNewQuestion, incrementScore, saveHighScore}
