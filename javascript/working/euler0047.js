import _ from 'lodash';
import { findPrimeFactors, isPrime } from '../util.js';

function hasNFactors(base, n) {
  if (isPrime(base)) {
    return 1 === n;
  }
  return Object.keys(findPrimeFactors(base)).length === n;
}

export function solve47() {
  const n = 4;
  let base = n;
  let nums = [];
  let hasIt = false;

  while (!hasIt) {
    base += n;
    nums = [];

    if (hasNFactors(base, n)) {
      nums.push(base);

      for (let i = base - 1; i > base - n; i--) {
        if (hasNFactors(i, n)) {
          nums.push(i);
        } else {
          break;
        }
      }

      for (let i = base + 1; i < base + n; i++) {
        if (hasNFactors(i, n)) {
          nums.push(i);
        } else {
          break;
        }
      }
    }

    if (nums.length >= n) {
      hasIt = true;
    }
  }

  nums.sort();

  return nums[0];

  // return findPrimeFactors(134039);
}

// solve47();
