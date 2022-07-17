import questions from "./questions.js";
import functions from "./functions.js";
import rules from "./rules.js";

//Variables for the Quiz

let questionCounter = 0
let pointScore = 0;
let acceptingAnswers = true;
let currentQuestion = {};
let availableQuestions = [];
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 15;

// Element Varibles

const showHomepage = document.getElementById('homepage_section');
const hideHomepage = document.getElementById('homepage_section');
const quizContainer = document.getElementById('quiz-container');
const openQuiz = document.getElementById('play-button');
const closeQuiz = document.getElementById('exit1');
const question = document.getElementById('question');
const option = Array.from(document.querySelectorAll('.option'));
const closeEndOfQuiz = document.getElementById('exit2');
const scoreText = document.getElementById('score');
const endScore = document.getElementById('end_score');
const saveScore = document.getElementById('saveScore');
const processCounter = document.getElementById('processCounter');
const playAgain = document.getElementById('playAgain');
const username = document.getElementById('username');
const rules_container = document.getElementById('rules_container');
const openRules = document.getElementById('rule-button');
const closeRules = document.getElementById('exit');
const leaderboard = document.getElementById('leaderboard');
const openLeaderBoard = document.getElementById('leader-button');
const closeLeaderBoard = document.getElementById('exit3');
const eraseLeaderboard = document.getElementById('erase');
const highScoreList = document.getElementById('highScoreList');
let show_score_rolex = document.getElementById('quiz_finished');



