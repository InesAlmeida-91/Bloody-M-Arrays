const startAudio = new Audio('./audio/fisrt-screen-sound.wav');

const gameAudio = new Audio;
gameAudio.src = './audio/game-music.mp3'

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startAudio.pause();
    gameAudio.play();
    startGame()  
  };
}



startAudio.play();


let randomNumber;

function startGame() {
  const instructionsContainer = document.getElementById('instructions-container')
  instructionsContainer.style.display = "none";
  document.body.insertBefore(myGameArea.canvas, document.body.childNodes[0]);
  myGameArea.interval = setInterval(updateGameArea, 20);
  randomNumber = Math.floor(Math.random() * 5) + 1;
}

let completedCocktails = 0;

function completeCocktail() {
  if (myGameArea.scoreCountVodka >= 1 &&
  myGameArea.scoreCountTomato >= 1 && 
  myGameArea.scoreCountTabasco >= 1 &&
  myGameArea.scoreCountLemon >= 1 &&
  myGameArea.scoreCountSaltPepper >= 1) {
  completedCocktails ++;
  myGameArea.scoreCountVodka -= 1;
  myGameArea.scoreCountTomato -= 1;
  myGameArea.scoreCountTabasco -= 1;
  myGameArea.scoreCountLemon -= 1;
  myGameArea.scoreCountSaltPepper -= 1;
  }
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
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(myGameArea.interval);
  },
  score: function() {
    this.context.font = '20px Sigmar';
    this.context.shadowOffsetX = 3;
    this.context.shadowOffsetY = 3;
    this.context.shadowBlur = 2;
    this.context.shadowColor = 'rgba(0, 0, 0, 0.864)';
    const rectX = 5;
    const rectY = 5;
    const rectWidth = 200;
    const rectHeight = 200;
    
    this.context.fillStyle = 'rgba(255, 255, 255, 0.85)';
    this.context.fillRect(rectX, rectY, rectWidth, rectHeight);
  
   
     // Set the fill color for the text
    this.context.fillStyle = 'white';
    this.context.fillText(`Ingredients:`, rectX + 10, rectY + 30);

     // Set the fill color for the text
    this.context.fillStyle = '#ff8585';
    this.context.fillText(`Vodka: ${this.scoreCountVodka}`, rectX + 10, rectY + 70);
    this.context.fillText(`Tomatoes: ${this.scoreCountTomato}`, rectX + 10, rectY + 100);
    this.context.fillText(`Tabasco: ${this.scoreCountTabasco}`, rectX + 10, rectY + 130);
    this.context.fillText(`Salt&Pepper: ${this.scoreCountSaltPepper}`, rectX + 10, rectY + 160);
    this.context.fillText(`Lemons: ${this.scoreCountLemon}`, rectX + 10, rectY + 190);

    
  // Add rectangles for the number of cocktails done and to do
  const doneRectX = rectX + rectWidth + 950;
  const doneRectY = rectY + 50;
  const doneRectWidth = 250;
  const doneRectHeight = 30;

  const toDoRectX = rectX + rectWidth + 950;
  const toDoRectY = rectY + 10;
  const toDoRectWidth = 250;
  const toDoRectHeight = 30;

  // Set the fill color for the rectangles
  this.context.fillStyle = 'rgba(255, 255, 255, 0.85)';
  this.context.fillRect(doneRectX, doneRectY, doneRectWidth, doneRectHeight);

  this.context.fillStyle = 'rgba(255, 255, 255, 0.85)';
  this.context.fillRect(toDoRectX, toDoRectY, toDoRectWidth, toDoRectHeight);

  // Set the fill color for the text inside the rectangles
  this.context.fillStyle = 'white';
  this.context.fillText(`Cocktails done: ${completedCocktails}`, doneRectX + 10, doneRectY + 20);
  this.context.fillText(`Ordered cocktails: ${randomNumber}`, toDoRectX + 10, toDoRectY + 20);
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
    if (this.x >= 0) {
    this.x -= 30;
    }
  }
  
  moveRight() {
    if(this.x <= 1350) {
      this.x += 30;
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

const tomato = new CorrectIngredient(40, 40, './images/tomato.png', 2);
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
    checkScore();
    completeCocktail();
  }
  checkGameOver();
  checkWin();
  myGameArea.score()
}

const collisionAudio = new Audio;
collisionAudio.src = './audio/ingredient-collision.wav';

function checkScore() {
  if (player.crashWith(vodka) && vodka.y > 0) { 
    collisionAudio.play()//ingredient.y vertical position of the image 
    myGameArea.scoreCountVodka++;//increase the score
    vodka.y = 0; //return ingredient to the initial position
  } else if (player.crashWith(tomato) && tomato.y > 0) {
    collisionAudio.play()
    myGameArea.scoreCountTomato++;
    tomato.y = 0;
  } else if (player.crashWith(tabasco) && tabasco.y > 0) {
    collisionAudio.play()
    myGameArea.scoreCountTabasco++;
    tabasco.y = 0;
  } else if (player.crashWith(saltPepper) && saltPepper.y > 0) {
    collisionAudio.play()
    myGameArea.scoreCountSaltPepper++;
    saltPepper.y = 0;
  } else if (player.crashWith(lemon) && lemon.y > 0) {
    collisionAudio.play()
    myGameArea.scoreCountLemon++;
    lemon.y = 0;
  }
}

const gameOverSound = new Audio;
gameOverSound.src = './audio/game-over-sound.wav';


function checkGameOver() {
  if(player.crashWith(orange) || player.crashWith(strawberry)) {
    gameStatus = "Game Over";
    myGameArea.stop();
    gameAudio.pause();
    gameOverSound.play();
    document.getElementById("game-over-container").style.display = "flex";
  } else {
    checkScore();
  }
}

const winningSound = new Audio;
winningSound.src = './audio/winning-cheering.wav';

function checkWin() {
  if(randomNumber === completedCocktails) {
    gameStatus = "Win Game";
    myGameArea.stop();
    gameAudio.pause();
    winningSound.play();
    document.getElementById("win-container").style.display = "flex";
  } else {
    checkScore();
  }
}


document.getElementById('restart-button').addEventListener('click', () => {
  location.reload();
});

document.getElementById('play-again-button').addEventListener('click', () => {
  location.reload();
});

myGameArea.start(); 


