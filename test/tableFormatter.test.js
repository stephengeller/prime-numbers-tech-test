const TableFormatter = require('../src/tableFormatter');

describe('PrimeChecker', () => {
  let tableFormatter;
  beforeEach(() => {
    tableFormatter = new TableFormatter();
  });

  describe('#renderTable', () => {
    it('prints a string table from arrays', () => {
      const rowArray = [[0, 1, 2], [1, 1, 2], [2, 2, 4]];
      expect(tableFormatter.renderTable(rowArray)).toEqual(
        '|  | 1| 2|\n' + '| 1| 1| 2|\n' + '| 2| 2| 4|'
      );
    });
  });

  describe('#checkForZeros', () => {
    it('replaces zeros in array with one space strings', () => {
      const row = [0, 1, 2];
      expect(tableFormatter.checkForZeros(row)).toEqual([' ', 1, 2]);
    });
  });
});
