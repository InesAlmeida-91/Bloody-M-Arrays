window.onload = () => {
  document.getElementById('start-button').onclick = () => {
      startGame()  
  };
}

function startGame() {
  const instructionsContainer = document.getElementById('instructions-container')
  instructionsContainer.style.display = "none";
  document.body.insertBefore(myGameArea.canvas, document.body.childNodes[0]);
  myGameArea.interval = setInterval(updateGameArea, 20);
}

const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 1450;
    this.canvas.height = 700;
    this.context = this.canvas.getContext('2d');
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

const beachBackground = new Image();
beachBackground.src = './images/game_background_3.png';

function drawBackground() {
  const ctx = myGameArea.context;
  ctx.drawImage(beachBackground, 0, 0, 1450, 700);
}

class Person {
  constructor() {
    this.x = 750;
    this.y = 500;
    this.width = 100;
    this.height = 200;
    const img = new Image();
    this.img = img;
    img.onload = () => {
      this.draw();
    };
    img.src = './images/person.png';
    this.speedX = 0;
  }
  
  draw() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  
  moveLeft() {
    this.x -= 10;
  }
  
  moveRight() {
    this.x += 10;
  }
  
  newPos() {
    this.x += this.speedX;
  }
  
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

const player = new Person();

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
  }
  updateGameArea();
});

class CorrectIngredient {
  constructor(width, height, x, y, src, speed) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.img = new Image();
    this.img.src = src;
  }

  update() {
    const ctx = myGameArea.context;
    this.y += this.speed;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

const tomato = new CorrectIngredient(30, 30, 10, 0, './images/tomato.png', 10);
const vodka = new CorrectIngredient(30, 30, 100, 0, './images/vodka.png', 8);
const tabasco = new CorrectIngredient(30, 30, 200, 0, './images/tabasco.png', 5);


const glass = new Image
glass.src = './images/empty-glass.png'
const glass1 = new Image()
glass1.src = './images/glass1.png'
const glass2 = new Image()
glass2.src = './images/glass2.png'
const glass3 = new Image()
glass3.src = './images/glass3.png'
const glass4 = new Image()
glass4.src = './images/glass4.png'
const glass5 = new Image()
glass5.src = './images/glass5.png'
const glass6 = new Image()
glass6.src = './images/glass6.png'

function drawGlass(ctx) {
    ctx.drawImage(glass, 1300, 10, 100, 150);
//draw glass when player touch the correct ingredients
    /*if(plays touch CorrectIngredient draw glass)
    ctx.drawImage(glass1, 1300, 10, 100, 150);
    ctx.drawImage(glass2, 1300, 10, 100, 150);
    ctx.drawImage(glass3, 1300, 10, 100, 150);
    ctx.drawImage(glass4, 1300, 10, 100, 150);
    ctx.drawImage(glass5, 1300, 10, 100, 150);
    ctx.drawImage(glass6, 1300, 10, 100, 150);*/
    //create if condition to change the img glass
  } 


function updateGameArea() {
  myGameArea.clear();
  drawBackground();
  player.newPos();
  player.update();
  tomato.update();
  vodka.update();
  tabasco.update();
  drawGlass(myGameArea.context);
}

myGameArea.start();







