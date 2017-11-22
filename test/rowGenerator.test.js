const RowGenerator = require('../src/rowGenerator');

describe('PrimeChecker', () => {
  let rowGenerator;
  beforeEach(() => {
    rowGenerator = new RowGenerator();
  });

  it('exists', () => {
    expect(rowGenerator).toBeDefined();
  });

  describe('#generateRows', () => {
    it('creates an N+1 x N+1 grid', () => {
      let grid = rowGenerator.generateRows([1, 2]);
      expect(grid).toEqual([[' ', 1, 2], [1, 1, 2], [2, 2, 4]]);
    });

    it('works with random numbers', () => {
      let grid = rowGenerator.generateRows([1, 4]);
      expect(grid).toEqual([[' ', 1, 4], [1, 1, 4], [4, 4, 16]]);
    });
  });

  describe('#checkForZeros', () => {
    it('replaces zeros in array with one space strings', () => {
      const row = [0, 1, 2];
      expect(rowGenerator.checkForZeros(row)).toEqual([' ', 1, 2]);
    });
  });
});
