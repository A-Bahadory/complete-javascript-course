'use strict';
const elementSelector = function (className) {
  return document.querySelector(className);
};
const addClass = function (tagName, className) {
  return tagName.classList.add(className);
};

const deleteClass = function (className, deleteClass) {
  const element = document
    .querySelector(className)
    .classList.remove(deleteClass);
  return element;
};

const modal = elementSelector('.modal');
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
