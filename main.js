
var car = {
  direction: 'ArrowRight',
  location: {
    x: 0,
    y: 0
  }
};

var keyDirection = [
  'ArrowDown',
  'ArrowUp',
  'ArrowRight',
  'ArrowLeft'
];

var $img = document.querySelector('img');
var engine = null;
var startStop = true;

document.addEventListener('keydown', function (e) {
  for (var i = 0; i < keyDirection.length; i++) {
    if (e.key === keyDirection[i]) {
      car.direction = keyDirection[i];
    }
  }
  $img.className = car.direction;
  if (e.key === ' ') {
    if (startStop) {
      engine = setInterval(moveCar, 1);
    } else {
      clearInterval(engine);
    }
    startStop = !startStop;
  }
});

function moveCar() {
  if (car.direction === 'ArrowDown') {
    car.location.y++;
    $img.setAttribute(
      'style',
      'top: ' + car.location.y + 'px;' +
      'left: ' + car.location.x + 'px;');
  } else if (car.direction === 'ArrowUp') {
    car.location.y--;
    $img.setAttribute(
      'style',
      'top: ' + car.location.y + 'px;' +
      'left: ' + car.location.x + 'px;');
  } else if (car.direction === 'ArrowRight') {
    car.location.x++;
    $img.setAttribute(
      'style',
      'top: ' + car.location.y + 'px;' +
      'left: ' + car.location.x + 'px;');
  } else {
    car.location.x--;
    $img.setAttribute(
      'style',
      'top: ' + car.location.y + 'px;' +
      'left: ' + car.location.x + 'px;');
  }
}
