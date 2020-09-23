import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  let total;
  const numOneBig = new Big(numOne);
  const numTwoBig = new Big(numTwo);
  switch (operation) {
    case '+':
      total = numOneBig + numTwoBig;
      break;

    case '-':
      total = numOneBig - numTwoBig;
      break;

    case 'X':
      total = numOneBig * numTwoBig;
      break;

    case '÷':
      total = numOneBig / numTwoBig;
      break;

    case '%':
      total = numOneBig * (numTwoBig / 100);
      break;

    default:
      total = 0;
      break;
  }
  return total;
}
