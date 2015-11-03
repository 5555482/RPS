describe('Tactical computer choise ', function() {
  it('computer always selects the choice that would have beaten its last choice', function() {
    expect(tacticalComputerChoise("scissors")).toBe("rock");
    expect(tacticalComputerChoise("paper")).toBe("scissors");
    expect(tacticalComputerChoise("rock")).toBe("paper");
  });
});

describe("paper", function(){

  it('paper beat rock', function() {
        expect(calcResult("paper", "rock", "You win!", "Computer wins!", "Draw.")).toBe("You win!");
  });
  it('scissors beat paper', function() {
        expect(calcResult("paper", "scissors", "You win!", "Computer wins!", "Draw.")).toBe("Computer wins!");
  });
  it('paper draw paper', function() {
        expect(calcResult("paper", "paper", "You win!", "Computer wins!", "Draw.")).toBe("Draw.");
  });
});

describe("rock", function(){

  it('paper beat rock', function() {
        expect(calcResult("rock", "paper", "You win!", "Computer wins!", "Draw.")).toBe("Computer wins!");
  });
  it('rock beat scissors', function() {
        expect(calcResult("rock", "scissors", "You win!", "Computer wins!", "Draw.")).toBe("You win!");
  });
  it('rock draw rock', function() {
        expect(calcResult("rock", "rock", "You win!", "Computer wins!", "Draw.")).toBe("Draw.");
  });
});



  
 