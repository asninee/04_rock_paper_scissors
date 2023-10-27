const rps = (input1, input2) => {
  return (input1 === 'R' && input2 === 'S') ||
    (input1 === 'S' && input2 === 'P') ||
    (input1 === 'P' && input2 === 'R')
    ? 'Player 1 wins!'
    : (input2 === 'R' && input1 === 'S') ||
      (input2 === 'S' && input1 === 'P') ||
      (input2 === 'P' && input1 === 'R')
    ? 'Player 2 wins!'
    : 'Draw!';
};

modules.export = {
  rps
};
