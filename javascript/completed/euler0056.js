import BigNumber from 'bignumber.js';

function sum(digits) {
  return digits.reduce((accum, v) => accum + parseInt(v, 10), 0);
}

export function solve56() {
  let maxSum = 0;

  for (var a = 1; a < 100; a++) {
    for (var b = 1; b < 100; b++) {
      const digits = new BigNumber(a).pow(b).valueOf().split('');
      maxSum = Math.max(maxSum, sum(digits));
    }
  }

  return maxSum;
}
