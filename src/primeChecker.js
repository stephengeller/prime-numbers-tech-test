class PrimeChecker {
  checkIfPrime(n) {
    const limit = Math.sqrt(n);
    for (var i = 2; i <= limit; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  getPrimes(numberOfPrimes) {
    if (numberOfPrimes < 1) throw new Error('number has to be more than 1');
    const primesArr = [];
    let i = 2;
    for (i; primesArr.length < numberOfPrimes; i++) {
      if (this.checkIfPrime(i)) {
        primesArr.push(i);
      }
    }
    return primesArr;
  }
}

let pG = new PrimeChecker();
pG.getPrimes(20000);

module.exports = PrimeChecker;
