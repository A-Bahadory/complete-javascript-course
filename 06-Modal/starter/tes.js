'use strict';

// Function to get an element by selector
const getElement = function (selector) {
  return document.querySelector(selector);
};

// Function to add a class to an element
const addClass = function (element, className) {
  element.classList.add(className);
};

// Function to remove a class from an element
const removeClass = function (element, className) {
  element.classList.remove(className);
};

// Function to toggle a class on an element
const toggleClass = function (element, className) {
  element.classList.toggle(className);
};

// Select elements
const modal = getElement('.modal');
const btnCloseModal = getElement('.close-modal');
const overlay = getElement('.overlay');
const btnOpenModal = document.querySelectorAll('.show-modal');

// Open modal function
const openModal = function () {
  removeClass(modal, 'hidden');
  removeClass(overlay, 'hidden');
};

// Close modal function
const closeModal = function () {
  addClass(modal, 'hidden');
  addClass(overlay, 'hidden');
};

// Add click event listeners to open modal buttons
btnOpenModal.forEach(button => {
  button.addEventListener('click', openModal);
});

// Add click event listener to close modal button
btnCloseModal.addEventListener('click', closeModal);

// Add click event listener to overlay to close modal
overlay.addEventListener('click', closeModal);
