const readline = require('readline');
const UserInterface = require('./userInterface');

class ReadLineController {
  constructor(
    userInterface = new UserInterface(),
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    }),
    logger = console.log
  ) {
    this.rl = rl;
    this.userInterface = userInterface;
    this.logger = logger;
  }

  responseIsValid(answer) {
    return !isNaN(parseInt(answer)) && answer > 0;
  }

  promptBadAnswer(answer) {
    this.logger(`\n${answer} is not valid,`);
    this.logger('please use a positive number more than 0!');
    this.logger('You can type "exit" to quit');
  }

  printPrimeTable(answer) {
    const table = this.userInterface.getPrimeTable(answer);
    this.logger(table);
  }

  beginLoop() {
    const inputLoop = () => {
      this.rl.question(
        'Please input the number of primes you would like to see: ',
        answer => {
          if (this.responseIsValid(answer)) {
            this.printPrimeTable(answer);
            inputLoop();
          } else if (answer.includes('exit')) {
            this.rl.close();
          } else {
            this.promptBadAnswer(answer);
            inputLoop();
          }
        }
      );
    };
    inputLoop();
  }
}

module.exports = ReadLineController;
