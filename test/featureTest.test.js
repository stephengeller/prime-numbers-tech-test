const PrimeChecker = require('../src/primeChecker');
const RowGenerator = require('../src/rowGenerator');
const TableFormatter = require('../src/tableFormatter');

describe('feature', () => {
  it('prints a prime table', () => {
    const primeChecker = new PrimeChecker();
    const rowGenerator = new RowGenerator();
    const primesArray = primeChecker.getPrimes(3);
    const rows = rowGenerator.generateRows(primesArray);
    const tableFormatter = new TableFormatter();
    const table = tableFormatter.renderTable(rows);

    expect(table).toEqual(
      '|  | 2| 3| 5|\n' +
        '| 2| 4| 6| 10|\n' +
        '| 3| 6| 9| 15|\n' +
        '| 5| 10| 15| 25|'
    );
  });
});
