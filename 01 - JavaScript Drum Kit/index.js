'use strict';

console.log('Hello world!');

// const expand = (event) => {
//   event.target.classList.add('playing');
// };

// const keyElms = document.querySelectorAll('.key');
// for (let i = 0; i < keyElms.length; i++) {
//   keyElms[i].addEventListener('click', expand);
// }

const highlightAndPlay = (event) => {
  const keySound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const keyAnimation = document.querySelector(
    `.key[data-key="${event.keyCode}"]`,
  );
  if (!keySound) return; //stop the function if thhere is no audio elemnt with the keyCode
  keySound.currentTime = 0; //rewind to the start
  keySound.play();
  keyAnimation.classList.add('playing');
};

const removeTransition = (event) => {
  if (event.propertyName !== 'transform') return; // skip if it's not transform
  event.target.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', highlightAndPlay);
