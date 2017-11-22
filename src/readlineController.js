const readline = require('readline');
const UserInterface = require('./userInterface');

class ReadLineController {
  constructor(
    userInterface = new UserInterface(),
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  ) {
    this.rl = rl;
    this.userInterface = userInterface;
  }
  responseIsValid(answer) {
    return !isNaN(parseInt(answer)) && answer > 0;
  }

  promptBadAnser(answer) {
    console.log(`\n${answer} is not valid,`);
    console.log('please use a positive number more than 0!');
    console.log('You can type "exit" to quit');
  }

  printPrimeTable(answer) {
    const table = this.userInterface.getPrimeTable(answer);
    console.log(table);
  }

  beginLoop() {
    const inputLoop = () => {
      this.rl.question(this.userInterface.askNumber(), answer => {
        if (this.responseIsValid(answer)) {
          this.printPrimeTable(answer);
          inputLoop();
        } else if (answer.includes('exit')) {
          this.rl.close();
        } else {
          this.promptBadAnser(answer);
          inputLoop();
        }
      });
    };
    inputLoop();
  }
}

module.exports = ReadLineController;
