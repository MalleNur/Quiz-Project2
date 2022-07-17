
// Rules button to open rules section and button to exit //

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

export default rules;