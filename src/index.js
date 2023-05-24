import './style.css';
import { refresh, addYourData } from './modules/tasks.js';

const refreshBtn = document.querySelector('.refresh');
refreshBtn.addEventListener('click', () => {
  refresh();
});

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {
  addYourData();
});