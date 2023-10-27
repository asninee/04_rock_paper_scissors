const prompt = require('prompt-sync')({ sigint: true });
const { rps } = require('./rps');

let carryOn = true;
const validChars = ['R', 'P', 'C'];

while (carryOn === true) {
  /* Player 1 input section */

  let input1 = prompt(
    'Player 1 => please select from rock, paper and scissors (R, P, S):  '
  );

  // Loops as long as a falsy value is inputted
  while (!input1) {
    console.log('\nERROR: Player 1, you must enter a string!\n');
    input1 = prompt(
      'Player 1 => please select from rock, paper and scissors (R, P, S):  '
    );
  }

  // Loops as long as the inputted string is not from the valid values
  while (!validChars.includes(input1.toUpperCase())) {
    console.log(
      '\nERROR: Player 1, the string you have entered is not valid!\n'
    );
    input1 = prompt(
      'Player 1 => please select from rock, paper and scissors (R, P, S):  '
    );
  }

  /* Player 2 input section */

  let input2 = prompt(
    'Player 2 => please select from rock, paper and scissors (R, P, S):  '
  );

  // Loops as long as a falsy value is inputted
  while (!input2) {
    console.log('\nERROR: Player 2, you must enter a string!\n');
    input2 = prompt(
      'Player 2 => please select from rock, paper and scissors (R, P, S):  '
    );
  }

  // Loops as long as the inputted string is not from the valid values
  while (!validChars.includes(input2.toUpperCase())) {
    console.log(
      '\nERROR: Player 2, the string you have entered is not valid!\n'
    );
    input2 = prompt(
      'Player 2 => please select from rock, paper and scissors (R, P, S):  '
    );
  }

  const result = rps(input1.toUpperCase(), input2.toUpperCase());

  console.log(`\n${result}\n`);
}
