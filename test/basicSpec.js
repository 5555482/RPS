
describe('Tactical Computer Choise ', function() {
  it('computer always selects the choice that would have beaten its last choice', function() {
    expect(tacticalComputerChoise("scissors")).toBe("rock");
    expect(tacticalComputerChoise("paper")).toBe("scissors");
    expect(tacticalComputerChoise("rock")).toBe("paper");
  });
});

describe('Tactical Computer Choise ', function() {
  it('computer always selects the choice that would have beaten its last choice', function() {
    expect(tacticalComputerChoise("scissors")).toBe("rock");
    expect(tacticalComputerChoise("paper")).toBe("scissors");
    expect(tacticalComputerChoise("rock")).toBe("paper");
  });
});
// describe('winning and losing', function() {
//   it('user should see text', function() {
//     uChoice('rock');
//     computerChoice('scissors');
//     expect(game.winner()).toBe(uChoice);
//   });
// });

// describe('clone object', function () {
//   it('should clone an object', function () {
//     var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
//         obj = {};
//     obj = JSON.parse(JSON.stringify(expected)); 
//     expect(obj).toEqual(expected);
//     expect(obj).not.toBe(expected);
//   });
// });

      // it('should lose to paper', function() {

      //   uChoice('rock');
      //   computerChoice('paper');
      //   expect(game.winner()).toBe(computerChoice);

      // });

 //   });
//describe('paper', function() {

      //it('should beat rock', function() {

        //uChoice('paper');
        //computerChoice('rock');
        //expect(game.winner()).toBe(uChoice);

      //});

      //it('should lose to scissors', function() {

      //  uChoice('paper');
       // computerChoice('scissors');
      //  expect(game.winner()).toBe(computerChoice);

     // });

     

  //  });

  //   describe('scissors', function() {

  //     it('should beat paper', function() {

  //       uChoice('scissors');
  //       computerChoice('paper');
  //       expect(game.winner()).toBe(uChoice);

  //     });
  //      it('should lose to rock', function() {

  //       uChoice('scissors');
  //       computerChoice('rock');
  //       expect(game.winner()).toBe(computerChoice);

  //     });

  //   });

  // });

//   describe('equality', function() {

//     describe('any identical picks', function() {

//       it('should result in no winner', function() {
//         var equality = ['rock', 'paper', 'scissors'].map(function(x) {
//           uChoice(x);
//           computerChoice(x);
//           return equality;
//         });

//         expect(equality).toEqual([null, null, null]);

//       });

//     });

//   });

// });