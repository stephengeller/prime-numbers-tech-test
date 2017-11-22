const UserInterface = require('../src/userInterface');

describe('UserInterface', () => {
  const primeChecker = {
    getPrimes: jest.fn(arg => [])
  };
  const tableFormatter = {
    formatTable: jest.fn()
  };
  let userInterface;
  beforeEach(() => {
    userInterface = new UserInterface(primeChecker, tableFormatter);
  });

  describe('#getPrimeTable', () => {
    describe('when valid', () => {
      beforeEach(() => {
        userInterface.getPrimeTable(3);
      });
      it('calls the primeChecker to get primes', () => {
        expect(primeChecker.getPrimes).toHaveBeenCalledWith(3);
      });
      it('calls the tableFormatter to format the table', () => {
        expect(tableFormatter.formatTable).toHaveBeenCalledWith([]);
      });
    });
  });
});
