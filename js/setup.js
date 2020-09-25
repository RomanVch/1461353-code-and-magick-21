'use strict';

const setup = document.querySelector(`#setupDel`);
const similarWizard = document.querySelector(`#similar-wizard-template`);
const setupBlock = document.querySelector(`#setup-similar`);
const setupName = similarWizard.querySelector(`.setup-similar-label`);
const setupCoatColor= similarWizard.querySelector(`.wizard-coat`);
const setupeYesColor= similarWizard.querySelector(`.wizard-eyes`);
const numberMagickMan = 4;
const setupSimilar = document.querySelector(`#setupDel`);
const setupItem = similarWizard.querySelectorAll(`.setup-similar-item`);

const setupList = document.querySelector(`.setup-similar-list`);
const nameMagickMan = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const lastNameMagickMan = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const coatColorMagickMan = [`rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`];
const eyesColorMagickMan = [`black`,
  `red`,
  `blue`,
  `yellow`,
  `green`];

const magickMan = [
  {name: nameMagickMan[window.randomNumbers(0, nameMagickMan.length)] + lastNameMagickMan[window.randomNumbers(0, lastNameMagickMan.length)],
    coatColor: coatColorMagickMan[window.randomNumbers(0, coatColorMagickMan.length)],
    eyesColor: eyesColorMagickMan[window.randomNumbers(0, eyesColorMagickMan.length)]
  },
  {name: nameMagickMan[window.randomNumbers(0, nameMagickMan.length)] + lastNameMagickMan[window.randomNumbers(0, lastNameMagickMan.length)],
    coatColor: coatColorMagickMan[window.randomNumbers(0, coatColorMagickMan.length)],
    eyesColor: eyesColorMagickMan[window.randomNumbers(0, eyesColorMagickMan.length)]
  },
  {name: nameMagickMan[window.randomNumbers(0, nameMagickMan.length)] + lastNameMagickMan[window.randomNumbers(0, lastNameMagickMan.length)],
    coatColor: coatColorMagickMan[window.randomNumbers(0, coatColorMagickMan.length)],
    eyesColor: eyesColorMagickMan[window.randomNumbers(0, eyesColorMagickMan.length)]
  },
  {name: nameMagickMan[window.randomNumbers(0, nameMagickMan.length)] + lastNameMagickMan[window.randomNumbers(0, lastNameMagickMan.length)],
    coatColor: coatColorMagickMan[window.randomNumbers(0, coatColorMagickMan.length)],
    eyesColor: eyesColorMagickMan[window.randomNumbers(0, eyesColorMagickMan.length)]
  },
];

console.log(setupItem);

for (let i = 0; i <= numberMagickMan -1; i++) {

setupList.appendChild(setupItem.cloneNode(true));
}
setup.classList.remove(`hidden`);
setupBlock.classList.remove(`hidden`);
