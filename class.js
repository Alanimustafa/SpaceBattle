
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
  test () {
    console.log('Yes Im here');
  }
}

// Space Ship Box details
let pcSpaceShip = new SpaceShip (
  50,  // Start X Location 
  50,  // Start Y Location 
  50,  // The Ship width
  100, // The Ship height
  2,   // X increments 
  2    // Y increments
) 

console.log(pcSpaceShip.startX, pcSpaceShip.startY, pcSpaceShip.test());
  
// Fire Box details
let fire = new SpaceShip (
   50, // Fire Start X Position 
   50, // Fire Start Y Position 
   70,   // Fire Size | Width
   100, // Fire Size | Height
   0,     // Fire Movement | X Direction
   5      // Fire Movement | Y Direction (moving downwards)
);

console.log(fire.startX,fire.width)
// Load the Ship image
const image1 = new Image();
image1.src = './images/Rocket.png'; // The Space Ship image

// Load the Fire image
const image2 = new Image();
image2.src = './images/fire.png'; // The Fire image 

// Draws the pcSpaceShip and fire
function drawspaceShip() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  ctx.drawImage(image1, pcSpaceShip.x, pcSpaceShip.y, pcSpaceShip.width, pcSpaceShip.height); // Draw the SpaceShip
  ctx.drawImage(image2, fire.firesSTARTX, fire.firesSTARTY, fire.fireWidth, fire.fireHeight); // Draw the fire
}

// // Update the pcSpaceShip and fire positions
// function updatespaceShipPosition() {
//   // SpaceShip Movement
//   pcSpaceShip.x += pcSpaceShip.dx;
//   pcSpaceShip.y += pcSpaceShip.dy;

//   // Fire Movement | it will be only on Y direction to make the fire goes down
//   fire.firesSTARTY += fire.fireYinc; 

//   // Keeping the Space Ship within the canvas
//   if (pcSpaceShip.x <= 0 || pcSpaceShip.x + pcSpaceShip.width >= canvas.width) {
//     pcSpaceShip.dx *= -1; // Reverse x direction horizontally
//   }
//   if (pcSpaceShip.y <= 0 || pcSpaceShip.y + pcSpaceShip.height >= canvas.height - 250) {
//     pcSpaceShip.dy *= -1; // Reverse y direction vertically
//   }

//   // Reset fire position if it moves off the canvas
//   if (fire.firesSTARTY > canvas.height) {
//     fire.firesSTARTY = pcSpaceShip.y + pcSpaceShip.height / 2; // Reset fire Y position
//     fire.firesSTARTX = pcSpaceShip.x + pcSpaceShip.width / 2 - fire.fireWidth / 2; // Align fire X position with the spaceship center
//   }
// }

// // Animation loop using fucntoin recursion.
// function animate() {
//   drawspaceShip();
//   updatespaceShipPosition();
//   requestAnimationFrame(animate); // Loop the animation
// }

// animate();


// // Start the animation once the images are loaded
// // image1.onload = animate;
// //image2.onload = animate;
