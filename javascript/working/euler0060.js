import { combinations, isPrime as _isPrime } from '../util.js';
import fs from 'fs';
import _ from 'lodash';

function isPrime(_n, primeMap) {
  const n = parseInt(_n, 10);
  if (primeMap.get(_n) === undefined) {
    primeMap.set(_n, _isPrime(n));
  }
  return primeMap.get(_n);
}

function areConcatPrimes(nums, primeMap) {
  for (let num1 of nums) {
    for (let num2 of nums) {
      if (num1 === num2) {
        continue;
      }

      if (!isPrime(parseInt(num1.toString() + num2.toString(), 10), primeMap)) {
        return false;
      }
    }
  }

  return true;
}

function isConcatPair(a, b, primeMap) {
  return isPrime(a + b, primeMap) && isPrime(b + a, primeMap);
}

export function solve60() {
  const n = 5;
  const file = fs.readFileSync('./data/primes10000.txt', {
    encoding: 'utf-8',
  });
  let allPrimes = file.trim().split(/\s+/);
  let primeMap = new Map();
  allPrimes.map((p) => primeMap.set(p, true));
  let primePairingMap = new Map();

  for (let i = 0; i < allPrimes.length; i++) {
    const prime = allPrimes[i];
    let pairings = [];
    for (let otherPrime of primePairingMap.keys()) {
      if (isConcatPair(prime, otherPrime, primeMap)) {
        pairings.push(otherPrime);
        primePairingMap.get(otherPrime).push(prime);
      }
    }
    primePairingMap.set(prime, pairings);
    if (pairings.length >= n - 1) {
      const combs = combinations(n - 1, pairings, true);
      for (let comb of combs) {
        let hasConcats = true;
        for (let j = 0; j < n - 2; j++) {
          if (_.difference(comb.slice(j + 1), primePairingMap.get(comb[j])).length > 0) {
            hasConcats = false;
            break;
          }
        }

        if (hasConcats) {
          return [...comb, prime];
        }
      }
    }
  }

  // return combinations(4, primePairingMap.get('227'), true);
  // return primePairingMap;
}

solve60();
