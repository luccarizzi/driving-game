
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

  if (car.direction === "ArrowDown") {
    console.log("South");
  } else if (car.direction === "ArrowUp") {
    console.log("North");
  } else if (car.direction === "ArrowRight") {
    console.log("East");
  } else {
    console.log("West");
  }


  car.location.x++;
  $img.setAttribute('style', 'left: ' + car.location.x + 'px;');
}
