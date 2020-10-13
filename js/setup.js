'use strict';

const setup = document.querySelector(`#setupDel`);
window.setup = setup;
const similarWizard = document.querySelector(`#similar-wizard-template`).content
.querySelector(`.setup-similar-item`);
const setupBlock = document.querySelector(`#setup-similar`);
const NUMBER_MAGIC_MAN = 3;
const setupList = document.querySelector(`.setup-similar-list`);


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

window.coatColorMagickMan = coatColorMagickMan;
window.eyesColorMagickMan = eyesColorMagickMan;

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
(() => {
  const renderWizard = (wizard) => {
    let wizardElement = similarWizard.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
    return wizardElement;
  };

  for (let i = 0; i <= NUMBER_MAGIC_MAN; i++) {
    setupList.appendChild(renderWizard(magickMan[i]));
  }
})();
