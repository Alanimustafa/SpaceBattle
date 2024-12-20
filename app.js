
// SPace Battle | Game Container |
class SpaceShip {
  constructor (playerName, color, lives, score) {
    this.playerName = playerName,
    this.color = color,
    this.lives = lives,
    this.score = score
  }
}




let spaceBattleMainBoard = document.getElementById('#spaceBattle');
let sBContext = spaceBattleMainBoard.getContext ("2d");





// scoeCounter Function 
function scoreCounter () {

  playerNumber = Number (prompt('enter a number'));

  computerScore = 0;
  computerLives = 3;
for (let i = 0; i <= 100; i++) {
  computerNumber = Math.floor(Math.random(i)*15);
  if( computerNumber !== playerNumber) { 
    console.log(playerNumber, computerNumber, 'Missed');
  } else 
  if ( computerNumber === playerNumber) {
    console.log(Math.floor(Math.random(i)*15), playerNumber)
    console.log(playerNumber, computerNumber,'......................................Decrement the computer life');
    for (computerLives = 3; computerLives >= 0 ; computerLives --) {
      computerScore -- ;
      if (computerScore === 0) {
        console.log('You Won! Game Over');
      }
    }
    break;
  }
}

} 

scoreCounter();
 
