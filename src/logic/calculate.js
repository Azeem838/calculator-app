import operate from './operate';

export default function calculate(dataObj, btnName) {
  let data = dataObj;

  switch (btnName) {
    case 'AC':
      data = {
        total: 0,
        next: 0,
        operation: null,
      };
      break;

    case '+/-':
      data = {
        total: -1 * dataObj.total,
        next: dataObj.next,
        operation: btnName,
      };
      break;

    case '%':
    case '÷':
    case 'X':
    case '+':
    case '-':
      data = {
        total: operate(dataObj.total, dataObj.next, dataObj.operation),
        next: dataObj.next,
        operation: btnName,
      };
      break;

    default:
      return data;
  }
  return data;
}
