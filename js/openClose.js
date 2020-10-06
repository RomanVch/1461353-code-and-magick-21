'use strict';
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
// открывния закрывания окна с магом
let onPopupEscPress = (evt) => {

  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

let openPopup = () => {
  window.setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

let closePopup = () => {
  window.setup.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, () => {
  openPopup();
});

setupOpen.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, () => {
  closePopup();
});

setupClose.addEventListener(`keydown`, (evt) => {
  if (evt.key === `Enter`) {
    closePopup();
  }
});
