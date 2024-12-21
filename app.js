let player1Image = `./images/Rocket.png`;
let player2Image = `./images/Rocket2.png`;

// SPace Battle | Game Container |
class SpaceShip {
  constructor (playerName, icon, lives, score, movement) {
    this.playerName = playerName,
    this.icon = icon,
    this.lives = lives,
    this.score = score,
    this.move = movement
  }
  playerIcon () { // This Instance Function to select the play Icon Shape.

    if (this.icon == 1) {
      console.log('Icon is here');
    } else if (this.icon == 2 ) {
      console.log('Icon 2 is here');
    }
    // this.icon = () => {
    //   if (this.icon === 1) {
    //     const image = new Image();
    //     image.src = './images/Rocket.png'; // Player 1 ICON
    //   } else if (this.icon === 2) {
    //     const image = new Image();
    //     image.src = './images/Rocket2.png'; // Player 1 ICON
    //   }
    // }
  } ;

  

}


let PlayerONE = new SpaceShip("Mustafa", 2, 3, true, 1);

PlayerONE.playerIcon();

// console.log(PlayerONE);













// sBContext.lineTo(200,100);
// sBContext.stroke();




// function sBMovements () {

//   let setBox = () => {
//     let xMove = Math.random()*200;

//     sBContext.fillRect(xMove,20,20,20) ;
//   }

//   let clearBox = () => {
//     sBContext.clearRect(xMove,20,20,20) ;
//   }



//   setInterval(() => {
//          setBox();
//   }, 1000);

//   setInterval(() => {
//     clearBox();
// }, 1000);

  
// }

// sBMovements();

// setTimeout(() => {
//   newFunction();
// }, 3000); 

// setInterval(newFunction, 100);

// scoeCounter Function 
// function scoreCounter () {

//  playerNumber = Number (prompt('enter a number'));

//   computerScore = 0;
//   computerLives = 3;
// for (let i = 0; i <= 100; i++) {
//   computerNumber = Math.floor(Math.random(i)*15);
//   if( computerNumber !== playerNumber) { 
//     console.log(playerNumber, computerNumber, 'Missed');
//   } else 
//   if ( computerNumber === playerNumber) {
//     console.log(Math.floor(Math.random(i)*15), playerNumber)
//     console.log(playerNumber, computerNumber,'......................................Decrement the computer life');
//     for (computerLives = 3; computerLives >= 0 ; computerLives --) {
//       computerScore -- ;
//       if (computerScore === 0) {
//         console.log('You Won! Game Over');
//       }
//     }
//     break;
//   }
// }

// } 

//scoreCounter();
 
