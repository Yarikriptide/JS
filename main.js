function countLetterInString(letter, str) {
  const regex = new RegExp(letter, 'ig');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

function getRow(firstRow, secondRow) {
  let letter = prompt('Введите букву для подсчета:');

  if (!letter) {
    alert('Вы не ввели букву. Пожалуйста, введите букву и попробуйте снова.');
    return;
  }

  const firstRowCount = countLetterInString(letter, firstRow);
  const secondRowCount = countLetterInString(letter, secondRow);

  const message = `
    Количество букв "${letter}" в первой строке: ${firstRowCount}
    Количество букв "${letter}" во второй строке: ${secondRowCount}
  `;

  alert(message);
}

const countButton = document.getElementById('countButton');
countButton.addEventListener('click', () => {
  const firstRow = 'мама мыла раму';
  const secondRow = 'собака друг человека';
  getRow(firstRow, secondRow);
});
