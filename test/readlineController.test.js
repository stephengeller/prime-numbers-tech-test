const ReadlineController = require('../src/readlineController');

describe('ReadLineController', () => {
  let readlineController;
  const userInterface = {
    getPrimeTable: jest.fn(),
    askNumber: jest.fn()
  };
  const rl = {
    question: jest.fn(),
    close: jest.fn()
  };
  beforeEach(() => {
    readlineController = new ReadlineController(userInterface, rl);
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

  describe('#printPrimeTable', () => {
    it('gets prime table from UI', () => {
      readlineController.printPrimeTable(4);
      expect(userInterface.getPrimeTable).toHaveBeenCalledWith(4);
    });
  });
  describe('#beginLoop', () => {
    it('asks question through readline', () => {
      readlineController.beginLoop();
      expect(rl.question).toHaveBeenCalled();
    });
    // describe('with valid number', () => {
    //   it('calls printPrimeTable', () => {
    //     readlineController.beginLoop();
    //     expect(readlineController.printPrimeTable).toHaveBeenCalled();
    //   });
    // });
    // describe('with invalid number', () => {
    //   it('calls promptBadAnser', () => {
    //     readlineController.beginLoop();
    //     expect(readlineController.promptBadAnser).toHaveBeenCalled();
    //   });
    // });
  });
});
