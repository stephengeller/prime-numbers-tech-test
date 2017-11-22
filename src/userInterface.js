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
  askNumber() {
    return 'Please input the number of primes you would like to see: ';
  }

  printToConsole(value) {
    return console.log(value);
  }

  getPrimeTable(number) {
    const primes = this.primeChecker.getPrimes(number);
    const table = this.tableFormatter.formatTable(primes);
    this.printToConsole(table);
    return table;
  }
}

module.exports = UserInterface;
