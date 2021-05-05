import _ from 'lodash';
import { findProperDivisors } from '../util.js';

export async function solve21() {
  const n = 10000;
  let total = [];
  let amicableSums = {};
  for (var i = 1; i < n; i++) {
    const divs = findProperDivisors(i);
    const sum = divs.reduce((sum, v) => sum + v, 0);
    amicableSums[i] = sum;
    if (amicableSums[sum] && amicableSums[sum] === i && sum !== i) {
      total = [...total, i, sum];
    }
  }
  return total.reduce((sum, v) => sum + v, 0);
}
