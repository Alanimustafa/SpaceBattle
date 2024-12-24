let playerSpaceShipDamage = 0 ;


class SpaceShip {
  constructor(element, startX, startY, width, height, xDirection, yDirection) {
    this.element = element;
    this.startX = startX;
    this.startY = startY;
    this.width = width;
    this.height = height;
    this.xDirection = xDirection;
    this.yDirection = yDirection;

    this.updateStyle();
  }

  updateStyle() {
    this.element.style.left = `${this.startX}px`;
    this.element.style.top = `${this.startY}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
  }
}
// The Game Main Container
const gameContainer = document.getElementById('gameContainer');

// Game Navegation Bar
const gameNavegation = document.createElement('div');
gameNavegation.classList.add('gameNavegation');
gameContainer.appendChild(gameNavegation);

// PC spaceship DIV
const pcSpaceShipElement = document.createElement('div');
pcSpaceShipElement.classList.add('spaceShip', 'pcSpaceShip');
gameContainer.appendChild(pcSpaceShipElement);

// PC Fire DIV
const pcFireElement = document.createElement('div');
pcFireElement.classList.add('fire', 'pcFire');
gameContainer.appendChild(pcFireElement);

// Player Space ship DIV
const playerSpaceShipElement = document.createElement('div');
playerSpaceShipElement.classList.add('spaceShip', 'playerSpaceShip');
gameContainer.appendChild(playerSpaceShipElement);

// Player Fire DIV
const playerFireElement = document.createElement('div');
playerFireElement.classList.add('fire', 'playerFire');
gameContainer.appendChild(playerFireElement);



// Define the PC and PLayer Spaceships and Fires
const pcSpaceShip = new SpaceShip(pcSpaceShipElement, 50, 150, 50, 100, 2, 2);
const pcFire = new SpaceShip(pcFireElement, 50, 150, 70, 100, 0, 5);
const playerSpaceShip = new SpaceShip(playerSpaceShipElement, 450, 650, 70, 100, 2, 2);
const playerFire = new SpaceShip(playerFireElement, 450, 650, 70, 100, 0, 5);


// PC Space Ship Element
function pcSpaceShipPosition() {
  pcSpaceShip.startX += pcSpaceShip.xDirection; // PC Ship x incremental.
  pcSpaceShip.startY += pcSpaceShip.yDirection; // PC Ship y incremental.
  pcFire.startY += pcFire.yDirection; // PC fire y increment. No X direction.

  // if statement to reverse the PC Ship X Direction
  if (pcSpaceShip.startX <= 0 || pcSpaceShip.startX + pcSpaceShip.width >= gameContainer.offsetWidth) {
    pcSpaceShip.xDirection *= -1;
  }

// if statement to reverse the PC Ship Y Direction
  if (pcSpaceShip.startY <= 80 || pcSpaceShip.startY + pcSpaceShip.height >= gameContainer.offsetHeight - 220) {
    pcSpaceShip.yDirection *= -1;
  }

// if statement for PC Fire DIV not exceeding the game frame.
  if (pcFire.startY > gameContainer.offsetHeight) {
    pcFire.startY = pcSpaceShip.startY + pcSpaceShip.height / 2; 
    pcFire.startX = pcSpaceShip.startX + pcSpaceShip.width / 2 - pcFire.width / 2; // To align the div with the center of the PC Space Ship
  }
  

  pcSpaceShip.updateStyle(); // calling the instance function from the class to update the PC Ship.

  pcFire.updateStyle(); // calling the instance function from the class to update the PC Fire.
}


// The keys objects for the left and right keys in the keyboards
let keys = {

  ArrowLeft: false, // <- Starts with no move by default.
  ArrowRight: false, // -> Starts with no move by default.
};

// creating the 2 event listeners for the Player Ship and Fire
// When Pressing the arrows
window.addEventListener('keydown', (moveEvent) => {
  if (moveEvent.key === 'ArrowLeft' || moveEvent.key === 'ArrowRight') {
    keys[moveEvent.key] = true;
  }
});

// When Not Pressing the Arrows -> Stop the DIV.
window.addEventListener('keyup', (moveEvent) => {
  if (moveEvent.key === 'ArrowLeft' || moveEvent.key === 'ArrowRight') {
    keys[moveEvent.key] = false;
  }
});



// Player Space Ship Element
function playerSpaceShipPosition() {

  // Pc Space Ship Damage counter
  
  if (keys.ArrowLeft && playerSpaceShip.startX > 0) {
    playerSpaceShip.startX -= 5; // Move left 5 px

      if ((playerSpaceShip.startX >= pcFire.startX - 10) && (playerSpaceShip.startX <= pcFire.startX + 10)  || (playerSpaceShip.startY >= pcFire.startY - 10) && (playerSpaceShip.startY <= pcFire.startY + 10) ) {
        gameContainer.style.border = 'Solid yellow 7px';
        playerSpaceShipDamage ++;
        console.log('Pc Space Ship Damage is : ', playerSpaceShipDamage );
      }

  }
  if (keys.ArrowRight && playerSpaceShip.startX + playerSpaceShip.width < gameContainer.offsetWidth) {
    playerSpaceShip.startX += 5; // Move right px

  }

  // Fire movement
  playerFire.startY -= playerFire.yDirection * 5;

  if (playerFire.startY <= 0) {
    playerFire.startY = playerSpaceShip.startY + playerSpaceShip.height / 2;
    playerFire.startX = playerSpaceShip.startX + playerSpaceShip.width / 2 - playerFire.width / 2;
    
  }
  
  playerSpaceShip.updateStyle();
  playerFire.updateStyle();
}


function animate() {
  pcSpaceShipPosition();
  playerSpaceShipPosition();
  requestAnimationFrame(animate);
}

animate();