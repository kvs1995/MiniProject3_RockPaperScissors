


/*
Confirm if user would like to play rock paper scissors

For every round: 
    1) Prompt user to choose R,P or S.
    2) Randomly select between R,P or S to represent computer choise
    3) Alert User of computer choice
    4) If same element is chosen, 
        - Increment tie total.
        - Alert user that it is a tie.
    5) If user chooses R,
        -if computer chooses S
            -alert that user wins
            -increment Win by 1
        -if computer chooses P
            -alert that user lost
            -increment loss by 1
    6)  If user chooses S,
        -if computer chooses P
            -alert that user wins
            -increment Win by 1
        -if computer chooses R
            -alert that user lost
            -increment loss by 1
    7)  If user chooses P,
        -if computer chooses R
            -alert that user wins
            -increment Win by 1
        -if computer chooses S
            -alert that user lost
            -increment loss by 1
    8) Alert User of new tally
    9) Confirm user would like to play again. --


*/

var welcome = confirm("Would you like to play Rock, Paper, Scissors?")
console.log(welcome)

if (welcome === true) {
    RPS()
}
var options = ["R","P","S"]



function RPS(){
    var Wins = 0
    var Losses = 0
    var Ties = 0
    var playAgain = true
    for (;playAgain === true;){
        //get user's choice
        var userChoice = prompt("R, P or S?")

        var options = ["R","P","S"]
        function getRandomInt(max){
            return Math.floor(Math.random() * max);
        }
        //computers random choice
        var compChoice = options[getRandomInt(3)]
        console.log(compChoice)

        //alert user of comp choice
        alert("The computer chose " + compChoice)

        if ((userChoice === "R" && compChoice === "S")||
            (userChoice === "S" && compChoice === "P")||
            (userChoice === "P" && compChoice === "R")){
                Wins++;
                alert("You win!")
        } else if (userChoice === compChoice) {
            Ties++;
            alert("It's a tie!")
            console.log(Ties)
        } else {
            Losses++;
            alert("You lose!")
        }

        //Tally
        alert("Total Score" +"\n" + "Wins: " + Wins + "\n" + "Ties: " + Ties + "\n" + "Losses: " + Losses )
        //playAgain
        playAgain = confirm("Play Again?")


    }
}
