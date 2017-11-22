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
      expect(primeChecker.getPrimes(3)).toEqual([2, 3, 5]);
    });
    it('works with bigger numbers', () => {
      const firstTenPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      const primeArray = primeChecker.getPrimes(10);
      expect(primeArray).toEqual(firstTenPrimes);
    });
    it('can return only 1 prime', () => {
      expect(primeChecker.getPrimes(1)).toEqual([2]);
    });
    it('throws error if number < 1', () => {
      expect(() => {
        primeChecker.getPrimes(0);
      }).toThrowError('number has to be more than 1');
    });
  });
});
