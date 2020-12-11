
var car = {
  direction: ''
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
});
