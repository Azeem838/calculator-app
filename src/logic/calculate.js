import operate from './operate';

export default function calculate(dataObj, btnName) {
  let data = dataObj;
  const { total, next, operation } = dataObj;

  const operators = ['+', '-', 'X', '÷'];

  if (btnName === 'AC') {
    data = {
      total: null,
      next: null,
      operation: null,
    };
  } else if (total && !next && btnName === '+/-') {
    data = {
      total: (-1 * total).toString(),
      next,
      operation,
    };
  } else if (total && next && btnName === '+/-') {
    data = {
      total,
      next: (-1 * next).toString(),
      operation,
    };
  } else if (
    total &&
    next &&
    btnName === '%' &&
    (operation === '+' || operation === '-')
  ) {
    const percentOfTotal = total * (next * 0.01);
    data = {
      total: operate(total, percentOfTotal, operation),
      next: null,
      operation: null,
    };
  } else if (
    total &&
    next &&
    btnName === '%' &&
    (operation === 'X' || operation === '÷')
  ) {
    const percent = next * 0.01;
    data = {
      total: operate(total, percent, operation),
      next: null,
      operation: null,
    };
  } else if (total && !next && btnName === '%') {
    data = {
      total: (total / 100).toString(),
      next: null,
      operation: null,
    };
  } else if (total && !next && btnName === '.') {
    data = {
      total: `${total}.`,
      next,
      operation,
    };
  } else if (total && next && btnName === '.') {
    data = {
      total,
      next: `${next}.`,
      operation,
    };
  }

  if (!total && !next && !Number.isNaN(Number(btnName))) {
    data = {
      total: btnName,
      next: null,
      operation: null,
    };
  } else if (
    total !== 'NaN' &&
    !next &&
    !Number.isNaN(Number(btnName)) &&
    !operation
  ) {
    data = {
      total: total + btnName,
      next: null,
      operation: null,
    };
  } else if (total !== 'NaN' && !next && operators.includes(btnName)) {
    data = {
      total,
      next,
      operation: btnName,
    };
  } else if (total && !next && !Number.isNaN(Number(btnName)) && operation) {
    data = {
      total,
      next: btnName,
      operation,
    };
  } else if (total && next && !Number.isNaN(Number(btnName)) && operation) {
    data = {
      total,
      next: next + btnName,
      operation,
    };
  } else if (
    total &&
    operation &&
    next &&
    (operators.includes(btnName) || btnName === '=')
  ) {
    const t = operate(total, next, operation);
    let op;
    if (t === 'NaN' || btnName === '=') {
      op = null;
    }
    data = {
      total: t,
      next: null,
      operation: op === null ? null : btnName,
    };
  } else if (total === 'NaN' && next === null && operation === null) {
    let t;
    if (
      operators.includes(btnName) ||
      btnName === '%' ||
      btnName === '+/-' ||
      btnName === '='
    ) {
      t = null;
    }
    data = {
      total: t === null ? null : btnName,
      next: null,
      operation: null,
    };
  }
  return data;
}
