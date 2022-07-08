// https://opentdb.com/api.php?amount=10&category=12&difficulty=medium&type=multiple


const _question = document.getElementById('question');
const _options = document.querySelector('.quiz-options');

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

loadQuestion();