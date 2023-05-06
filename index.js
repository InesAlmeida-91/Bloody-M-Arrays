window.onload = () => {
  document.getElementById('start-button').onclick = () => {
      startGame()  
  };
}

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function startGame() {
  const instructionsContainer = document.getElementById('instructions-cointainer')
  instructionsContainer.style.display = "none";
  document.body.insertBefore(canvas, document.body.childNodes[0]);
  background();
  //player.draw();
  requestAnimationFrame(updateCanvas);
}

class person {
  constructor() {
    this.x = 10;//starting posisiton x
    this.y = 10;//starting posisiton y
    this.width = 75;//img size
    this.height = 150;// img size
    const img = new Image();
    this.img = img;
    img.onload = () => {
      this.draw();
    };
    img.src = './images/person.png';
    this.speedX = 0;
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

const player = new person();


/* document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
  }
  updateCanvas();
});*/

 
function background() {
  const beachBackground = new Image(); // Create new <img> element
  beachBackground.src = './images/game_background_3.png'; // Set source path
  beachBackground.onload = function() { // Wait for image to load
    ctx.drawImage(beachBackground, 0, 0, 1500, 800);
  };
}



function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background()
  player.newPos();
  player.update();
}
