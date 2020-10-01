'use strict';

const setup = document.querySelector(`#setupDel`);
const similarWizard = document.querySelector(`#similar-wizard-template`).content
.querySelector(`.setup-similar-item`);
const setupBlock = document.querySelector(`#setup-similar`);
const NUMBER_MAGIC_MAN = 3;
const setupList = document.querySelector(`.setup-similar-list`);
const setupOpen = document.querySelector(`.setup-open`);
const setupClose = document.querySelector(`.setup-close`);
const userNameInput = document.querySelector(`.setup-user-name`);
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const nameMagickMan = [
  `Иван `,
  `Хуан Себастьян `,
  `Мария `,
  `Кристоф `,
  `Виктор `,
  `Юлия `,
  `Люпита `,
  `Вашингтон `
];
const lastNameMagickMan = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];
const coatColorMagickMan = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];
const eyesColorMagickMan = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`
];
const colorFireBall = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`,
];

const fireBall = document.querySelector(`.setup-fireball-wrap`)
const wizardCoat = document.querySelector(`.setup-wizard .wizard-coat`);
const wizardEyes = document.querySelector(`.setup-wizard .wizard-eyes`);
setup.classList.remove(`hidden`);
setupBlock.classList.remove(`hidden`);

const magickMan = [
  {
    name: nameMagickMan[Math.floor(window.randomNumbers(0, nameMagickMan.length - 1))] + lastNameMagickMan[Math.floor(window.randomNumbers(0, lastNameMagickMan.length - 1))],
    coatColor: coatColorMagickMan[Math.floor(window.randomNumbers(0, coatColorMagickMan.length))],
    eyesColor: eyesColorMagickMan[Math.floor(window.randomNumbers(0, eyesColorMagickMan.length))]
  },
  {
    name: nameMagickMan[Math.floor(window.randomNumbers(0, nameMagickMan.length - 1))] + lastNameMagickMan[Math.floor(window.randomNumbers(0, lastNameMagickMan.length - 1))],
    coatColor: coatColorMagickMan[Math.floor(window.randomNumbers(0, coatColorMagickMan.length))],
    eyesColor: eyesColorMagickMan[Math.floor(window.randomNumbers(0, eyesColorMagickMan.length))]
  },
  {
    name: nameMagickMan[Math.floor(window.randomNumbers(0, nameMagickMan.length - 1))] + lastNameMagickMan[Math.floor(window.randomNumbers(0, lastNameMagickMan.length - 1))],
    coatColor: coatColorMagickMan[Math.floor(window.randomNumbers(0, coatColorMagickMan.length))],
    eyesColor: eyesColorMagickMan[Math.floor(window.randomNumbers(0, eyesColorMagickMan.length))]
  },
  {
    name: nameMagickMan[Math.floor(window.randomNumbers(0, nameMagickMan.length - 1))] + lastNameMagickMan[Math.floor(window.randomNumbers(0, lastNameMagickMan.length - 1))],
    coatColor: coatColorMagickMan[Math.floor(window.randomNumbers(0, coatColorMagickMan.length))],
    eyesColor: eyesColorMagickMan[Math.floor(window.randomNumbers(0, eyesColorMagickMan.length))]
  }
];

let renderWizard = function (wizard) {
  let wizardElement = similarWizard.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};

for (let i = 0; i <= NUMBER_MAGIC_MAN; i++) {
  setupList.appendChild(renderWizard(magickMan[i]));
}

let onPopupEscPress = (evt) => {

  if (evt.key === `Escape`) {
    evt.preventDefault();
    closePopup();
  }
};

let openPopup = () => {
  setup.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);
};

let closePopup = () => {
  setup.classList.add(`hidden`);

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


const wizardCoatChange = () => {
  let i = 0;
  wizardCoat.addEventListener(`click`, function () {
    i++;
    wizardCoat.style.fill = coatColorMagickMan[i];
    if (i >= coatColorMagickMan.length - 1) {
      i = -1;
    }
  });
};
wizardCoatChange();

const wizardEyesChange = () => {
  let i = 0;
  wizardEyes.addEventListener(`click`, function () {
    i++;
    wizardEyes.style.fill = eyesColorMagickMan[i];
    if (i >= coatColorMagickMan.length - 1) {
      i = -1;
    }
  });
};
wizardEyesChange();

const fireBallChange = () => {
  let i = 0;
  fireBall.addEventListener(`click`, function () {
    i++;
    fireBall.style.background = colorFireBall[i];
    if (i >= colorFireBall.length - 1) {
      i = -1;
    }
  });
};

fireBallChange();


userNameInput.addEventListener(`input`, function () {
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

