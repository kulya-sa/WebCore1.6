import "../scss/style.scss";

import * as variables from "./variables.js";
import * as burger from "./burger.js";
import * as feedback from "./feedback.js";
import * as phone from "./phone.js";
import * as swiper from "./swiperInit.js";
import * as price from "./price.js";
import * as expand from "./expand.js";

const blur = document.querySelector(".blur");
const comercial = document.querySelector(".comercial");

/////////

burger.openButton.addEventListener("click", () => {
  burger.open();
});

burger.closeButton.addEventListener("click", () => {
  burger.close();
});

/////////

feedback.openButton.addEventListener("click", () => {
  feedback.open();
});

feedback.closeButton.addEventListener("click", () => {
  feedback.close();
});

/////////

phone.openButton.addEventListener("click", () => {
  phone.open();
});

phone.closeButton.addEventListener("click", () => {
  phone.close();
});

comercial.addEventListener("click", () => {
  phone.open();
});

/////////

blur.addEventListener("click", () => {
  burger.close();
  feedback.close();
  phone.close();
});

price.create();

for (let i = 0; i < expand.button.length; i++) {
  expand.button[i].addEventListener("click", () => {
    if (expand.button[i].dataset.expanded == "true") {
      expand.close(i);
    } else {
      expand.open(i);
    }
  });
}

window.addEventListener("resize", () => {
  swiper.init();
});
swiper.init();

export { blur as body };
