import { reverseString } from '../util.js';
import BigNumber from 'bignumber.js';

function findSumCount(n, count = 0) {
  if (count >= 50) {
    return 0;
  }

  const forward = n.valueOf();
  const backward = reverseString(forward);
  const backN = new BigNumber(backward);

  if (forward === backward && count !== 0) {
    return 0;
  }

  return findSumCount(n.plus(backN), count + 1) + 1;
}

export function solve55() {
  const n = 10000;
  let count = 0;

  for (let i = 1; i < n; i++) {
    if (findSumCount(new BigNumber(i)) >= 50) {
      count++;
    }
  }

  return count;
}
