
var left = 0;
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

document.addEventListener('keydown', function (e) {
  for (var i = 0; i < keyDirection.length; i++) {
    if (e.key === keyDirection[i]) {
      car.direction = keyDirection[i];
    }
  }
  $img.className = car.direction;

  if (e.key === ' ') {
    setInterval(moveCar, 1);
  }
});

function moveCar() {
  left++;
  car.location.x = left;
  $img.setAttribute('style', 'left: ' + left + 'px;');
}
