const readline = require('readline');
const userInterface = new (require('./userInterface'))();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class ReadLineController {
  checkIfValidNumber(answer) {
    return !isNaN(parseInt(answer)) && answer > 0;
  }

  promptBadAnser(answer) {
    console.log(`\n${answer} is not valid,`);
    console.log('please use a positive number more than 0!');
  }

  beginLoop() {
    const inputLoop = () => {
      rl.question(userInterface.askNumber(), answer => {
        if (this.checkIfValidNumber(answer)) {
          userInterface.getPrimeTable(answer);
          inputLoop();
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
