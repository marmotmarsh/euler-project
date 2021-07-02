import { isPrime as _isPrime } from '../util.js';

function isPrime(n, primeMap, primeArray) {
  if (primeMap.get(n) === undefined) {
    const isIt = _isPrime(n);
    if (isIt) {
      primeArray.push(n);
    }
    primeMap.set(n, isIt);
  }
  return primeMap.get(n);
}

export function solve46() {
  let n = 1;
  let primeMap = new Map();
  let primes = [];
  let result = 0;

  while (result === 0) {
    if (!isPrime(n, primeMap, primes)) {
      let foundOne = n > 1;
      for (let prime of primes) {
        if (Number.isInteger(Math.sqrt((n - prime) / 2))) {
          foundOne = false;
          break;
        }
      }

      if (foundOne) {
        result = n;
      }
    }

    n += 2;
  }

  return result;
}
