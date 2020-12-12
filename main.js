
var left = 0;
var car = {
  direction: '',
  location: {
    x: '',
    y: ''
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
    setInterval(moveCar, 4);
  }
});

function moveCar() {
  left++;
  $img.setAttribute('style', 'left: ' + left + 'px;');
}
