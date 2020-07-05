const wrapper = document.querySelector(".price__swiper");
const slidesContent = [
  {
    name: "Диагностика",
    price: "Бесплатно",
    duration: "30 мин",
  },
  {
    name: "Замена дисплея",
    price: "1 000 ₽",
    duration: "30-120 мин",
  },
  {
    name: "Замена полифонического динамика",
    price: "1 000 ₽",
    duration: "30-120 мин",
  },
  {
    name: "Тестирование с выдачей технического заключения",
    price: "1 000 ₽",
    duration: "30-120 мин",
  },
  {
    name: "Замена программного обеспечения",
    price: "1 000 ₽",
    duration: "30-120 мин",
  },
];

const makeInfo = (type, text) => {
  let info = document.createElement("div");
  let head = document.createElement("p");
  let description = document.createElement("p");

  info.classList.add("slide__info");
  head.classList.add("slide__head");
  description.classList.add("slide__description");

  head.textContent = type;
  description.textContent = text;

  info.appendChild(head);
  info.appendChild(description);

  return info;
};

const createButton = () => {
  let button = document.createElement("button");
  let buttonArrow = document.createElement("img");

  buttonArrow.src = "img/forms/arrow.svg";

  button.classList.add("submit", "slide__submit");
  button.textContent = "заказать";

  button.appendChild(buttonArrow);

  return button;
};

const makeSlide = (src) => {
  let slide = document.createElement("div");

  slide.classList.add("swiper-slide", "price__slide");

  slide.appendChild(makeInfo("Ремонтные услуги", src.name));
  slide.appendChild(makeInfo("Цена", src.price));
  slide.appendChild(makeInfo("Срок", src.duration));
  slide.appendChild(createButton());

  return slide;
};

const makeSlides = () => {
  for (let i = 0; i < slidesContent.length; i++) {
    wrapper.appendChild(makeSlide(slidesContent[i]));
  }
  return wrapper;
};

export { makeSlides as create };
