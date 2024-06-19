const textAreaEl = document.querySelector('.form__textarea');
const counter = document.querySelector('.counter');

const inputHandler = () => {
  const maxNrChar = 150;
  const currNrChar = textAreaEl.value.length;
  const charLeft = maxNrChar - currNrChar;
  counter.textContent = charLeft;
};

textAreaEl.addEventListener('input', inputHandler);
