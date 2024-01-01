'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtn = document.querySelectorAll('.show-modal');
const Title = document.querySelector('.title').textContent;

const closeModal2 = function () {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
  console.log(Title);
};

const openModal = function () {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showBtn.length; i++) {
  showBtn[i].addEventListener('click', openModal);
}

closeBtn.addEventListener('click', closeModal2);
overlay.addEventListener('click', closeModal2);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') {
    console.log('eascpe was pressed');
    if (!model.classList.contains('hidden')) {
      closeModal2();
    }
  }
});

// const closeModal = function (popclose) {
//   popclose.addEventListener('click', function () {
//     model.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
// };
