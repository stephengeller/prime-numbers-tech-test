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
      expect(grid).toEqual([[0, 1, 2], [1, 1, 2], [2, 2, 4]]);
    });

    it('works with random numbers', () => {
      let grid = rowGenerator.generateRows([1, 4]);
      expect(grid).toEqual([[0, 1, 4], [1, 1, 4], [4, 4, 16]]);
    });
  });
});
