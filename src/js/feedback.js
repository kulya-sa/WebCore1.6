import * as blur from "./index.js";

const openButton = document.querySelector(".button--repair");
const closeButton = document.querySelector(".feedback__button");
const feedback = document.querySelector(".feedback");

const open = () => {
  feedback.classList.add("feedback--visible");
  document.body.style.overflow = "hidden";
  blur.body.classList.toggle("blur--visible");
};

const close = () => {
  feedback.classList.remove("feedback--visible");
  document.body.style.overflow = "";
  blur.body.classList.remove("blur--visible");
  blur.body.classList.toggle("blur--hidden");
};

export { open, close, feedback as mBody, openButton, closeButton };
