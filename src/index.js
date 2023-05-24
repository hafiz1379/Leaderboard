import './style.css';
import { refresh, addYourData } from './modules/scores.js';

const $ = document;

const refreshBtn = $.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  refresh();
});

const submitBtn = $.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
  addYourData();
});