const addScoreBox = () => {
  const addContainer = document.createElement('div');
  const addScoreTitle = document.createElement('h2');
  addScoreTitle.innerText = 'Add your score';
  addContainer.appendChild(addScoreTitle);
  const form = document.createElement('form');
  form.classList.add('d-flex', 'flex-column');
  const addName = document.createElement('input');
  addName.id = 'yourName';
  addName.classList.add('my-3', 'form-control');
  addName.placeholder = 'Your Name';
  const addScore = document.createElement('input');
  addScore.id = 'yourScore';
  addScore.classList.add('form-control');
  addScore.placeholder = 'Your Score';
  const submitBttn = document.createElement('button');
  submitBttn.id = 'submitBttn';
  submitBttn.innerText = 'Submit';
  submitBttn.type = 'button';
  submitBttn.style.margin = '50px 10px 20px 100px';
  submitBttn.classList.add('my-3', 'w-50', 'btn', 'btn-primary');
  form.appendChild(addName);
  form.appendChild(addScore);
  form.appendChild(submitBttn);
  addContainer.appendChild(form);
  return addContainer;
};

// eslint-disable-next-line import/prefer-default-export
export { addScoreBox };