'use strict';
const querySelector = function (className) {
  return document.querySelector(className);
};

const modal = querySelector('.modal');
const btnCloseModal = querySelector('.close-modal');
const overlay = querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
