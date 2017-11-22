const UserInterface = require('../src/userInterface');

describe('feature', () => {
  it('prints a prime table', () => {
    const userInterface = new UserInterface();
    expect(userInterface.getPrimeTable(3)).toEqual(
      '|  | 2| 3| 5|\n' +
        '| 2| 4| 6| 10|\n' +
        '| 3| 6| 9| 15|\n' +
        '| 5| 10| 15| 25|'
    );
  });
});
