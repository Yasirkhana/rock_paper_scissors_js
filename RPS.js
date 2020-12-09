const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const score_board_div = document.querySelector(".score-board");

const result_div = document.querySelector("results");

const rock_div = document.getElementById("r")

const paper_div = document.getElementById("p")

const scissors_div = document.getElementById("s")

function get_PC_choice(){
    const choices = ['r', 'p' ,'s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}



function game(userChoice){
    const pcChoice = get_PC_choice();
    console.log("User Choice => " +userChoice);
    console.log("Computer Choice => " + pcChoice)
}
game('c');






function main(){

    rock_div.addEventListener('click', function(){
        game("r")
    })

    paper_div.addEventListener('click', function(){
        game("p")
    })
        
    scissors_div.addEventListener('click', function(){
    game("s")
        })
}

main();