const $ = document;

const getData = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ljHb2cGHsxBGPX7TCeS5d/scores/');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const refresh = async () => {
  const data = await getData();

  data.result.sort((a, b) => b.score - a.score);

  const scoreContainer = $.querySelector('.score-container');

  scoreContainer.innerHTML = '';

  for (let i = 0; i < data.result.length; i += 1) {
    const html = `<li>${data.result[i].user}: ${data.result[i].score}</li>`;

    scoreContainer.innerHTML += html;
  }
};

export const addYourData = () => {
  try {
    const inputName = $.querySelector('.inputName');
    const inputScore = $.querySelector('.score-input');

    if (inputName.value !== '' && inputScore.value !== '') {
      const dataToSend = {
        user: inputName.value,
        score: parseInt(inputScore.value, 10),
      };

      fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ljHb2cGHsxBGPX7TCeS5d/scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
    }

    inputName.value = '';
    inputScore.value = '';
  } catch (error) {
    return error;
  }

  return null;
};