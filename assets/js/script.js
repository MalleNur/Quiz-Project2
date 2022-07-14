

// Quiz qestions //
https://opentdb.com/api.php?amount=15&category=12&difficulty=medium&type=multiple

let questions = [
    {
        question: 'Who is the artist of the recent new album the Uncanny Valley?',
        option1: "Carpenter Brut",
        option2: "GOST",
        option3: "Perturbator",
        option4: "Dan Terminus",
        correct: 3,
    },
    {
        question: 'The song "Twin Size Mattress" was written by which band?',
        option1: "The Front Bottoms",
        option2: "Twenty One Pilots",
        option3: "The Wonder Years",
        option4: "The Smith Street Band",
        correct: 1,
    },
    {
        question: 'Who is the Pink Floyd song "Shine On You Crazy Diamond" written about?',
        option1: "John Lennon",
        option2: "David Gilmour",
        option3: "Floyd",
        option4: "Syd Barrett",
        correct: 4,
    },
    {
        question: 'The 1952 musical composition, composed by prolific American composer John Cage, is mainly comprised of what sound?',
        option1: "Silence",
        option2: "Farts",
        option3: "People talking",
        option4: "Cricket chirps",
        correct: 1,
    },
    {
        question: 'Which country does the power metal band "Sabaton" originate from?',
        option1: "Germany",
        option2: "United States",
        option3: "Sweden",
        option4: "Finland",
        correct: 3,
    },
    {
        question: 'Which of these is NOT a name of an album released by American rapper Pitbull?',
        option1: "Dale",
        option2: "Global Warming",
        option3: "Armando",
        option4: "Welcome to Miami",
        correct: 4,
    },
    {
        question: 'Which of these bands was a featuring artist in Compton rapper Kendrick Lamars 2017 album, DAMN.?',
        option1: "U2",
        option2: "Radiohead",
        option3: "Coldplay",
        option4: "Bon Jovi",
        correct: 1,
    },
    {
        question: 'Which of these songs did Jimi Hendrix cover?',
        option1: "Sgt. Peppers Lonely Hearts Club Band",
        option2: "All of these songs",
        option3: "All Along the Watchtower",
        option4: "House of the Rising Sun",
        correct: 2,
    },
    {
        question: 'Where did the British Boy Band &quot;Bros&quot; come from?',
        option1: "Guildford",
        option2: "Aldershot",
        option3: "Camberley",
        option4: "Bagshot",
        correct: 3,
    },
    {
        question: 'From which country does the piano originate?',
        option1: "France",
        option2: "Italy",
        option3: "Germany",
        option4: "Austria",
        correct: 2, 
    },
    {
        question: 'Which of these Johns was murdered by gunshots outside the Dakota in New York in 1980?',
        option1: "John Lennon",
        option2: "Johnny Thunders",
        option3: "John Denver",
        option4: "John Cascella",
        correct: 1,
    },
    {
        question: 'According to the RIAA: Which artist has sold the most albums by the million?',
        option1: "Elvis Presley",
        option2: "Michael Jackson",
        option3: "The Beatles",
        option4: "Pink Floyd",
        correct: 3,
    },
    {
        question: 'Which song previously recorded by Elvis Presley was covered by UB40 with a reggae beat?',
        option1: "Jailhouse Rock",
        option2: "Can't Help Falling in Love",
        option3: "In the Ghetto",
        option4: "Wooden Heart",
        correct: 2,
    },
    {
        question: 'What was Britney Spears debut single?',
        option1: "Oops!... I Did It Again",
        option2: "Toxic",
        option3: "(You Drive Me) Crazy",
        option4: "...Baby One More Time",
        correct: 4,
    },
    {
        question: "On the cover of Abbey Road which of the Beatles is not wearing shoes?",
        option1: "Paul McCartney",
        option2: "Ringo Starr",
        option3: "John Lennon",
        option4: "George Harrison",
        correct: 1,
    },
   

]

//Variables for the Quiz

let questionCounter = 0
let pointScore = 0;
let acceptingAnswers = true;
let currentQuestions = {};
let availableQuestions = [];
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 15;

// Element Varibles

const showHomepage = document.getElementById('homepage_section');
const hideHomepage = document.getElementById('homepage_section');
const quizContainer = document.getElementById('quiz_container');
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

// Rules button to open rules section and button to exit //

openRules.addEventListener('click', () => {
    rules_container.classList.add('show');
    hideHomepage.style.display="none";
});

closeRules.addEventListener('click', () => {
    rules_container.classList.remove('show');
    showHomepage.style.display="flex";
});

// Play button to open quiz and button to exit //


openQuiz.addEventListener('click', () => {
    quizContainer.classList.add('show');
    hideHomepage.style.display="none";
    scoreText.innerText = 0;
    startQuiz()
});

closeQuiz.addEventListener('click', () => {
    quizContainer.classList.remove('show');
    showHomepage.style.display="flex";
});

// Open leaderboard with leaderboard button //

openLeaderBoard.addEventListener('click', () => {
    leaderboard.classList.add('show');
    hideHomepage.style.display="none";
});

closeLeaderBoard.addEventListener('click', () => {
    leaderboard.classList.remove('show');
    showHomepage.style.display="flex";
});

// Enter the username so that the save username button to be enabled //

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScore.disabled = !username.value;
});

// 






async function loadQuestion(){
    const APIUrl = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple';
    const result = await fetch(`${APIUrl}`);
    const data = await result.json();
    // console.log(data.results[0]);
    showQuestion(data.results[0]);
}

function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionsList = incorrectAnswer;
    optionsList.splice(Math.floor(Math.random() * (incorrectAnswer.length + 1)), 0, correctAnswer);
    console.log(optionsList);
    console.log(correctAnswer); //inserting correct answer in random position in the options list

    _question.innerHTML =`${data.question} <br> <span class = "category">$ {data.category} </span>`;
    -optionsList.innerHTML = `
        ${optionsList.map((option, index) => `
            <li> ${index + 1}. <span> ${option} </span> </li>
            `).join('')}
}

loadQuestion(); */