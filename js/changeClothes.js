'use strict';
const fireBall = document.querySelector(`.setup-fireball-wrap`);
const wizardCoat = document.querySelector(`.setup-wizard .wizard-coat`);
const wizardEyes = document.querySelector(`.setup-wizard .wizard-eyes`);
const userNameInput = document.querySelector(`.setup-user-name`);
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const colorFireBall = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`,
];
(() => {
  const wizardCoatChange = () => {
    let i = 0;
    wizardCoat.addEventListener(`click`, () => {
      i++;
      wizardCoat.style.fill = window.coatColorMagickMan[i];
      if (i >= window.coatColorMagickMan.length - 1) {
        i = -1;
      }
    });
  };
  wizardCoatChange();
  const wizardEyesChange = () => {
    let i = 0;
    wizardEyes.addEventListener(`click`, () => {
      i++;
      wizardEyes.style.fill = window.eyesColorMagickMan[i];
      if (i >= window.eyesColorMagickMan.length - 1) {
        i = -1;
      }
    });
  };
  wizardEyesChange();

  const fireBallChange = () => {
    let i = 0;
    fireBall.addEventListener(`click`, () => {
      i++;
      fireBall.style.background = colorFireBall[i];
      if (i >= colorFireBall.length - 1) {
        i = -1;
      }
    });
  };
  fireBallChange();
})();

userNameInput.addEventListener(`input`, () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Ещё` + (MIN_NAME_LENGTH - valueLength) + `симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity(`Удалите лишние` + (valueLength - MAX_NAME_LENGTH) + `симв.`);
  } else {
    userNameInput.setCustomValidity(``);
  }

  userNameInput.reportValidity();
});
