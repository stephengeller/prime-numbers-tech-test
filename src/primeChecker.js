class PrimeChecker {
  checkIfPrime(number) {
    if (number === 0) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return number !== 1;
  }

  getPrimes(numberOfPrimes, primesArr = [], currentNumber = 2) {
    if (numberOfPrimes < 1) throw new Error('number has to be more than 1');
    if (this.checkIfPrime(currentNumber)) {
      primesArr.push(currentNumber);
    }
    if (primesArr.length < numberOfPrimes) {
      this.getPrimes(numberOfPrimes, primesArr, currentNumber + 1);
    }
    return primesArr;
  }
}

module.exports = PrimeChecker;
