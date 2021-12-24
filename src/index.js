// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import { displayBoard } from './board.js';
import { addScoreBox } from './addScore.js';

const title = document.getElementById('titleWrapper');
const boardTitle = document.createElement('h1');
boardTitle.classList.add('m-5', 'display-1');
boardTitle.innerText = 'Leaderboard';
title.appendChild(boardTitle);
const wrapper = document.getElementById('wrapper');
wrapper.classList.add('d-flex');
wrapper.appendChild(displayBoard());
wrapper.appendChild(addScoreBox());

let array = [];

const refresh = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0UYF7zdR8LqZOMhQS6dN/scores/',
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );
  const scores = await response.json();
  return scores;
};

const refreshTable = document.getElementById('refreshBttn');
refreshTable.addEventListener('click', () => {
  refresh()
    .then((serverData) => {
      array = serverData.result;
      const tableBody = document.getElementById('tableBody');
      tableBody.innerHTML = '';
      for (let i = 0; i < array.length; i += 1) {
        const player = document.createElement('tr');
        player.innerHTML = `<td>${array[i].user}: ${array[i].score}</td>`;
        tableBody.appendChild(player);
      }
    });
});

const initArr = () => {
  refresh()
    .then((serverData) => {
      array = serverData.result;
      const tableBody = document.getElementById('tableBody');
      tableBody.innerHTML = '';
      for (let i = 0; i < array.length; i += 1) {
        const player = document.createElement('tr');
        player.innerHTML = `<td>${array[i].user}: ${array[i].score}</td>`;
        tableBody.appendChild(player);
      }
    });
};

const nameInput = document.getElementById('yourName');
const scoreInput = document.getElementById('yourScore');
const submitBttn = document.getElementById('submitBttn');

submitBttn.addEventListener('click', async () => {
  const currentScore = {
    user: nameInput.value,
    score: scoreInput.value,
  };
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0UYF7zdR8LqZOMhQS6dN/scores/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentScore),
    },
  );
  const message = await response.json();
  nameInput.value = '';
  scoreInput.value = '';
  return message;
});

initArr();