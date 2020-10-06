'use strict';

const setup = document.querySelector(`#setupDel`);
const similarWizard = document.querySelector(`#similar-wizard-template`).content
.querySelector(`.setup-similar-item`);
const setupBlock = document.querySelector(`#setup-similar`);
const NUMBER_MAGIC_MAN = 3;
const setupList = document.querySelector(`.setup-similar-list`);


const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
window.setup
window.setupOpen
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


setup.classList.remove(`hidden`);
setupBlock.classList.remove(`hidden`);
// генерация магов
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



