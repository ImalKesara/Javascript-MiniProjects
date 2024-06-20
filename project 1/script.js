const textAreaEl = document.querySelector('.form__textarea');
const counter = document.querySelector('.counter');
const formEl = document.querySelector('.form');
const feedbacklistEL = document.querySelector('.feedbacks');
const submitBtnEl = document.querySelector('.submit-btn');

const inputHandler = () => {
  const maxNrChar = 150;
  const currNrChar = textAreaEl.value.length;
  const charLeft = maxNrChar - currNrChar;
  counter.textContent = charLeft;
};

textAreaEl.addEventListener('input', inputHandler);

// submit component

const submitHanlder = (event) => {
  event.preventDefault();
  const text = textAreaEl.value;
  if (text.includes('#') && text.length >= 5) {
    formEl.classList.add('form--valid');
    setTimeout(() => {
      formEl.classList.remove('form--valid');
    }, 1000);
  } else {
    formEl.classList.add('form--invalid');
    setTimeout(() => {
      formEl.classList.remove('form--invalid');
    }, 1000);
    textAreaEl.focus();
    return;
  }
  const hashtag = text.split(' ').find((str) => str.includes('#'));
  const company = hashtag.substring(1);
  const badgetLetter = company.substring(0, 1).toUpperCase();
  const upvoteCount = 0;
  const daysAgo = 0;

  const feedbackHtml = `
        <li class="feedback">
          <button class="upvote">
              <i class="fa-solid fa-caret-up upvote__icon"></i>
              <span class="upvote__count">${upvoteCount}</span>
          </button>
          <section class="feedback__badge">
              <p class="feedback__letter">${badgetLetter}</p>
          </section>
          <div class="feedback__content">
              <p class="feedback__company">${company}</p>
              <p class="feedback__text">${text}</p>
          </div>
          <p class="feedback__date">${daysAgo === 0 ? 'New' : `${daysAgo}d`}</p>
      </li>
  `;

  feedbacklistEL.insertAdjacentHTML('beforeend', feedbackHtml);
  textAreaEl.value = '';
  submitBtnEl.blur();
  counter.textContent = '150';
};

formEl.addEventListener('submit', submitHanlder);
