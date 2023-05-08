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
  },
  stop: function () {
    clearInterval(this.interval);
  },
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
  crashWith(incorrectIngredient) {
    //if crach with orange || strawberry - gameover
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
}

const orange = new IncorrectIngredient(55, 40, './images/orange.png', 1);
const strawberry = new IncorrectIngredient(50, 50, './images/strawberry.png', 3);

/*function checkGameOver() {
  const crashed = incorrect ingredients
  });
 
  if (crashed) {
    myGameArea.stop();
  }
}*/

function updateGameArea() {
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
  drawGlass(myGameArea.context);
  checkGameOver();
}


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
    ctx.drawImage(glass, 1350, 10, 75, 170);
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
  
myGameArea.start();







