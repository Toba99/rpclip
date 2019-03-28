let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("comp-score"); 
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = [ "r", "p", "s"];
    const randomNumber =Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors"
}

setTimeout(function() {},1000)

function win(userChoice, computerChoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const smallUserWord = "user" .fontsize(3).sup();
    const smallCompWord = "comp" .fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   beats   ${convertToWord(computerChoice)}${smallCompWord}   . You Win!!🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(function() { userChoice_div.classList.remove("green-glow") },300)
}

function lose(userChoice, computerChoice){
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    const smallUserWord = "user" .fontsize(3).sup();
    const smallCompWord = "comp" .fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   looses to   ${convertToWord(computerChoice)}${smallCompWord}   . You lost!!🤣`;
    userChoice_div.classList.add("red-glow");
    setTimeout(function() { userChoice_div.classList.remove("red-glow") },300)
    
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user" .fontsize(3).sup();
    const smallCompWord = "comp" .fontsize(3).sup();
    const userChoice_div = document.getElementById(userChoice)
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}   draws   ${convertToWord(computerChoice)}${smallCompWord}   . Its a Draw😑`;
    userChoice_div.classList.add("grey-glow");
    setTimeout(function() { userChoice_div.classList.remove("grey-glow") },300)
    
}


function game(userChoice){
 const computerChoice = getComputerChoice();
 switch  (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
 } 

}

function main(){
    rock_div.addEventListener("click", function(){
        game("r");
    })

    paper_div.addEventListener("click", function(){
        game("p");
    })

    scissors_div.addEventListener("click", function(){
        game("s");
    })
}
main();