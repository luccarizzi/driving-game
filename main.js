var car = {
  direction: 'east'
};

var keyDirection = [
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight'
];

document.addEventListener('keydown', function (e) {
  for (var i = 0; i < keyDirection.length; i++) {
    if (e.key === keyDirection[i]) {
      car.direction = keyDirection[i];
    }
  }
});
