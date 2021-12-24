const displayBoard = () => {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('mx-5', 'w-50');
  const recentScoresContainer = document.createElement('div');
  const recentScoresTitle = document.createElement('h2');
  recentScoresTitle.innerText = 'Recent scores';
  recentScoresTitle.classList.add('mx-5', 'mb-0');
  const refreshBttn = document.createElement('button');
  refreshBttn.innerText = 'Refresh';
  refreshBttn.id = 'refreshBttn';
  refreshBttn.type = 'button';
  recentScoresContainer.style.display = 'flex';
  const scoreTable = document.createElement('table');
  scoreTable.classList.add(
    'table',
    'table-striped',
    'table-hover',
    'table-bordered',
    'mx-5',
    'mt-4',
    'w-75',
    'border',
    'border-secondary',
  );
  const tableBody = document.createElement('tbody');
  tableBody.id = 'tableBody';
  scoreTable.appendChild(tableBody);
  recentScoresContainer.appendChild(recentScoresTitle);
  recentScoresContainer.appendChild(refreshBttn);
  boardContainer.appendChild(recentScoresContainer);
  boardContainer.appendChild(scoreTable);

  return boardContainer;
};

// eslint-disable-next-line import/prefer-default-export
export { displayBoard };