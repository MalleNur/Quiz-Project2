
//Element Variables
const hideHomepage = document.getElementById('homepage_section');
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
const highScoreList = document.getElementById('highScoreList');

// Rules button to open rules section and button to exit //

function loadRules() {

    openRules.addEventListener('click', () => {
        rules_container.classList.add('show');
        hideHomepage.style.display = "none";
    });

    closeRules.addEventListener('click', () => {
        rules_container.classList.remove('show');
        showHomepage.style.display = "flex";
    });

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

// Open leaderboard with leaderboard button //

    openLeaderBoard.addEventListener('click', () => {
        leaderboard.classList.add('show');
        hideHomepage.style.display = "none";
    });

    closeLeaderBoard.addEventListener('click', () => {
        leaderboard.classList.remove('show');
        showHomepage.style.display = "flex";
    });

// Enter the username so that the save username button to be enabled //

    username.addEventListener("keyup", () => {
        console.log(username.value);
        saveScore.disabled = !username.value;
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

// To erase leaderboard //
    eraseLeaderboard.addEventListener('click', () => {
        localStorage.clear('highscores');
        window.location.reload();
    });
}

export default loadRules;
