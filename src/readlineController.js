const readline = require('readline');
const userInterface = new (require('./userInterface'))();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputLoop = () => {
  rl.question(userInterface.askNumber(), answer => {
    if (!isNaN(parseInt(answer)) && answer > 0) {
      userInterface.getPrimeTable(answer);
      inputLoop();
    } else {
      console.log(answer + ' is not valid');
      console.log('please use a positive number more than 0!');
      inputLoop();
    }
  });
};

inputLoop();
