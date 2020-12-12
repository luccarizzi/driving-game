
var car = {
  direction: '',
  location: {
    x: 0,
    y: 0
  }
};

var keyDirection = [
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight'
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
  car.location.x++;
  $img.setAttribute('style', 'left: ' + car.location.x + 'px;');
}
