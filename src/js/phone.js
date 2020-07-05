import * as blur from './index.js'

const openButton = document.querySelector('.button--checkstatus');
const closeButton = document.querySelector('.phone__button');
const phone = document.querySelector('.phone');

const open = () => {
  phone.classList.add("phone--visible");
  document.body.style.overflow = "hidden";
  blur.body.classList.toggle('blur--visible');
}

const close = () => {
  phone.classList.remove("phone--visible");
  document.body.style.overflow = "";
  blur.body.classList.remove('blur--visible')
  blur.body.classList.toggle('blur--hidden');
}

export {
  open,
  close,
  phone as mBody,
  openButton,
  closeButton
};
