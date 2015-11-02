describe('winning and losing', function() {

    describe('rock', function() {

      it('should beat scissors', function() {

        uChoice('rock');
        computerChoice('scissors');
        expect(game.winner()).toBe(uChoice);

      });

      it('should lose to paper', function() {

        uChoice('rock');
        computerChoice('paper');
        expect(game.winner()).toBe(computerChoice);

      });

    });
describe('paper', function() {

      it('should beat rock', function() {

        uChoice('paper');
        computerChoice('rock');
        expect(game.winner()).toBe(uChoice);

      });

      it('should lose to scissors', function() {

        uChoice('paper');
        computerChoice('scissors');
        expect(game.winner()).toBe(computerChoice);

      });

     

    });

    describe('scissors', function() {

      it('should beat paper', function() {

        uChoice('scissors');
        computerChoice('paper');
        expect(game.winner()).toBe(uChoice);

      });
       it('should lose to rock', function() {

        uChoice('scissors');
        computerChoice('rock');
        expect(game.winner()).toBe(computerChoice);

      });

    });

  });

  describe('equality', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {
        var equality = ['rock', 'paper', 'scissors'].map(function(x) {
          uChoice(x);
          computerChoice(x);
          return equality;
        });

        expect(equality).toEqual([null, null, null]);

      });

    });

  });

});