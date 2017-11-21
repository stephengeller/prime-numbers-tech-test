const PrimeChecker = require('../src/primeChecker');

describe('PrimeChecker', () => {
  let primeChecker;
  beforeEach(() => {
    primeChecker = new PrimeChecker();
  });

  it('exists', () => {
    expect(PrimeChecker).toBeDefined();
  });

  describe('#checkPrime', () => {
    it('returns true if number is prime', () => {
      expect(primeChecker.checkPrime(5)).toBe(true);
    });
    it('returns false if number is not prime', () => {
      expect(primeChecker.checkPrime(6)).toBe(false);
    });
  });
});
