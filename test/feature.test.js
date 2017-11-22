const UserInterface = require('../src/userInterface');

describe('feature', () => {
  test('prints a prime table', () => {
    const userInterface = new UserInterface();
    const table =
      '|   |  2|  3|  5|\n' +
      '|  2|  4|  6| 10|\n' +
      '|  3|  6|  9| 15|\n' +
      '|  5| 10| 15| 25|';
    console.log(table);
    expect(userInterface.getPrimeTable(3)).toEqual(table);
  });
});
