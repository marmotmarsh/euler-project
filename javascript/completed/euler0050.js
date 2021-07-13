import fs from 'fs';
import _ from 'lodash';

export function solve50() {
  const maxPrime = 1000000;

  const file = fs.readFileSync('./data/primes1000000.txt', {
    encoding: 'utf-8',
  });
  const allPrimes = file.trim().split(/\s+/);

  let primeMap = new Map();
  let primes = [];

  for (let i = 0; i < allPrimes.length; i++) {
    const prime = parseInt(allPrimes[i], 10);
    if (prime >= maxPrime) {
      break;
    }

    primeMap.set(prime, true);
    primes.push(prime);
  }

  let length = 0;
  let maxPrimesSum = primes[length];

  while (maxPrimesSum <= maxPrime) {
    length++;
    maxPrimesSum += primes[length];
  }

  let result = 0;

  do {
    length--;
    let primesSum = 0;
    for (let i = 0; i < length; i++) {
      primesSum += primes[i];
    }
    let i = 0;
    do {
      if (primeMap.get(primesSum)) {
        result = primesSum;
        break;
      }
      primesSum -= primes[i];
      primesSum += primes[length + i];
      i++;
    } while (primesSum <= maxPrime);
  } while (result === 0);

  return result;
}
