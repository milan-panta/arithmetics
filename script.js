const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const questionDiv = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitBtn = document.getElementById('submit');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

let score = 0;
let min = 1;
let max = 10;

function setRange() {
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);
  generateQuestion();
}

function generateQuestion() {
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  questionDiv.innerText = `${num1} x ${num2} = `;
}

function checkAnswer() {
  const questionText = questionDiv.innerText;
  const num1 = parseInt(questionText.substring(0, questionText.indexOf("x")).trim());
  const num2 = parseInt(questionText.substring(questionText.indexOf("x")+1, questionText.indexOf("=")).trim());
  const answer = num1 * num2;
  if (parseInt(answerInput.value) === answer) {
    resultDiv.innerText = 'Correct!';
    score++;
  } else {
    resultDiv.innerText = `Incorrect! The correct answer is ${answer}`;
  }
  scoreDiv.innerText = `Score: ${score}`;
  generateQuestion();
  answerInput.value = "";
  answerInput.focus();
}

minInput.addEventListener('change', setRange);
maxInput.addEventListener('change', setRange);
submitBtn.addEventListener('click', checkAnswer);
answerInput.addEventListener('input', (event) => {
  const inputVal = parseInt(event.target.value);
  const questionText = questionDiv.innerText;
  const num1 = parseInt(questionText.substring(0, questionText.indexOf("x")).trim());
  const num2 = parseInt(questionText.substring(questionText.indexOf("x")+1, questionText.indexOf("=")).trim());
  const answer = num1 * num2;
  if (inputVal === answer) {
    resultDiv.innerText = 'Correct!';
    score++;
    scoreDiv.innerText = `Score: ${score}`;
    generateQuestion();
    answerInput.value = "";
    answerInput.focus();
  }
});


setRange();
