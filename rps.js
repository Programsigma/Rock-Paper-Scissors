// this is rock paper scissors
/* prompt rock paper scissors
assign rock, paper, and scissors to numbers 1 2 3
generate a random number between 1 and 3
if the respective numbers win, output a victory message
*/
let botAnswer = undefined;
let answer = undefined;

function RPS(){
    botAnswer = Math.ceil(Math.random() * 3)
    answer = prompt("Please input rock, paper, or scissors");
    // IF answer == "rock" -> answer = 1
        if (answer == "rock"){ 
            answer = 1
                if(answer == botAnswer){
                    console.log("Tie!") 
            } 
                if(botAnswer == (answer + 2)){
                    console.log("Scissors you win!")
                }
                if(botAnswer == answer + 1){
                    console.log("Paper you lose :(")}
        }
        
        if (answer == "paper"){
            answer = 2
                if(answer == botAnswer){
                    console.log("Tie!")
                }
                if(botAnswer == answer - 1){
                    console.log("Rock you win!")
                }
                if(botAnswer == answer + 1){
                    console.log("Scissors you lose :(")
                }
        }

        if (answer == "scissors"){
            answer = 3
                if(answer == botAnswer){
                    console.log("Tie!")
                }
                if(botAnswer == answer - 1){
                    console.log("Paper you win!")
                }
                if(botAnswer == answer - 2){
                    console.log("Rock you lose :(")
                }
        }
     }
RPS();