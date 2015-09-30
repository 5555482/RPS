var txt = document.querySelector('#resultText');
var ur_hearts = 0; 
var computer_hearts = 0; 


function choice (userChoice){
    var result;
    var computerChoice = Math.random();
    var uChoice = userChoice.target.id;

    if (computerChoice < 0.34) {
      computerChoice = "rock";
    }
    else if (computerChoice <= 0.67) {
      computerChoice = "paper";
    }
    else {
      computerChoice = "scissors";
    }
    //-------------
    var win = 'Computer: ' + computerChoice + '<span> You win!</span>';
    var lose = 'Computer: ' + computerChoice + '<span> Computer wins!</span>';
    var equality = 'Computer choose also '+ computerChoice + '<span> Draw.</span>';
    //-------------   
    if(computerChoice == "rock"){
         if (uChoice == "paper"){result = win;}
         else if (uChoice == "scissors"){result = lose;}
         else {result = equality;}
    }
    else if(computerChoice == "paper"){
         if (uChoice == "rock"){result = lose;}
         else if (uChoice == "scissors"){result = win;}
         else {result = equality;}
    }
    else if(computerChoice == "scissors"){
         if (uChoice == "rock"){result = win;}
         else if (uChoice == "paper"){result = lose;}
         else {result = equality;}
    }

    var clearColor = setTimeout(function(){userChoice.target.style.background ="none";},1000);
    if(result == win ){
      txt.style.color="green"; 
      userChoice.target.style.background ="green"; 
      clearColor;
  }
    else if(result == lose){
      txt.style.color="green";
      userChoice.target.style.background ="green";
      clearColor;
    }
    else{txt.style.color="white";userChoice.target.style.background ="white";}

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
      else{alert('You are a losser!')}
        for(i = 0; i < hearts.length; i++){
          hearts[i].style.color="green";
        }
        ur_hearts = 0; 
        computer_hearts = 0;
    }  
    return showresult(result);
}

function showresult (result){
  txt.innerHTML = result;
}