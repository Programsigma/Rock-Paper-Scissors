// this is rock paper scissors
/* prompt rock paper scissors
assign rock, paper, and scissors to numbers 1 2 3
generate a random number between 1 and 3
if the respective numbers win, output a victory message
*/
let botAnswer = undefined;
let answer = undefined;
let botScore = 0
let playerScore = 0
function RPS(){
    botAnswer = Math.ceil(Math.random() * 3)
    answer = prompt("Please input rock, paper, or scissors");
    answer = answer.toLowerCase()
    if(answer != "rock" && answer != "paper" && answer !="scissors") {
            console.log("Not a valid input, try again.")
            RPS();
        }
    // IF answer == "rock" -> answer = 1
        if (answer == "rock"){ 
            answer = 1
                if(answer == botAnswer){
                    console.log("Tie!") 
            } 
                if(botAnswer == (answer + 2)){
                    console.log("Scissors you win!")
                    playerScore = playerScore + 1
                }
                if(botAnswer == answer + 1){
                    console.log("Paper you lose :(")
                    botScore = botScore + 1
                }
        }
        
        if (answer == "paper"){
            answer = 2
                if(answer == botAnswer){
                    console.log("Tie!")
                }
                if(botAnswer == answer - 1){
                    console.log("Rock you win!")
                    playerScore = playerScore + 1
                }
                if(botAnswer == answer + 1){
                    console.log("Scissors you lose :(")
                    botScore = botScore + 1
                }
        }

        if (answer == "scissors"){
            answer = 3
                if(answer == botAnswer){
                    console.log("Tie!")
                }
                if(botAnswer == answer - 1){
                    console.log("Paper you win!")
                    playerScore = playerScore + 1
                }
                if(botAnswer == answer - 2){
                    console.log("Rock you lose :(")
                    botScore = botScore + 1
                }
        }
      console.log(` Bots score is ${botScore}`)  
      console.log(`Your score is ${playerScore}`)
      if(botScore + playerScore == 5) {
        if(playerScore<botScore){
            console.log("You lose the game :(")
            botScore = 0
            playerScore = 0
        }
        if(playerScore>botScore){
            console.log("You win the game :)")
            botScore = 0
            playerScore = 0
        }
        
     }
    }

 RPS();