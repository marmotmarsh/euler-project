import { findProperDivisors } from '../util.js';
import _ from 'lodash';

export async function solve23() {
  const n = 28123;
  let total = 0;
  let abundantNumbers = [];
  for (var i = 1; i <= n; i++) {
    const divSum = findProperDivisors(i).reduce((sum, v) => sum + v, 0);
    if (divSum > i) {
      abundantNumbers.push(i);
    }
  }

  let abundantSums = [];
  for (var x = 0; x < abundantNumbers.length; x++) {
    for (var y = 0; y < abundantNumbers.length; y++) {
      abundantSums.push(abundantNumbers[x] + abundantNumbers[y]);
    }
  }

  abundantSums = _.uniq(abundantSums);
  abundantSums.sort();

  for (var z = 1; z <= n; z++) {
    if (!abundantSums.includes(z)) {
      total += z;
    }
  }

  return total;
}
