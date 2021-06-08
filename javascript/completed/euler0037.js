import { isPrime as _isPrime } from '../util.js';

function isPrime(_n, primeMap) {
  const n = parseInt(_n, 10);
  if (primeMap.get(_n) === undefined) {
    primeMap.set(_n, _isPrime(n));
  }
  return primeMap.get(_n);
}

function isTruncatablePrime(n, primeMap, trimSide = '') {
  if (isPrime(n, primeMap)) {
    if (n.length === 1) {
      return true;
    }
    switch (trimSide) {
      case 'left': {
        return isTruncatablePrime(n.slice(1), primeMap, trimSide);
      }
      case 'right': {
        return isTruncatablePrime(n.slice(0, -1), primeMap, trimSide);
      }
      default: {
        return (
          isTruncatablePrime(n.slice(1), primeMap, 'left') && isTruncatablePrime(n.slice(0, -1), primeMap, 'right')
        );
      }
    }
  }

  return false;
}

export async function solve37() {
  const soloPrimes = ['2', '3', '5', '7'];
  const tailPrimes = ['1', '3', '5', '7', '9'];
  let primeMap = new Map();
  soloPrimes.forEach((p) => primeMap.set(p, true));
  const n = 11;
  let truncatablePrimes = [];
  let numberLength = 1;

  while (truncatablePrimes.length < n) {
    numberLength++;
    const primeStarts = [...primeMap.keys()].filter((p) => p.toString().length === numberLength - 1);
    primeStarts.forEach((pStart) => {
      tailPrimes.forEach((pTail) => {
        const num = pStart + pTail;
        if (isTruncatablePrime(num, primeMap)) {
          truncatablePrimes.push(num);
        }
      });
    });
  }
  return truncatablePrimes.reduce((sum, v) => sum + parseInt(v, 10), 0);
}
