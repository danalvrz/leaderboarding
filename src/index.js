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