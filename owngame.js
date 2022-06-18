/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach the inputed value or 100 points(ie if no value is inputed) wins the game

*/

debugger
let scores, totalScore, activePlayer, winningScore, dice, dice2, gameOn, diceArr, input;
onSet();

document.querySelector(".roll-btn").addEventListener('click', function() {

    if (gameOn == true) {

    //Getting the dice random number
    dice = Math.ceil(Math.random() * 6);
    dice2 = Math.ceil(Math.random() * 6);
    
    //Selecting a corresponding image of the dice
     let diceDOM = document.querySelector('.dice');
     diceDOM.style.display = "block";


    let diceDOM2 = document.querySelector('.dice2');
    diceDOM2.style.display = "block";

    //Inserting the corresponding image to the dice number can be done as shown in the next line
    // diceDOM.src = "dice-" + dice + ".png";
    

    //the corresponding image can also be inserted using if statement as shown below
      if (dice == 1 || dice2 == 1) {
         diceDOM.src = 'dice-' + dice + '.png';
         diceDOM2.src = 'dice2-' + dice2 + '.png';
     }
     if (dice == 2 || dice2 == 2) {
         diceDOM.src = 'dice-' + dice + '.png';
         diceDOM2.src = 'dice2-' + dice2 + '.png';
     }
     if (dice == 3 || dice2 == 3) {
         diceDOM.src = 'dice-' + dice + '.png';
         diceDOM2.src = 'dice2-' + dice2 + '.png';
     }
     if (dice == 4 || dice2 == 4) {
         diceDOM.src = 'dice-' + dice + '.png';
         diceDOM2.src = 'dice2-' + dice2 + '.png';
     }
     if (dice == 5 || dice2 == 5) {
         diceDOM.src = 'dice-' + dice + '.png';
         diceDOM2.src = 'dice2-' + dice2 + '.png';
     } else {
         diceDOM.src = 'dice-' + dice + '.png';
         diceDOM2.src = 'dice2-' + dice2 + '.png';
     }

    

     if (dice !== 1 && dice2 !== 1) {
        //add the value of the two dice
        let totalDice = dice + dice2;
        totalScore += totalDice;
        document.querySelector('#current-' + activePlayer).textContent = totalScore;
     } else {
        document.querySelector('#current-' + activePlayer).textContent = '0';
         //Hide the dice if the value is one
         diceDOM.style.display = "none";
         diceDOM2.style.display = "none";

        //Next Player
          nextPlayer();
     }
     
    }

});

//Hold button
document.querySelector('.hold-btn').addEventListener('click', function() {
            
    //Add current score to global score
    scores[activePlayer] += totalScore;
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   
    //Check if winning score is inputed
    if (input > 0) {
        winningScore = input;
    } else {
        winningScore = 100;
    };


    if (scores[activePlayer] >= winningScore) {
        document.querySelector('#player-' + activePlayer + '-Name').textContent = 'Winner!';
        document.querySelector('#player-' + activePlayer + '-Name').classList.add('winner');
        document.querySelector('#player-' + activePlayer + '-Name').classList.remove('active');
        document.querySelector('#current-' + activePlayer).textContent = "0";
    
        //hide the dice when their is a winner
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
        gameOn = false;
    } else {

         //hide the dice before next player plays
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.dice2').style.display = 'none';
        
         //NEXT PLAYER
    nextPlayer();
    };
});


//New game button
document.querySelector('#new-game-btn-btn').addEventListener('click', onSet);


//Next PLayer
function nextPlayer() {
    if (activePlayer == 0) {
        document.querySelector('#current-0').textContent = '0';
        activePlayer = 1;
        totalScore = 0;
        document.querySelector('#current-1').textContent = '0';
        document.querySelector('.player-1').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';

    } else {
        document.querySelector('#current-1').textContent = '0';
        activePlayer = 0;
        totalScore = 0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('.player-0').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice2').style.display = 'none';
    };
};

//The initial stage of the game
function onSet() {
    scores = [0, 0];
    activePlayer = 0;
    totalScore = 0;
    gameOn = true;

    //The input winning score
    inputFunction();

    //hide the dice
    document.getElementById("diceImg").style.display = "none";
    document.getElementById("diceImg2").style.display = "none"

    //change player name
    document.querySelector('#player-0-Name').textContent = "PLAYER 1";
    document.querySelector('#player-1-Name').textContent = "PLAYER 2";
    
    //reset all scores and current scores
    document.querySelector('#score-0').textContent = "0";
    document.querySelector('#score-1').textContent = "0";

    document.querySelector('#current-0').textContent = "0";
    document.querySelector('#current-1').textContent = "0";

    //remove active class to active player
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
};


//Setting the winning score for the game
function inputFunction() {
     //for the input
     document.getElementById('inputId').placeholder = 'Enter the winning score'
     document.getElementById('input-btn-btn').addEventListener('click', function(){
         input = document.getElementById('inputId').value;
     });
};

 