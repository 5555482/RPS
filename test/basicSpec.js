describe('Tactical computer choise ', function() {
  it('computer always selects the choice that would have beaten its last choice', function() {
    expect(tacticalComputerChoise("scissors")).toBe("rock");
    expect(tacticalComputerChoise("paper")).toBe("scissors");
    expect(tacticalComputerChoise("rock")).toBe("paper");
  });
});


// describe('random Computer Choice', function() {
//   it('random Computer Choice', function() {
//     expect(tacticalComputerChoise("scissors")).toBe("rock");
//     expect(tacticalComputerChoise("paper")).toBe("scissors");
//     expect(tacticalComputerChoise("rock")).toBe("paper");
//   });
// });

// describe('scissors', function() {
//   beforeEach(fucntion() {
//     addFixture("<input type='checkbox' id='tactical'>");
//   });

//   afterEach(function(){
//     clearMyFixtures();
//   });
// });


  it('should beat paper', function() {
        choice('scissors');
        randomComputerChoice('paper');
        expect(showresult).toBe("You win!");
  });
  it('rock beat scissors', function() {
        choice('scissors');
        randomComputerChoice('rock');
        expect(showresult).toBe("Computer wins!");
  });


  
 