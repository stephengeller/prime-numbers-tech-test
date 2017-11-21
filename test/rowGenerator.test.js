const RowGenerator = require('../src/rowGenerator');

describe('PrimeChecker', () => {
  let rowGenerator;
  beforeEach(() => {
    rowGenerator = new RowGenerator();
  });

  it('exists', () => {
    expect(rowGenerator).toBeDefined();
  });

  describe('#generateRow', () => {
    it('creates an N+1 x N+1 grid', () => {
      let grid = rowGenerator.generateRow([1, 2]);
      expect(grid).toEqual('|  | 1| 2|\n' + '| 1| 1| 2|\n' + '| 2| 2| 4|\n');
    });

    it('works with random numbers', () => {
      let grid = rowGenerator.generateRow([1, 4]);
      expect(grid).toEqual('|  | 1| 4|\n' + '| 1| 1| 4|\n' + '| 4| 4| 16|\n');
    });
  });
});
