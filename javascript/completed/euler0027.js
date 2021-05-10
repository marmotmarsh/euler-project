import { isPrime as _isPrime } from '../util.js';

function isPrime(n, primeMap) {
  if (primeMap.get(n) === undefined) {
    const res = _isPrime(n);
    primeMap.set(n, res);
  }
  return primeMap.get(n);
}

function quadratic(a, b, x) {
  return x * x + a * x + b;
}

export async function solve27() {
  const n = 1000;
  let maxStreak = 0;
  let maxStreakCofs = { a: 0, b: 0 };
  let primeMap = new Map();
  for (let b = 1; b <= n; b++) {
    if (isPrime(b, primeMap)) {
      for (let a = 1; a < n; a++) {
        let x = 0;
        let result = b;
        while (isPrime(result, primeMap)) {
          x++;
          result = quadratic(a, b, x);
        }
        if (x > maxStreak) {
          maxStreak = x;
          maxStreakCofs = { a, b };
        }
      }
      for (let a = -1; a > -n; a--) {
        let x = 0;
        let result = b;
        while (isPrime(result, primeMap) && result > 0) {
          x++;
          result = quadratic(a, b, x);
        }
        if (x > maxStreak) {
          maxStreak = x;
          maxStreakCofs = { a, b };
        }
      }
    }
  }

  return maxStreakCofs.a * maxStreakCofs.b;
}
