const game = ()=>{
   let pScore = 0;
   let cScore = 0;

//start game
   const startGame = ()=>{
       const playBtn = document.querySelector('.intro button');
       const introScreen = document.querySelector('.intro');
       const match = document.querySelector('.match');
    

       playBtn.addEventListener('click', ()=>{
           introScreen.classList.add('fadeOut');
           match.classList.add('fadeIn')
       });
    }
//play match
const playMatch = () => {
     const options = document.querySelectorAll('.options button');
     const playerHand = document.querySelector('.player-hand');
     const computerHand = document.querySelector('.computer-hand');
     
     //computer options

     const computerOptions = ['rock', 'paper', 'scissors'];
    
     options.forEach(option => {
      option.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
    
        compareHands(this.textContent,computerChoice);
    
        playerHand.src = `./pics/${this.textContent}.png`;
        computerHand.src = `./pics/${computerChoice}.png`;
    });
});

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
        
        
    }



    //check
    const compareHands = (playerChoice, computerChoice)=>{
      const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winner.textContent = 'It is a tie';
            return
        }
        //rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins!';
               pScore++;
               updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //Paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }
        //Scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer Wins!';
               cScore++;
               updateScore();
                return;
            }
        }
    }
     

    }

    startGame();
    playMatch();

}
game();