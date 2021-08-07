import BigNumber from 'bignumber.js';
import _ from 'lodash';

export function solve80() {
  const n = 2;
  BigNumber.config({ DECIMAL_PLACES: 500 });
  let sum = 0;

  for (let x = 1; x <= n; x++) {
    if (Math.sqrt(x) !== Math.floor(Math.sqrt(x))) {
      const digits = new BigNumber(x).squareRoot().toString().split('.')[1].slice(0, 100);
      sum += _.sum(digits.split('').map((num) => parseInt(num, 10)));
    }
  }

  return sum;
}

// solve80();
