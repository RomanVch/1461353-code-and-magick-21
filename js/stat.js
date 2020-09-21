'use strict';

let CLOUD_WIDTH = 420;
let CLOUD_HEIGHT = 270;
let CLOUD_X = 100;
let CLOUD_Y = 10;
let GAP = 88;
let POINT_X = 160;
let POINT_Y_FONT = 260;
let POINT_Y = 240;
let COLUMN_WIDTH = 40;
let COLUMN_HIGHT = 150;
let playerss = [`Вы`, `Кекс`, `Катя`, `Игорь`];

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  let getMaxElement = function (arr) {
    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
      maxElement = arr[i];
    }
    return maxElement;
  };
  let namesSort = names.sort();
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y + CLOUD_Y, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);
  let maxTime = getMaxElement(times);
  for (let i = 0; i <= playerss.length - 1; i++) {
    ctx.fillStyle = `#000`;
    ctx.font = `16px PT Mono`;
    ctx.fillText(`Ура вы победили !`, 115, 40);
    ctx.fillText(`Cписок результатов:`, 115, 60);
    ctx.fillText(Math.round(times[i]), 160 + (GAP * [i]), 100 );//не могу понять от чего зависит положение
    ctx.fillText(namesSort[i], POINT_X + (GAP * i), POINT_Y_FONT);
    if (i === 0) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    }
    else {
      ctx.fillStyle = `hsl(220, ${~~(Math.random() * 100)}%, 47%)`;
    }
    let deltaFromMax = COLUMN_HIGHT - (COLUMN_HIGHT * times[i] / maxTime);
    let deltaHight = deltaFromMax - COLUMN_HIGHT;
    ctx.fillRect(POINT_X + (GAP * i),
        POINT_Y,
        COLUMN_WIDTH,
        deltaHight); // показывал в переписке еще одно решение но проблема в том что высота не ограничена а меньше 150 мы не можем поставить.
  }
};

