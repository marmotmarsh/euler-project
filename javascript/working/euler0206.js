import BigNumber from 'bignumber.js';

function addDigits(digs) {
  return '1234567890'
    .split('')
    .map((n, i) => n + (digs[i] || ''))
    .join('');
}

export function solve206() {
  let digits = 1;
  let base;

  do {
    const powString = addDigits(digits.toString().padStart(9, '0'));
    const pow = new BigNumber(powString);
    base = pow.sqrt();
    digits += 1;
  } while (!base.isInteger() && digits <= Math.pow(10, 10));

  return base;
}

// solve206();
