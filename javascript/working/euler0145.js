import _ from 'lodash';
import { reverseString } from '../util.js';

export function solve145() {
  const n = Math.pow(10, 8); // 1 billion
  let count = 0;

  for (let x = 1; x <= n; x++) {
    const revX = parseInt(reverseString(x.toString()), 10);

    if (x % 10 === 0 || revX % 10 === 0 || revX < x) {
      continue;
    }

    const sumX = x + revX;
    if (!/[02468]/.test(sumX.toString())) {
      count += 2;
    }
  }

  // console.log(memo);

  return count;
}

// solve145();
