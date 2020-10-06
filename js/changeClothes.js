// выбор одежды
const fireBall = document.querySelector(`.setup-fireball-wrap`);
const wizardCoat = document.querySelector(`.setup-wizard .wizard-coat`);
const wizardEyes = document.querySelector(`.setup-wizard .wizard-eyes`);
const userNameInput = document.querySelector(`.setup-user-name`);

const wizardCoatChange = (() => {
  let i = 0;
  wizardCoat.addEventListener(`click`, function () {
    i++;
    wizardCoat.style.fill = coatColorMagickMan[i];
    if (i >= coatColorMagickMan.length - 1) {
      i = -1;
    }
  });
})();

const wizardEyesChange = (() => {
  let i = 0;
  wizardEyes.addEventListener(`click`, function () {
    i++;
    wizardEyes.style.fill = eyesColorMagickMan[i];
    if (i >= coatColorMagickMan.length - 1) {
      i = -1;
    }
  });
})();


const fireBallChange = (() => {
  let i = 0;
  fireBall.addEventListener(`click`, function () {
    i++;
    fireBall.style.background = colorFireBall[i];
    if (i >= colorFireBall.length - 1) {
      i = -1;
    }
  });
})();





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
