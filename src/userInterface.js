const PrimeChecker = require('./primeChecker');
const TableFormatter = require('./tableFormatter');

class UserInterface {
  constructor(
    primeChecker = new PrimeChecker(),
    tableFormatter = new TableFormatter()
  ) {
    this.primeChecker = primeChecker;
    this.tableFormatter = tableFormatter;
  }

  getPrimeTable(number) {
    const primes = this.primeChecker.getPrimes(number);
    return this.tableFormatter.formatTable(primes);
  }
}

module.exports = UserInterface;
