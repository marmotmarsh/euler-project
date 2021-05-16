import fs from 'fs';
import _ from 'lodash';
import BigNumber from 'bignumber.js';

export function parseFileAsString(filename) {
  const file = fs.readFileSync(filename, {
    encoding: 'utf-8',
  });
  const fileStr = file
    .split('\n')
    .map((s) => s.trim())
    .join('');
  return fileStr;
}

export function parseFileAs1DArray(filename) {
  const file = fs.readFileSync(filename, {
    encoding: 'utf-8',
  });
  const fileArr = file.split('\n');
  return fileArr;
}

export function parseFileAs2DArray(filename) {
  const file = fs.readFileSync(filename, {
    encoding: 'utf-8',
  });
  const fileArr = file.split('\n').map((l) => l.split(' '));
  return fileArr;
}

function findPrimeFactorComs(factorMap) {
  const keys = Object.keys(factorMap);
  if (keys.length === 0) {
    return [1];
  }
  const factor = keys[0];
  const count = factorMap[factor];
  let nums = [];
  if (keys.length === 1) {
    for (var i = 1; i <= count; i++) {
      nums.push(Math.pow(factor, i));
    }
  } else {
    let these = [];
    for (var i = 1; i <= count; i++) {
      these.push(Math.pow(factor, i));
    }
    const those = findPrimeFactorComs(_.omit(factorMap, factor));
    nums.push(...these, ...those);
    these.forEach((x) => {
      those.forEach((y) => {
        nums.push(x * y);
      });
    });
  }
  return nums;
}

export function findProperDivisors(n) {
  if (n === 1) {
    return [];
  }
  if (n <= 3) {
    return [1];
  }

  let primeDivisors = [];
  let factor = 2;
  while (factor <= n) {
    while (n % factor === 0) {
      primeDivisors.push(factor);
      n /= factor;
    }
    factor += factor === 2 ? 1 : 2;
  }

  const primeDivisorMap = primeDivisors.reduce((accum, v) => ({ ...accum, [v]: (accum[v] || 0) + 1 }), {});

  let divs = [1, ...findPrimeFactorComs(primeDivisorMap)];
  divs.sort((a, b) => a - b);
  divs.pop();
  return divs;
}

export function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let p = 1;
  for (var i = 1; i <= n; i++) {
    p *= i;
  }
  return p;
}

export function fibonacci(n, memo = {}) {
  if (n === 1 || n === 2) {
    return new BigNumber(1);
  }
  if (!!memo[n]) {
    return memo[n];
  }
  const sum = fibonacci(n - 1, memo).plus(fibonacci(n - 2, memo));
  memo[n] = sum;
  return sum;
}

export function isPrime(n) {
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i < n / 2; i += 2) {
    if (n % i === 0) return false;
  }
  return n > 1;
}

export function findSum(values) {
  return values.reduce((sum, v) => sum + v, 0);
}

export function permutations(str, start = '') {
  if (str.length <= 1) {
    return [start + str];
  }
  let perms = [];
  for (let i = 0; i < str.length; i++) {
    perms = [...perms, ...permutations(str.slice(0, i) + str.slice(i + 1), start + str[i])];
  }
  return perms;
}

export function combinations(length, vals, start = []) {
  if (length <= 1) {
    return vals.map((v) => [...start, v]);
  }
  let combs = [];
  for (let i = 0; i < vals.length; i++) {
    combs = [...combs, ...combinations(length - 1, vals.slice(i), [...start, vals[i]])];
  }
  return combs;
}

export function findGCD(a, b) {
  return b ? findGCD(b, a % b) : a;
}

export function simplifyFraction(numerator, denominator) {
  const gcd = findGCD(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
}
