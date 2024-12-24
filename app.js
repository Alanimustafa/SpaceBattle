let player = prompt('Enter Player Name');


// -------------------- Main Class for spaceships and fire -------------

class SpaceShip {
  constructor(element, startX, startY, width, height, xDirection, yDirection, spaceShipDamage) {
    this.element = element; // PC, Palyer, Pc Space ship Fire and Player Space ship Fire
    this.startX = startX;   // Element start x Position
    this.startY = startY;   // Elelment Start Y Position
    this.width = width;     // Element width
    this.height = height;   // Element Height
    this.xDirection = xDirection;     // X counter
    this.yDirection = yDirection;     // Y counter
    this.spaceShipDamage = spaceShipDamage;   // Pc and Player Damage Counter

    this.updateStyle();
  }
  // To update the space ship and it's fire.
  updateStyle() {
    this.element.style.left = `${this.startX}px`;   // Update X direction in px.
    this.element.style.top = `${this.startY}px`;    // Update Y direction in px.
    this.element.style.width = `${this.width}px`;   // Update Element Width in px.
    this.element.style.height = `${this.height}px`; // Update Element height in px.
  }
}

// ----------------  Game Containers and Characters ----------

// The Game Main Container 
const gameContainer = document.getElementById('gameContainer');

// Game Navegation Bar | Has (2) containers | Player and PC results
const gameNavegation = document.createElement('div');
gameNavegation.classList.add('gameNavegation');
gameContainer.appendChild(gameNavegation);

    // Game Navegation Bar | PC DIV
    const pcNavegation = document.createElement('div');
    pcNavegation.classList.add('pcNavegation');
    pcNavegation.textContent = `PC Health 100/100`;
    gameNavegation.appendChild(pcNavegation);

    // Game Navegation Bar | LOGO
    const logoNavegation = document.createElement('div');
    logoNavegation.classList.add('logoNavegation');
    logoNavegation.style.backgroundImage= "url(./images/Background.jpeg)"
    gameNavegation.appendChild(logoNavegation);
    
    
    // Game Navegation Bar | Player DIV
    const playerNavegation = document.createElement('div');
    playerNavegation.classList.add('playerNavegation');
    playerNavegation.textContent = `${player} Health 100/100`;
    gameNavegation.appendChild(playerNavegation);

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




// -------------------- Defining the elements ------------------------

// Define the PC and PLayer Spaceships and Fires
const pcSpaceShip = new SpaceShip(pcSpaceShipElement, 50, 150, 50, 100, 2, 2, 100);
const pcFire = new SpaceShip(pcFireElement, 50, 150, 70, 100, 0, 5);
const playerSpaceShip = new SpaceShip(playerSpaceShipElement, 450, 650, 70, 100, 2, 2, 100);
const playerFire = new SpaceShip(playerFireElement, 450, 650, 70, 100, 0, 5);





// -------------------- PC and Player Fucntions ----------------------

// PC Space Ship Element
function pcSpaceShipPosition() {
  pcSpaceShip.startX += pcSpaceShip.xDirection; // PC Ship x incremental.
  pcSpaceShip.startY += pcSpaceShip.yDirection; // PC Ship y incremental.
  pcFire.startY += pcFire.yDirection; // PC fire y increment. No X direction.

  // if statement to reverse the PC Ship X Direction
  if (pcSpaceShip.startX <= 0 || pcSpaceShip.startX + pcSpaceShip.width >= gameContainer.offsetWidth) {
    pcSpaceShip.xDirection *= -1;


    
    if ((pcSpaceShip.startX >= playerFire.startX - 100) || (pcSpaceShip.startX <= playerFire.startX + 100)  || (pcSpaceShip.startY >= playerFire.startY - 100) && (pcSpaceShip.startY <= playerFire.startY + 100) ) {
       pcSpaceShip.spaceShipDamage --;

       if(pcSpaceShip.spaceShipDamage < 100 && pcSpaceShip.spaceShipDamage >= 75) {
         pcNavegation.style.color = "rgb(0, 189, 0)";
         pcNavegation.textContent =`${player}     Health ${pcSpaceShip.spaceShipDamage} / 100`;
       }
       if(pcSpaceShip.spaceShipDamage < 75 && pcSpaceShip.spaceShipDamage >= 50) {
         pcNavegation.style.color = "yellow";
         pcNavegation.textContent =`${player}     Health ${pcSpaceShip.spaceShipDamage} / 100`;
       }
       if(pcSpaceShip.spaceShipDamage < 50 && pcSpaceShip.spaceShipDamage >= 25) {
         pcNavegation.style.color = "orange";
         pcNavegation.textContent =`${player}     Health ${pcSpaceShip.spaceShipDamage} / 100`;
       }
       if(pcSpaceShip.spaceShipDamage < 25 && pcSpaceShip.spaceShipDamage >= 1) {
         pcNavegation.style.color = "red";
         pcNavegation.textContent =`${player}     Health ${pcSpaceShip.spaceShipDamage} / 100`;
       }
       if(pcSpaceShip.spaceShipDamage === 0) {
         pcNavegation.style.color = "rgb(0, 189, 0)";
         gameContainer.textContent =`GAME OVER`;
         gameContainer.style.fontSize = '200px';
         gameContainer.style.fontFamily = 'impact';
         gameContainer.style.color = 'white';
         gameContainer.style.textAlign = 'center';
         gameContainer.style.paddingTop = '450px';
       }


      }




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
       // gameContainer.style.border = 'Solid yellow 7px';
        playerSpaceShip.spaceShipDamage --;

        if(playerSpaceShip.spaceShipDamage < 100 && playerSpaceShip.spaceShipDamage >= 75) {
          playerNavegation.style.color = "rgb(0, 189, 0)";
          playerNavegation.textContent =`${player}     Health ${playerSpaceShip.spaceShipDamage} / 100`;
        }
        if(playerSpaceShip.spaceShipDamage < 75 && playerSpaceShip.spaceShipDamage >= 50) {
          playerNavegation.style.color = "yellow";
          playerNavegation.textContent =`${player}     Health ${playerSpaceShip.spaceShipDamage} / 100`;
        }
        if(playerSpaceShip.spaceShipDamage < 50 && playerSpaceShip.spaceShipDamage >= 25) {
          playerNavegation.style.color = "orange";
          playerNavegation.textContent =`${player}     Health ${playerSpaceShip.spaceShipDamage} / 100`;
        }
        if(playerSpaceShip.spaceShipDamage < 25 && playerSpaceShip.spaceShipDamage >= 1) {
          playerNavegation.style.color = "red";
          playerNavegation.textContent =`${player}     Health ${playerSpaceShip.spaceShipDamage} / 100`;
        }
        if(playerSpaceShip.spaceShipDamage === 0) {
          playerNavegation.style.color = "rgb(0, 189, 0)";
          gameContainer.textContent =`GAME OVER`;
          gameContainer.style.fontSize = '200px';
          gameContainer.style.fontFamily = 'impact';
          gameContainer.style.color = 'white';
          gameContainer.style.textAlign = 'center';
          gameContainer.style.paddingTop = '450px';
        }

        
        // Mustafa
        console.log('Pc Space Ship Damage is : ', playerSpaceShip.spaceShipDamage );
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