

//mainvisual canvas
const canLeft = document.querySelector(".canvas__item--left");
const ctxLeft = canLeft.getContext("2d");
const canRight = document.querySelector(".canvas__item--right");
const ctxRight = canRight.getContext("2d");

ctxLeft.beginPath();
ctxLeft.moveTo(35, 197);
ctxLeft.bezierCurveTo(32, 211, 45, 103, 125, 47);
ctxLeft.bezierCurveTo(152, 28, 206, 7, 234, 7);
ctxLeft.bezierCurveTo(249, 7, 306, 7, 336, 23);
ctxLeft.bezierCurveTo(368, 40, 430, 83, 443, 98);
ctxLeft.bezierCurveTo(461, 119, 528, 181, 526, 252);
ctxLeft.bezierCurveTo(523, 346, 459, 397, 438, 419);
ctxLeft.bezierCurveTo(428, 430, 352, 482, 310, 488);
ctxLeft.bezierCurveTo(265, 494, 227, 482, 206, 476);
ctxLeft.bezierCurveTo(171, 466, 142, 450, 116, 433);
ctxLeft.bezierCurveTo(93, 418, 62, 383, 48, 338);
ctxLeft.bezierCurveTo(32, 287, 30, 227, 35, 197);
ctxLeft.fillStyle = '#ddd';
ctxLeft.fill();
ctxLeft.closePath();

ctxRight.beginPath();
ctxRight.moveTo(9, 197);
ctxRight.bezierCurveTo(1, 209, 45, 103, 125, 47);
ctxRight.bezierCurveTo(152, 28, 206, 7, 234, 7);
ctxRight.bezierCurveTo(249, 7, 342, 9, 372, 25);
ctxRight.bezierCurveTo(404, 42, 454, 68, 465, 85);
ctxRight.bezierCurveTo(477, 103, 521, 152, 519, 223);
ctxRight.bezierCurveTo(516, 317, 464, 366, 447, 391);
ctxRight.bezierCurveTo(439, 403, 371, 468, 333, 479);
ctxRight.bezierCurveTo(289, 492, 228, 489, 205, 488);
ctxRight.bezierCurveTo(169, 486, 111, 457, 85, 440);
ctxRight.bezierCurveTo(62, 425, 40, 408, 26, 363);
ctxRight.bezierCurveTo(10, 312, 0, 218, 8, 197);
ctxRight.fillStyle = '#ccc';
ctxRight.globalAlpha = 0.9;
ctxRight.fill();
ctxRight.closePath();


// canvas hover animation
const canvas = document.querySelectorAll('canvas');

for ( let i=0; i < canvas.length; i++) {
  canvas[i].addEventListener('mouseover', function() {
    canvas[i].classList.add('canvas-anim');
  });
  canvas[i].addEventListener('mouseleave', function() {
    canvas[i].classList.remove('canvas-anim');
  });
}
