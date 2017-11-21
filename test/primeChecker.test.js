const PrimeChecker = require('../src/primeChecker');

describe('PrimeChecker', () => {
  let primeChecker;
  beforeEach(() => {
    primeChecker = new PrimeChecker();
  });

  it('exists', () => {
    expect(PrimeChecker).toBeDefined();
  });

  describe('#checkIfPrime', () => {
    it('returns true if number is prime', () => {
      expect(primeChecker.checkIfPrime(5)).toBe(true);
    });
    it('returns false if number is not prime', () => {
      expect(primeChecker.checkIfPrime(6)).toBe(false);
      expect(primeChecker.checkIfPrime(0)).toBe(false);
      expect(primeChecker.checkIfPrime(1)).toBe(false);
    });
  });

  describe('#getPrimes', () => {
    it('returns a specific number of primes starting from 2', () => {
      const primeArray = primeChecker.getPrimes(3);
      expect(primeArray).toEqual([2, 3, 5]);
    });
  });
});
