const swiperWrapper = document.querySelectorAll(".swiper-wrapper");
const expandButton = document.querySelectorAll(".expand");
const expandArrows = document.querySelectorAll(".expand__arrows");
const expandText = document.querySelectorAll(".expand__text");

const expandOpen = (iterator) => {
  swiperWrapper[iterator].classList.add("swiper-wrapper--expanded");
  expandText[iterator].textContent = "Скрыть";
  expandArrows[iterator].classList.add("expand__arrows--rotated");
  expandButton[iterator].dataset.expanded = "true";
};

const expandClose = (iterator) => {
  swiperWrapper[iterator].classList.remove("swiper-wrapper--expanded");
  expandText[iterator].textContent = "Показать все";
  expandArrows[iterator].classList.remove("expand__arrows--rotated");
  expandButton[iterator].dataset.expanded = "flase";
};

export { expandOpen as open, expandClose as close, expandButton as button };
