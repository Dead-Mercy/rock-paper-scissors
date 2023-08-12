
      /*
      const score = {
        wins: 0,
        losses: 0,
        ties: 0
      }; */
      let score = JSON.parse(localStorage.getItem('score')); // to stop counting from 0 every time we refresh the webpage

      // removing 'score' from localstorage results into 'score' being null, so we need to set a default value to score if the 'score' is null
      if (score === null) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      }

      updateScoreElement();


      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score'); // to reset the score 
        updateScoreElement();
      }


      function playGame(playerMove) {

        const myChoice = playerMove;
        const compChoice = computerMove();
        let result = '';

        // if my choice = 'rock'
        if (myChoice === 'rock') {
          if (compChoice === 'scissors') {
            result = 'You win';  
          }
          else if (compChoice === 'paper') {
            result = 'You lose';
          }
          else {
            result = 'Tie';
          }
        }

        // if my choice = 'paper'
        else if (myChoice === 'paper') {
          if (compChoice === 'rock') {
            result = 'You win'; 
          }
          else if (compChoice === 'scissors') {
            result = 'You lose';
          }
          else {
            result = 'Tie';
          }
        }

        // if my choice = 'scissors'
        else {
          if (compChoice === 'paper') {
            result = 'You win';
          }
          else if (compChoice === 'rock') {
            result = 'You lose';
          }
          else {
            result = 'Tie';
          }

        }

        // Score count
        const gameResult = document.querySelector('.js-result');

        if(result === 'You win') {
          score.wins++;
          gameResult.style.color = "green";

        }
        else if(result === 'You lose') {
          score.losses++;
          gameResult.style.color = "red";
        }
        else{
          score.ties++;
          gameResult.style.color = "white";
        }

        localStorage.setItem('score', JSON.stringify(score));

        // alert(`You chose ${myChoice}. Computer chose ${compChoice}. ${result}.\nWins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);


        updateScoreElement();


        // Display selected moves by player and computer
        document.querySelector('.js-moves').innerHTML = `You <div><img class="image" src="images/${myChoice}-emoji.png" style="margin-right: 40px;"></div> <div><img class="image" src="images/${compChoice}-emoji.png"></div> Computer`;


      // Display result
        gameResult.innerHTML = result;

      }



      // Updating the score
      function updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
      

      // generating a computer move
      function computerMove() {

        /* Generating a computer choice by Math.random() function
        which takes a value [0,1) */
        compChoice = Math.random();

        /* Assigning computer choice according to the value
        3 computer choices get 1/3 section of value [0,1) */
        if (compChoice >=0 && compChoice < 1/3) {
          compChoice = 'rock';
        }
        else if (compChoice >= 1/3 && compChoice < 2/3) {
          compChoice = 'paper';
        }
        else {
          compChoice = 'scissors';
        }

        return compChoice;

      }