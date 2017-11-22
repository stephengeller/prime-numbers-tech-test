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
        '| 0| 1| 2|\n' + '| 1| 1| 2|\n' + '| 2| 2| 4|'
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

  describe('#checkMaxWidth', () => {
    it('sets global cell width of 2d array based on last number', () => {
      expect(tableFormatter.checkMaxWidth([[1, 2, 3], [1, 2, 3]])).toEqual(1);
      expect(tableFormatter.checkMaxWidth([[1, 2, 3], [1, 2, 10]])).toEqual(2);
    });
  });

  describe('#addExtraSpaces', () => {
    it('returns whitespace based on the difference between numbers', () => {
      expect(tableFormatter.addExtraSpaces(2, 3)).toEqual('  ');
      expect(tableFormatter.addExtraSpaces(2, 4)).toEqual('   ');
      expect(tableFormatter.addExtraSpaces(1, 1)).toEqual('');
    });
  });
});
