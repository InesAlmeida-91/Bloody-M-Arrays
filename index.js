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
    background();
    player.draw();
  }
  

  function background() {
    const beachBackground = new Image(); // Create new <img> element
    beachBackground.src = './images/game_background_3.png'; // Set source path
    ctx.drawImage(beachBackground, 0, 0, 1500, 1000);
  }
  

class player {
    constructor() {
      this.x = 225;//starting posisiton x
      this.y = 575;//starting posisiton y
      this.width = 50;//img size
      this.height = 100;// img size
      const img = new Image();
      this.img = img;
      img.src = './images/person.png'
      this.speedX = 0;
    }
    draw() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    moveLeft() {
      return this.x;
    }
    moveRight() {
      return this.x + this.width;
    }
    newPos() { // updating the position of the player
      this.x += this.speedX;
    }
    update() {
      const ctx = updateCanvas()
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
  }