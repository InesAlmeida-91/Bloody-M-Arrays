
/*
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const beachBackground = new Image(); // Create new <img> element
beachBackground.src = './images/game_background_3.png'; // Set source path

function drawBackground() {
  ctx.drawImage(beachBackground, 0, 0, 1500, 800);
}

class Person {
  constructor() {
    this.width = 75; // img size
    this.height = 150; // img size
    this.x = canvas.width/2 - this.width/2; //starting posisiton x
    this.y = canvas.height - this.height; //starting posisiton y
    this.speedX = 0;
    const img = new Image();
    this.img = img;
    img.onload = () => {
      this.draw();
    };
    img.src = './images/person.png';
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRight() {
    this.x += 10;
  }

  newPos() { // updating the position of the player
    this.x += this.speedX;
  }

  update() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

const player = new Person();

function startGame() {
  const instructionsContainer = document.getElementById('instructions-container');
  instructionsContainer.style.display = "none";
  document.body.insertBefore(canvas, document.body.childNodes[0]);
  drawBackground();
  player.draw(); 
  requestAnimationFrame(updateCanvas);
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  player.newPos();
  player.update();
  requestAnimationFrame(updateCanvas);
}

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
  }
  updateCanvas();
});

*/
 