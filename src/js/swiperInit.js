import Swiper, { Pagination } from "swiper";
import * as variables from "./variables";

Swiper.use([Pagination]);

const swiperContainers = document.querySelectorAll(".swiper-container");
let mySwiper = [];

const swiperAdapt = () => {
  for (let i = 0; i < swiperContainers.length; i++) {
    if (
      variables.bpMobile.matches &&
      swiperContainers[i].dataset.mobile == "false"
    ) {
      mySwiper[i] = new Swiper(swiperContainers[i], {
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      swiperContainers[i].dataset.mobile = "true";
    }
    if (mySwiper[i] === undefined) {
      return;
    }
    if (!variables.bpMobile.matches) {
      swiperContainers[i].dataset.mobile = "false";
      mySwiper[i].destroy(true, true);
    }
  }
};

export { swiperAdapt as init };
