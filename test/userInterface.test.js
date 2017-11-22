const UserInterface = require('../src/userInterface');

describe('UserInterface', () => {
  const primeChecker = {
    getPrimes: jest.fn(arg => arg)
  };
  const tableFormatter = {
    formatTable: jest.fn()
  };
  let userInterface;
  beforeEach(() => {
    userInterface = new UserInterface(primeChecker, tableFormatter);
  });

  describe('#askForNumber', () => {
    it('asks you for a number', () => {
      expect(userInterface.askNumber()).toContain(
        'Please input the number of primes you would like to see'
      );
    });
  });

  describe('#getPrimeTable', () => {
    describe('when valid', () => {
      beforeEach(() => {
        userInterface.getPrimeTable(3);
      });
      it('calls the primeChecker to get primes', () => {
        expect(primeChecker.getPrimes).toHaveBeenCalledWith(3);
      });
      it('calls the tableFormatter', () => {
        expect(tableFormatter.formatTable).toHaveBeenCalledWith(3);
      });
    });
  });
});
