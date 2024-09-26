function getComputerChoice() {
    const values = ['rock' , 'paper', 'scissors' ]
    const state = values[Math.floor(Math.random() * 3)]
    return state
}

function getHumanChoice() {
    console.log('Choices: Rock , Paper, Scissors')
    const humanChoice = prompt("Enter your Choice: ").toLowerCase()
    return humanChoice
}


function playGame(){
        let humanScore = 0 
        let computerScore = 0
        function playRound(computerChoice, humanChoice){
            humanChoice = humanChoice.toLowerCase()
            if (humanChoice === 'paper' && computerChoice === 'rock') {
                    humanScore += 1
            }else if(humanChoice === 'rock' && computerChoice === 'paper'){
                    computerScore += 1
            }else if (humanChoice === 'paper' && computerChoice === 'scissors'){
                    computerScore += 1
            }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
                    humanScore += 1
            }else if (humanChoice === 'rock' && computerChoice === 'scissors'){
                    humanScore += 1
            }else if (humanChoice === 'scissors' && computerChoice === 'rock'){
                    computerScore += 1
            }else if (humanChoice === computerChoice){
                humanScore +=1
                computerScore += 1
            }

            if (humanScore > computerScore){
                console.log(`You Win ${humanSelection} beats ${computerSelection}`)
            }else if(humanScore < computerScore){
                console.log(`You Lose ${computerSelection} beats ${humanSelection}`)
            }else if (humanScore === computerScore){
                console.log(`Draw Both Chose ${humanSelection}`)
            }
        }

        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(computerSelection, humanSelection)
    }

for(let i = 0 ; i < 5; i++){
    playGame();
}




