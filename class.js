
const canvas = document.getElementById('spaceBattle');
const ctx = canvas.getContext('2d');

class SpaceShip {
  constructor (startX, startY, width, height, xDirection, yDirection) {
    this.startX = startX,
    this.startY = startY,
    this.width = width,
    this.height = height,
    this.xDirection = xDirection,
    this.yDirection = yDirection
  }
}

// Space Ship PC Box details
let pcSpaceShip = new SpaceShip (
  50,  // Start X Location 
  50,  // Start Y Location 
  50,  // The Ship width
  100, // The Ship height
  2,   // X increments 
  2    // Y increments
) 

  
// Fire PC Box details
let pcFire = new SpaceShip (
   50, // Fire Start X Position 
   50, // Fire Start Y Position 
   70,   // Fire Size | Width
   100, // Fire Size | Height
   0,     // Fire Movement | X Direction
   5      // Fire Movement | Y Direction (moving downwards)
);


// Space Ship PLayer Box details
let playerSpaceShip = new SpaceShip (
  450,  // Start X Location 
  650,  // Start Y Location 
  70,  // The Ship width
  100, // The Ship height
  2,   // X increments 
  2    // Y increments
) 


// Fire Player Box details
let playerFire = new SpaceShip (
  450, // Fire Start X Position 
  650, // Fire Start Y Position 
  70,   // Fire Size | Width
  100, // Fire Size | Height
  0,     // Fire Movement | X Direction
  - 5      // Fire Movement | Y Direction (moving downwards)
);

// Load the PC Ship image
const image1 = new Image();
image1.src = './images/Rocket.png'; // The Space Ship image

// Load the Fire image
const image2 = new Image();
image2.src = './images/fire.png'; // The Fire image 

// Load the Player Ship image
const image3 = new Image();
image3.src = './images/Rocket2.png'; // The Space Ship image

// Load the Fire image
const image4 = new Image();
image4.src = './images/playerfire.png'; // The Fire image 

// Draws the pcSpaceShip and fire
function drawspaceShip() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.drawImage(image1, pcSpaceShip.startX, pcSpaceShip.startY, pcSpaceShip.width, pcSpaceShip.height); // Draw the PC SpaceShip
  ctx.drawImage(image2, pcFire.startX, pcFire.startY, pcFire.width, pcFire.height); // Draw the PC fire

  ctx.drawImage(image3, playerSpaceShip.startX, playerSpaceShip.startY, playerSpaceShip.width, playerSpaceShip.height); // Draw the Player SpaceShip
  ctx.drawImage(image4, playerFire.startX, playerFire.startY, playerFire.width, playerFire.height); // Draw the Player fire

}

// Update the pcSpaceShip and fire positions
function updatespaceShipPosition() {
    // SpaceShip Movement
    pcSpaceShip.startX += pcSpaceShip.xDirection;
    pcSpaceShip.startY += pcSpaceShip.yDirection;

    // Fire Movement | it will be only on Y direction to make the fire goes down
    pcFire.startY += pcFire.yDirection; 

    // Keeping the Space Ship within the canvas
    if (pcSpaceShip.startX <= 0 || pcSpaceShip.startX + pcSpaceShip.width >= canvas.width) {
      pcSpaceShip.xDirection *= -1; // Reverse x direction horizontally
    }
    if (pcSpaceShip.startY <= 0 || pcSpaceShip.startY + pcSpaceShip.height >= canvas.height - 250) {
      pcSpaceShip.yDirection *= -1; // Reverse y direction vertically
    }

    // Reset fire position if it moves off the canvas
    if (pcFire.startY > canvas.height) {
      pcFire.startY = pcSpaceShip.startY + pcSpaceShip.height / 2; // Reset fire Y position
      pcFire.startX = pcSpaceShip.startX + pcSpaceShip.width / 2 - pcFire.width / 2; // Align fire X position with the spaceship center
    }
}

// Animation loop using fucntoin recursion.
function animate() {
  drawspaceShip();
  updatespaceShipPosition();
  requestAnimationFrame(animate); // Loop the animation
}

//animate();


// Start the animation once the images are loaded
image1.onload = animate;
image2.onload = animate;
