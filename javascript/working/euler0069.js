import fs from 'fs';
import _ from 'lodash';
import { findPrimeFactors } from '../util.js';

export function solve69() {
  const file = fs.readFileSync('./data/primes1000000.txt', {
    encoding: 'utf-8',
  });
  const allPrimes = file.trim().split(/\s+/);
  const n = 10000;
  let primes = [];
  let usedPrimes = [];
  let factorMap = new Map();

  for (let p of allPrimes) {
    const prime = parseInt(p, 10);
    if (prime > n) {
      break;
    }
    primes.push();
  }

  let results = [];

  for (let x = 2; x <= n; x++) {
    if (primes[0] === x) {
      primes.shift();
      usedPrimes.push(x);
      continue;
    }

    let factors;
    let usedPrevFactors = false;
    for (let prime of usedPrimes) {
      if (x % prime === 0 && factorMap.get(x / prime)) {
        usedPrevFactors = true;
        factors = _.uniq([prime, ...factorMap.get(x / prime)]);
        break;
      }
    }
    if (!usedPrevFactors) {
      factors = Object.keys(findPrimeFactors(x)).map((v) => parseInt(v, 10));
    }
    factors.sort();
    factorMap.set(x, factors);
    let relativeNonPrimes = [];
    for (let fac of factors) {
      relativeNonPrimes.push(...Array.from({ length: x / fac - 1 }, (_, i) => (i + 1) * fac));
    }
    results.push({ n: x, phi: x - _.uniq(relativeNonPrimes).length - 1 });
  }

  return results.sort((a, b) => a.n / a.phi - b.n / b.phi).pop().n;
}

// solve69();
