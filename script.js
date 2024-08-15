const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function getComputerChoice(){
    var engCompChoice;
    let compChoice = Math.floor(Math.random()*3 +1);
    switch (compChoice){
        case 1:
            engCompChoice = "Rock"
            break;
        case 2:
            engCompChoice = "Paper"
            break;
        case 3: 
            engCompChoice = "Scissors"
            break;
        default:
            prompt("Did not enter a valid choice.");
    }
    console.log(engCompChoice);
    return compChoice;
}

function getHumanChoice() {
    let humanChoice = Number(window.prompt("Enter 1 for Rock, 2 for Paper, or 3 for Scissors."));
    while (![1, 2, 3].includes(humanChoice)) {
        humanChoice = Number(window.prompt("Invalid choice. Please enter 1 for Rock, 2 for Paper, or 3 for Scissors."));
    }
    console.log(`Human chose ${humanChoice === 1 ? "Rock" : humanChoice === 2 ? "Paper" : "Scissors"}`);
    return humanChoice;
}

var humanScore = 0;
var computerScore = 0;
function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        window.alert("Tie! No Winners");
    } else if (
        (humanChoice === 1 && compChoice === 2) ||
        (humanChoice === 2 && compChoice === 3) ||
        (humanChoice === 3 && compChoice === 1)
    ) {
        window.alert(`Computer wins this round!`);
        computerScore++;
    } else {
        window.alert(`You win this round!`);
        humanScore++;
    }
}


function fiveRounds(){
    alert("We will be playing a round of 5.")
    for (var r = 1; r < 6; r++){
        const computerSlection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSlection);
    }
    if (humanScore > computerScore)
        window.alert("Humans win!")
    else{
        window.alert("Computers win!")
    }
}

fiveRounds();