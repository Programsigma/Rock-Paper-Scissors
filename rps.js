// this is rock paper scissors
/* prompt rock paper scissors
assign rock, paper, and scissors to numbers 1 2 3
generate a random number between 1 and 3
if the respective numbers win, output a victory message
*/

let answer = undefined;
function gooner(){
     answer = prompt("Please input rock, paper, or scissors")
}
gooner()
let rock = 1
let paper = 2
let scissors = 3
let botAnswer = Math.random(1,3)
for(let rock = 1; rock == answer; rock++) {
    if(answer == botAnswer, console.log("Tie!"))
}
console.log(answer)