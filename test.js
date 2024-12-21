


// The Problem in the fire head movement



const canvas = document.getElementById('spaceBattle');
const ctx = canvas.getContext('2d');
const firectx = canvas.getContext('2d');


// Space Ship Box details 
let spaceShip = { 
  x: 50, // Start X Location 
  y: 50,  // Start y Location 
  width: 100, // The Ship width
  height: 100,  // The ship height
  dx: 2, // X increments 
  dy: 2  // Y increments
};

// Fire Box details  
let fire = {
  firesSTARTY: 50, // Fire Start X Position 
  firesSTARTX: 50, // Fire Start Y Position 
  fireWidth: 100, // Fire Size | Width
  fireHeight: 100, // Fire Size | Height
  fireXinc: 2, // Fire Movement | X Direction
  fireYinc: 0  // Fire Movement | Y Direction
}

// Load the Ship image
const image1 = new Image();
image1.src = './images/Rocket.png'; // Replace with your image URL

// Load the Ship image
const image2 = new Image();
image2.src = './images/Rocket2.png'; // Replace with your image URL


// Draws the spaceShip with the image
function drawspaceShip() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.drawImage(image1, spaceShip.x, spaceShip.y, spaceShip.width, spaceShip.height); // Draw the image
}


// Draws the fires with light box
function drawFires() {
  firectx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  firectx.drawImage(image2, fire.firesSTARTX, fire.firesSTARTY, fire.fireWidth, fire.fireHeight); // Draw the image
}

// Update the spaceShip position
function updatespaceShipPosition() {
    // spaceShip Movement
    spaceShip.x += spaceShip.dx * 2;
    spaceShip.y += spaceShip.dy * 2;

    // Check for collisions with canvas edges
    if (spaceShip.x <= 0 || spaceShip.x + spaceShip.width >= canvas.width) {
        spaceShip.dx *= -1; // Reverse horizontal direction
    }
    if (spaceShip.y <= 0 || spaceShip.y + spaceShip.height >= canvas.height -250) {
        spaceShip.dy *= -1; // Reverse vertical direction
    }
}

// Update the spaceShip position
function updateFiresPosition() {

  // fire Head Movement
  fire.firesSTARTX = fire.fireXinc * 2 ;
  fire.firesSTARTY = fire.fireYinc * 2 ;

  // Check for collisions with canvas edges
  if (fire.firesSTARTX <= 0 || fire.firesSTARTX + fire.fireWidth >= canvas.width) {
      fire.fireXinc *= -1; // Reverse horizontal direction
  }
  if (fire.firesSTARTY <= 0 || fire.firesSTARTY + fire.fireHeight >= canvas.height -250) {
      fire.fireYinc *= -1; // Reverse vertical direction
  }
  
}


    
  // Space Ship fires
  function fires () {
    if (spaceShip.x % 19 === 3) { 
      console.log ('A Missile Lunched'); // for test only.

    }
  }


// Animation loop
function animate() {
    drawspaceShip();
    updatespaceShipPosition();
    // drawFires();
    updateFiresPosition();
    requestAnimationFrame(animate); // Loop the animation
    fires();
}

// Start the animation once the image is loaded
image1.onload = animate;
image2.onload = animate;


