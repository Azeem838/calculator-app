import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  let total;
  Big.PE = 10;
  const numOneBig = new Big(parseFloat(numOne));
  const numTwoBig = new Big(parseFloat(numTwo));
  switch (operation) {
    case '+':
      total = numOneBig.plus(numTwoBig).toPrecision(5).toString();
      break;

    case '-':
      total = numOneBig.minus(numTwoBig).toPrecision(5).toString();
      break;

    case 'X':
      total = numOneBig.times(numTwoBig).toPrecision(5).toString();
      break;

    case '÷':
      try {
        total = numOneBig.div(numTwoBig).toPrecision(5).toString();
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
