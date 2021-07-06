import _ from 'lodash';
import { isPrime } from '../util.js';

function isPermWithTail(m, n) {
  const mDigs = m.toString().slice(0, 3).split('').sort();
  const nDigs = n.toString().slice(0, 3).split('').sort();
  return _.isEqual(mDigs, nDigs) && m.toString()[3] === n.toString()[3];
}

export function solve49() {
  let nums = [];
  for (let x = 1001; x <= 9999 - 3330 * 2; x += 2) {
    if (isPrime(x)) {
      const x2 = x + 3330;
      if (isPrime(x2) && isPermWithTail(x, x2)) {
        const x3 = x2 + 3330;
        if (isPrime(x3) && isPermWithTail(x2, x3)) {
          nums.push(x.toString() + x2.toString() + x3.toString());
        }
      }
    }
  }

  return nums;
}
