const TableFormatter = require('../src/tableFormatter');

describe('PrimeChecker', () => {
  const rowGenerator = {
    generateRows: jest.fn(array2D => array2D)
  };
  let tableFormatter;
  beforeEach(() => {
    tableFormatter = new TableFormatter(rowGenerator);
  });

  describe('#renderTable', () => {
    it('prints a string table from arrays', () => {
      const rowArray = [[0, 1, 2], [1, 1, 2], [2, 2, 4]];
      expect(tableFormatter.renderTable(rowArray)).toEqual(
        '|  | 1| 2|\n' + '| 1| 1| 2|\n' + '| 2| 2| 4|'
      );
    });
  });

  describe('#formatTable', () => {
    it('calls rowGenerator to return a 2D array', () => {
      const array2D = [[1, 2, 5], [2, 3, 4], [5, 6, 7]];
      tableFormatter.formatTable(array2D);
      expect(rowGenerator.generateRows).toHaveBeenCalledWith(array2D);
    });
  });

  describe('#checkForZeros', () => {
    it('replaces zeros in array with one space strings', () => {
      const row = [0, 1, 2];
      expect(tableFormatter.checkForZeros(row)).toEqual([' ', 1, 2]);
    });
  });
});
