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
    const table = this.tableFormatter.formatTable(primes);
    return table;
  }
}

module.exports = UserInterface;
