'use strict';

const mainEl = document.getElementById('main');
const questionEl = document.getElementById('question');
const answer1El = document.getElementById('ans1');
const answer2El = document.getElementById('ans2');
const answer3El = document.getElementById('ans3');
const answer4El = document.getElementById('ans4');
const inputValueEl = document.querySelectorAll('.answerRadio');
const submitEl = document.getElementById('submit');

let currentData = 0;
let score = 0;

const data = [
  {
    question: 'Which language runs in a web browser ?',
    answer1: 'Java',
    answer2: 'C',
    answer3: 'Python',
    answer4: 'JavaScript',
    correct: 'answer4',
  },
  {
    question: 'What does CSS stand for ?',
    answer1: 'Central Style Sheets',
    answer2: 'Cascading Style Sheets',
    answer3: 'Cascading Simple Sheets',
    answer4: 'Cars SUVs Sailboats',
    correct: 'answer2',
  },
  {
    question: 'What does HTML stand for ?',
    answer1: 'Hypertext Markup Language',
    answer2: 'Hypertext Markdown Language',
    answer3: 'Hyperloop Machine Language',
    answer4: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'answer1',
  },
  {
    question: 'What year was JavaScript launched ?',
    answer1: 1996,
    answer2: 1995,
    answer3: 1994,
    answer4: 'none of the above',
    correct: 'answer2',
  },
];

const init = () => {
  addItem();
};

const radioDeselected = () => {
  inputValueEl.forEach((radio) => (radio.checked = false));
};

const inputValue = () => {
  let getSelectedValue;
  inputValueEl.forEach((input) => {
    if (input.checked) {
      getSelectedValue = input.id;
    }
  });
  return getSelectedValue;
};

submitEl.addEventListener('click', () => {
  const getSelectedValue = inputValue();

  if (getSelectedValue) {
    if (getSelectedValue === data[currentData].correct) {
      score++;
    }
    currentData++;
    if (currentData < data.length) {
      addItem();
    } else {
      mainEl.innerHTML = `
      <h1 class="result">You answered ${score}/${data.length} questions correctly</h1>
      <button class="submit" onclick="location.reload()">Reload</button>
            `;
    }
  }
});

const addItem = () => {
  radioDeselected();
  const currentQuizData = data[currentData];
  questionEl.innerText = currentQuizData.question;
  answer1El.innerText = currentQuizData.answer1;
  answer2El.innerText = currentQuizData.answer2;
  answer3El.innerText = currentQuizData.answer3;
  answer4El.innerText = currentQuizData.answer4;
};

init();
