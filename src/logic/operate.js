import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  let total;
  Big.PE = 10;
  const numOneBig = new Big(parseFloat(numOne));
  const numTwoBig = new Big(parseFloat(numTwo));
  switch (operation) {
    case '+':
      total = parseFloat(numOneBig.plus(numTwoBig).toFixed(10)).toString();
      break;

    case '-':
      total = parseFloat(numOneBig.minus(numTwoBig).toFixed(10)).toString();
      break;

    case 'X':
      total = parseFloat(numOneBig.times(numTwoBig).toFixed(10)).toString();
      break;

    case '÷':
      try {
        total = parseFloat(numOneBig.div(numTwoBig).toFixed(10)).toString();
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
