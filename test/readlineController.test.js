const ReadlineController = require('../src/readlineController');

describe('ReadLineController', () => {
  let readlineController;
  const userInterface = {
    getPrimeTable: jest.fn(() => {
      return 'table';
    }),
    askNumber: jest.fn()
  };
  const rl = {
    question: jest.fn(),
    close: jest.fn()
  };
  const logger = jest.fn();
  beforeEach(() => {
    readlineController = new ReadlineController(userInterface, rl, logger);
  });
  describe('#responseIsValid', () => {
    it('returns true if positive number > 0', () => {
      expect(readlineController.responseIsValid('3')).toEqual(true);
      expect(readlineController.responseIsValid('10')).toEqual(true);
    });
    it('returns false if invalid number', () => {
      expect(readlineController.responseIsValid('hello')).toEqual(false);
      expect(readlineController.responseIsValid('-1')).toEqual(false);
      expect(readlineController.responseIsValid(-1)).toEqual(false);
      expect(readlineController.responseIsValid(0)).toEqual(false);
    });
  });

  describe('#beginLoop', () => {
    it('asks question through readline', () => {
      readlineController.beginLoop();
      expect(rl.question).toHaveBeenCalled();
    });
  });

  describe('#promptBadAnswer', () => {
    it('message saying num is invalid & exit option gets printed to console', () => {
      readlineController.promptBadAnswer(5);
      expect(logger).toHaveBeenCalledWith('\n5 is not valid,');
      expect(logger).toHaveBeenCalledWith(
        'please use a positive number more than 0!'
      );
      expect(logger).toHaveBeenCalledWith('You can type "exit" to quit');
    });
  });
  describe('#printPrimeTable', () => {
    it('prints a table to the console', () => {
      readlineController.printPrimeTable(5);
      expect(userInterface.getPrimeTable).toHaveBeenCalledWith(5);
      expect(logger).toHaveBeenCalledWith('table');
    });
  });
});
