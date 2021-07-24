import { isPrime as _isPrime } from '../util.js';

const REPLACE_VAL = 'x';

function isPrime(nStr, primeMap) {
  const n = parseInt(nStr, 10);
  if (primeMap.get(n) === undefined) {
    primeMap.set(n, _isPrime(n));
  }

  return primeMap.get(n);
}

function findReplacementPerms(length, initial = true) {
  if (length === 1) {
    return initial ? [[1]] : [[0], [1]];
  }

  let perms = [
    ...findReplacementPerms(length - 1, false).map((tail) => [0, ...tail]),
    ...findReplacementPerms(length - 1, false).map((tail) => [1, ...tail]),
  ];

  if (initial) {
    return perms.slice(1);
  }
  return perms;
}

function findAllNumberPerms(binary, initial = true) {
  const digits = [...(initial ? [] : ['0']), '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (binary.length === 1) {
    if (binary[0] === 0) {
      return digits;
    }
    return [REPLACE_VAL];
  }

  if (binary[0] === 0) {
    return digits.reduce((accum, d) => [...accum, ...findAllNumberPerms(binary.slice(1), false).map((n) => d + n)], []);
  }
  return findAllNumberPerms(binary.slice(1), false).map((d) => REPLACE_VAL + d);
}

export function solve51() {
  const n = 6;
  const tails = ['1', '3', '7', '9'];
  let primeMap = new Map();
  let result = 0;
  let headLength = 1;

  while (result === 0) {
    for (let binary of findReplacementPerms(headLength)) {
      for (let num of findAllNumberPerms(binary)) {
        const digits = [...(num[0] === REPLACE_VAL ? [] : ['0']), '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (let tail of tails) {
          let primes = [];
          digits.forEach((dig) => {
            const maybePrime = (num + tail).replace(REPLACE_VAL, dig);
            if (isPrime(maybePrime, primeMap)) {
              primes.push(maybePrime);
            }
          });
          if (primes.length >= n) {
            result = primes[0];
            break;
          }
        }
        if (result !== 0) {
          break;
        }
      }
      if (result !== 0) {
        break;
      }
    }

    headLength++;
  }

  return result;
}

// solve51();
