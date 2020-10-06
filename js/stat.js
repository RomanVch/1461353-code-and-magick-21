'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 88;
const POINT_X = 120;
const POINT_Y_FONT = 260;
const POINT_Y = 240;
const COLUMN_WIDTH = 40;
const COLUMN_HIGHT = 150;
const FONT_X_URA = 115;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
const getMaxElement = function (times) {
  return Math.max.apply(null, times);
};
const randomNumber = function (min, max) {
  return (Math.random() * (max - min + 1)) + min;
};
window.randomNumbers = randomNumber;
window.renderStatistics = function (ctx, names, times) {
  const namesSort = names.sort();
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  const maxTime = getMaxElement(times);
  for (let i = 0; i <= names.length - 1; i++) {
    ctx.fillStyle = `#000`;
    ctx.font = `16px PT Mono`;
    ctx.fillText(`Ура вы победили !`, FONT_X_URA, 40);
    ctx.fillText(`Cписок результатов:`, FONT_X_URA, 60);
    ctx.fillText(Math.round(times[i]), POINT_X + (GAP * [i]), +100);
    ctx.fillText(namesSort[i], POINT_X + (GAP * i), POINT_Y_FONT);
    if (i === 0) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    } else {
      ctx.fillStyle = `hsl(220, ${randomNumber(1, 100)}%, 47%)`;
    }
    const percentMaxTime = maxTime / 100;
    const precentTime = times[i] / percentMaxTime;
    const precentHeight = COLUMN_HIGHT / 100;
    const resultHeight = precentHeight * precentTime - 20;
    ctx.fillRect(POINT_X + (GAP * i),
        POINT_Y,
        COLUMN_WIDTH,
        -resultHeight);
  }
};

