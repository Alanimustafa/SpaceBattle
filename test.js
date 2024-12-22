
const canvas = document.getElementById('spaceBattle');
const ctx = canvas.getContext('2d');

// Space Ship Box details
let spaceShip = { 
  x: 50,       // Start X Location 
  y: 50,       // Start Y Location 
  width: 50,   // The Ship width
  height: 100, // The Ship height
  dx: 2,       // X increments 
  dy: 2        // Y increments
};

// Fire Box details
let fire = {
  firesSTARTX: 50, // Fire Start X Position 
  firesSTARTY: 50, // Fire Start Y Position 
  fireWidth: 70,   // Fire Size | Width
  fireHeight: 100, // Fire Size | Height
  fireXinc: 0,     // Fire Movement | X Direction
  fireYinc: 5      // Fire Movement | Y Direction (moving downwards)
};

// Load the Ship image
const image1 = new Image();
image1.src = './images/Rocket.png'; // The Space Ship image

// Load the Fire image
const image2 = new Image();
image2.src = './images/fire.png'; // The Fire image 

// Draws the spaceShip and fire
function drawspaceShip() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.drawImage(image1, spaceShip.x, spaceShip.y, spaceShip.width, spaceShip.height); // Draw the SpaceShip
  ctx.drawImage(image2, fire.firesSTARTX, fire.firesSTARTY, fire.fireWidth, fire.fireHeight); // Draw the fire
}

// Update the spaceShip and fire positions
function updatespaceShipPosition() {
  // SpaceShip Movement
  spaceShip.x += spaceShip.dx;
  spaceShip.y += spaceShip.dy;

  // Fire Movement | it will be only on Y direction to make the fire goes down
  fire.firesSTARTY += fire.fireYinc; 

  // Keeping the Space Ship within the canvas
  if (spaceShip.x <= 0 || spaceShip.x + spaceShip.width >= canvas.width) {
    spaceShip.dx *= -1; // Reverse x direction horizontally
  }
  if (spaceShip.y <= 0 || spaceShip.y + spaceShip.height >= canvas.height - 250) {
    spaceShip.dy *= -1; // Reverse y direction vertically
  }

  // Reset fire position if it moves off the canvas
  if (fire.firesSTARTY > canvas.height) {
    fire.firesSTARTY = spaceShip.y + spaceShip.height / 2; // Reset fire Y position
    fire.firesSTARTX = spaceShip.x + spaceShip.width / 2 - fire.fireWidth / 2; // Align fire X position with the spaceship center
  }
}

// Animation loop
function animate() {
  drawspaceShip();
  updatespaceShipPosition();
  requestAnimationFrame(animate); // Loop the animation
}

animate();
// Start the animation once the images are loaded
// image1.onload = animate;
//image2.onload = animate;
