'use strict';
// ! *********** FOR LESSONS NAMES *********** //
// ? *********** FOR REGULAR COMMENTS *********** //
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');
const overLeft = document.querySelector('.overlay-left');
const overRight = document.querySelector('.overlay-right');

left.addEventListener('mouseenter', function () {
  container.classList.add('hover-left');
  overLeft.style.opacity = '0';
});

left.addEventListener('mouseleave', function () {
  container.classList.remove('hover-left');
  overLeft.style.opacity = '1';
});

right.addEventListener('mouseenter', function () {
  container.classList.add('hover-right');
  overRight.style.opacity = '0';
});

right.addEventListener('mouseleave', function () {
  container.classList.remove('hover-right');
  overRight.style.opacity = '1';
});
