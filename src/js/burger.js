import * as blur from './index.js'

const openButton = document.querySelector('.button--burger');
const closeButton = document.querySelector('.button--close');
const burger = document.querySelector('.burger');


const open = () => {
  burger.classList.add('burger--visible');
  document.body.style.overflow = "hidden";
  blur.body.classList.toggle('blur--visible');
}

const close = () => {
  burger.classList.remove('burger--visible');
  document.body.style.overflow = "";
  blur.body.classList.remove('blur--visible')
  blur.body.classList.toggle('blur--hidden');
}

export {
  open,
  close,
  burger as mBody,
  openButton,
  closeButton
};
