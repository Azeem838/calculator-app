import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  let total;
  const numOneBig = new Big(parseFloat(numOne));
  const numTwoBig = new Big(parseFloat(numTwo));
  switch (operation) {
    case '+':
      total = numOneBig.plus(numTwoBig).toString();
      break;

    case '-':
      total = numOneBig.minus(numTwoBig).toString();
      break;

    case 'X':
      total = numOneBig.times(numTwoBig).toString();
      break;

    case '÷':
      try {
        total = numOneBig.div(numTwoBig).toString();
      } catch (error) {
        total = 'NaN';
      }
      break;

    default:
      total = '0';
      break;
  }
  return total;
}
