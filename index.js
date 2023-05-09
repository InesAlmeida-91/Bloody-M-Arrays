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
  scoreCountVodka: 0,
  scoreCountTomato: 0,
  scoreCountTabasco: 0,
  scoreCountSaltPepper: 0,
  scoreCountLemon: 0,
  start: function () {
    this.canvas.width = 1450;
    this.canvas.height = 700;
    this.context = this.canvas.getContext('2d');
    gameOverScreen.style.display = "none";
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(myGameArea.interval);
  },
  score: function() {
    this.context.font = '30px Sigmar';
    this.context.shadowOffsetX = 3;
    this.context.shadowOffsetY = 3;
    this.context.shadowBlur = 2;
    this.context.shadowColor = 'rgba(0, 0, 0, 0.864)';
    const rectX = 5;
    const rectY = 5;
    const rectWidth = 260;
    const rectHeight = 250;
    
    this.context.fillStyle = 'rgba(255, 255, 255, 0.85)';
    this.context.fillRect(rectX, rectY, rectWidth, rectHeight);
  
    // Set the fill color for the text
    this.context.fillStyle = '#ff8585';
  
    this.context.fillText(`Vodka: ${this.scoreCountVodka}`, rectX + 10, rectY + 30);
    this.context.fillText(`Tomatoes: ${this.scoreCountTomato}`, rectX + 10, rectY + 80);
    this.context.fillText(`Tabasco: ${this.scoreCountTabasco}`, rectX + 10, rectY + 130);
    this.context.fillText(`Salt&Pepper: ${this.scoreCountSaltPepper}`, rectX + 10, rectY + 180);
    this.context.fillText(`Lemons: ${this.scoreCountLemon}`, rectX + 10, rectY + 230);
  }

};




const beachBackground = new Image();
beachBackground.src = './images/game_background_3.png';

const ingredientsList = new Image
ingredientsList.src = './images/display-ingredients.png'

function drawBackground() {
  const ctx = myGameArea.context;
  ctx.drawImage(beachBackground, 0, 0, 1450, 700);
  ctx.drawImage(ingredientsList, 1200, 10, 150, 170);
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
    if (this.x >= 0) {
    this.x -= 20;
    }
  }
  
  moveRight() {
    if(this.x <= 1350) {
      this.x += 20;
    }
  }
  
  newPos() {
    this.x += this.speedX;
  }
  
  update() {
    const ctx = myGameArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  
  top() {
    return this.y + 30;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  
  crashWith(ingredient) {
    return (this.top() < ingredient.bottom() && this.right() >= ingredient.x && this.left() <= ingredient.x + ingredient.width
    );
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
  constructor(width, height, src, speed) {
    this.width = width;
    this.height = height;
    this.x = Math.floor(Math.random() * (1450 - this.width));
    this.y = 0;
    this.speed = speed;
    this.img = new Image();
    this.img.src = src;
  }

  update() {
    const ctx = myGameArea.context;
    this.y += this.speed;
    if (this.y > myGameArea.canvas.height) {
      this.x = Math.floor(Math.random() * (myGameArea.canvas.width - this.width));
      this.y = 0;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  bottom() {
    return this.y + this.height;
  }
}

const tomato = new CorrectIngredient(40, 40, './images/tomato.png', 1);
const vodka = new CorrectIngredient(60, 60, './images/vodka.png', 2);
const tabasco = new CorrectIngredient(50, 50, './images/tabasco.png', 3);
const saltPepper = new CorrectIngredient(40, 40, './images/salt-and-pepper.png', 4);
const lemon = new CorrectIngredient(50, 50, './images/lemon.png',5);


class IncorrectIngredient {
  constructor(width, height, src, speed) {
    this.width = width;
    this.height = height;
    this.x = Math.floor(Math.random() * (1450 - this.width));
    this.y = 0;
    this.speed = speed;
    this.img = new Image();
    this.img.src = src;
  }

  update() {
    const ctx = myGameArea.context;
    this.y += this.speed;
    if (this.y > myGameArea.canvas.height) {
      this.x = Math.floor(Math.random() * (myGameArea.canvas.width - this.width));
      this.y = 0;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  bottom() {
    return this.y + this.height;
  }
}

const orange = new IncorrectIngredient(55, 40, './images/orange.png', 1);
const strawberry = new IncorrectIngredient(50, 50, './images/strawberry.png', 3);


let gameStatus = "Playing";


function updateGameArea() {
  if (gameStatus === "Playing") {
  myGameArea.clear();
  drawBackground();
  player.newPos();
  player.update();
  tomato.update();
  vodka.update();
  tabasco.update();
  saltPepper.update();
  lemon.update();
  orange.update();
  strawberry.update();
  myGameArea.score();
  }
  checkGameOver();
}



function checkGameOver() {
  if(player.crashWith(orange) || player.crashWith(strawberry)) {
    gameStatus = "Game Over";
    myGameArea.stop();
    document.getElementById("game-over-container").style.display = "flex";
  }
}

document.getElementById('restart-button').addEventListener('click', () => {
  location.reload();
});


function checkScore() {
  if(player.crashWith(vodka)) {
    myGameArea.scoreCountVodka++;
  }else if(player.crashWith(tomato)){
    myGameArea.scoreCountTomato++;
  }else if(player.crashWith(tabasco)){
    myGameArea.scoreCountTabasco++;
  }else if(player.crashWith(saltPepper)){
      myGameArea.scoreCountSaltPepper++;
  }else if(player.crashWith(lemon)){
    myGameArea.scoreCountLemon++;
  }
}


myGameArea.start(); 