import fs from 'fs';
import _ from 'lodash';

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

  const primeDivisorMap = primeDivisors.reduce(
    (accum, v) => ({ ...accum, [v]: (accum[v] || 0) + 1 }),
    {}
  );

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
