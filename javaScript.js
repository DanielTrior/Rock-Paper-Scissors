//variables
const rockString = "rock"
const paperString = "paper"
const scissorsString = "scissors"
const options = 3

let numberOfRounds = 0
let humanScore = 0
let computerScore = 0
let draw = 0

roundsAsk()

function roundsAsk()
{
    numberOfRounds = parseInt(window.prompt("How many rounds you want to play? between 1-10"), 10);

    if ( /^[0-9.,]+$/.test(numberOfRounds) && numberOfRounds <= 10 && numberOfRounds > 0) {
        console.log('number of rounds: ' + numberOfRounds);
        playGame()

    } else {
        roundsAsk()
    }
}

function playGame()
{
    for(let i = 0; i < numberOfRounds; i++)
    {
        console.log("Round: " + (i+1))
        const computerChoice = getComputerChoice()
        const humanChoice = getHumanchoice()
        playRound(humanChoice, computerChoice)
    }
}

function playRound(humanResult, computerResult)
{
    switch(humanResult)
    {
        case humanResult = computerResult:
            console.log("Draw")
            draw ++
            break
        case humanResult = rockString:
            switch (computerResult)
            {
                case(computerResult = paperString):
                    console.log("Computer wins")
                    computerScore ++
                    break
                case (computerResult = scissorsString):
                    console.log("Human wins")
                    humanScore ++
                    break
            }
            break
        case humanResult = paperString:
            switch (computerResult)
            {
                case(computerResult = scissorsString):
                    console.log("Computer wins")
                    computerScore ++
                    break
                case (computerResult = rockString):
                    console.log("Human wins")
                    humanScore ++
                    break
            }
            break
        case humanResult = scissorsString:
            switch (computerResult)
            {
                case(computerResult = rockString):
                    console.log("a")
                    console.log("Computer wins")
                    computerScore ++
                    break
                case (computerResult = paperString):
                    console.log("b")
                    console.log("Human wins")
                    humanScore ++
                    break
            }
            break
    }
    console.log("Human " +humanScore + " Computer " + computerScore +" Draw " + draw)
}

function getComputerChoice()
{
    //floor -> redondea, random->da un random entre 0 y 1, lo multiplicamos por 3
    switch(Math.floor(Math.random()*options))
    {
        case 0:
            console.log(rockString)
            return rockString
        case 1:
            console.log(paperString)
            return paperString
        case 2:
            console.log(scissorsString)
            return scissorsString
    }
}

function getHumanchoice()
{
    const humanChoice = prompt("What's your choice: paper, rock or scissors?")
    let string = humanChoice.toLowerCase()
    switch(string)
    {
        case "rock":
            console.log(rockString)
            return rockString
        case "paper":
            console.log(paperString)
            return paperString
        case "scissors":
            console.log(scissorsString)
            return scissorsString
        default:
            getHumanchoice()
    }
}

