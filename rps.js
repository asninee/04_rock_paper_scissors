const rps = (input1, input2) => {
  return (input1 === 'R' && input2 === 'S') ||
    (input1 === 'S' && input2 === 'P') ||
    (input1 === 'P' && input2 === 'R')
    ? `P1: ${input1}\nP2: ${input2}\n=> Player 1 wins!`
    : (input2 === 'R' && input1 === 'S') ||
      (input2 === 'S' && input1 === 'P') ||
      (input2 === 'P' && input1 === 'R')
    ? `P1: ${input1}\nP2: ${input2}\n=> Player 2 wins!`
    : `P1: ${input1}\nP2: ${input2}\n=> It's a draw!`;
};

module.exports = {
  rps
};
