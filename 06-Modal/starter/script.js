'use strict';
const elementSelector = function (className) {
  return document.querySelector(className);
};
const addClass = function (tagName, className) {
  return tagName.classList.add(className);
};

const deleteClass = function (className, deleteClass) {
  return document.querySelector(className).classList.remove(deleteClass);
};

const modal = elementSelector('.modal');
console.log(modal);
const btnCloseModal = elementSelector('.close-modal');
const overlay = elementSelector('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    deleteClass('.hidden', 'hidden');
    deleteClass('.hidden', 'hidden');
  });

btnCloseModal.addEventListener('click', function () {
  addClass(modal, 'hidden');
  addClass(overlay, 'hidden');
});

document.addEventListener('keydown', function (e) {
  const keyValue = e.key;
  if (keyValue === 'Escape' && !modal.classList.contains('hidden')) {
    addClass(modal, 'hidden');
    addClass(overlay, 'hidden');
  }
});
