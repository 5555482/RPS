var txt = document.querySelector('#resultText');
var ur_hearts = 0; 
var computer_hearts = 0; 
var prev_computere_choice = randomComputerChoice();

function tacticalComputerChoise (prevChoice){
  var result = "scissors";
  if (prevChoice == "scissors") {
    result = "rock";
  }
  else if (prevChoice == "rock") {
    result = "paper";
  }
  return result;
}

function randomComputerChoice() {
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  }
  else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  }
  else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function calcResult(uChoice, computerChoice, win, lose, eq) {
  var result;
  if(computerChoice == "rock"){
    if (uChoice == "paper"){result = win;}
    else if (uChoice == "scissors"){result = lose;}
    else {result = eq;}
  }
  else if(computerChoice == "paper"){
    if (uChoice == "rock"){result = lose;}
    else if (uChoice == "scissors"){result = win;}
    else {result = eq;}
  }
  else if(computerChoice == "scissors"){
    if (uChoice == "rock"){result = win;}
    else if (uChoice == "paper"){result = lose;}
    else {result = eq;}
  }
  return result;
}

function compChoice(isTactical) {
  var computerChoice;
  if (isTactical) {
    computerChoice = tacticalComputerChoise(prev_computere_choice);
  }
  else {
    computerChoice = randomComputerChoice();
  }
  prev_computere_choice = computerChoice;
  return computerChoice;
}

function play(userChoice){
  var isTactical = document.getElementById("tactical").checked;
  var computerChoice = compChoice(isTactical);
    //-------------
    var win = 'Computer: ' + computerChoice + '<span> You win!</span>';
    var lose = 'Computer: ' + computerChoice + '<span> Computer wins!</span>';
    var equality = 'Computer choose also '+ computerChoice + '<span> Draw.</span>';
    //-------------   
    var uChoice = userChoice.target.id;
    var result = calcResult(uChoice, computerChoice, win, lose, equality);

    var clearColor = setTimeout(function(){userChoice.target.style.background ="none";},1000);
    if(result == win ){
      txt.style.color="SlateGray"; 
      userChoice.target.style.background ="WhiteSmoke"; 
      clearColor;
    }
    else if(result == lose){
      txt.style.color="SlateGray";
      userChoice.target.style.background ="WhiteSmoke";
      clearColor;
    }
    else{txt.style.color="SlateGray";userChoice.target.style.background ="WhiteSmoke";}

    hearts(result,win,lose);
  }

  function hearts(result, win, lose){
    var hearts = document.querySelectorAll('.fa-heart');

    if(result == win){
      document.querySelectorAll('#c-hearts li .fa-heart')[computer_hearts++].style.color="#1D1D1D";
    }
    if(result == lose){
      document.querySelectorAll('#u-hearts li .fa-heart')[ur_hearts++].style.color="#1D1D1D";
    }

    if(computer_hearts == 3 || ur_hearts == 3){
      if(computer_hearts == 3 && ur_hearts < 3){
        alert('You are a winner!');
      }
      else {
        alert('You are a losser!')
      }
      resetEnv();
    }  
    return showresult(result);
  }

  function resetEnv() {
    var hearts = document.querySelectorAll('.fa-heart');
    for(i = 0; i < hearts.length; i++){
      hearts[i].style.color="pink";
    }
    ur_hearts = 0; 
    computer_hearts = 0;
    prev_computere_choice = "";
  }

  function showresult (result){
    txt.innerHTML = result;
    return result;
  }