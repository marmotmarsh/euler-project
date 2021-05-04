import _ from 'lodash';

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

function findProperDivisors(n) {
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

export async function solve21() {
  const n = 10000;
  let total = [];
  let amicableSums = {};
  for (var i = 1; i < n; i++) {
    const divs = findProperDivisors(i);
    const sum = divs.reduce((sum, v) => sum + v, 0);
    amicableSums[i] = sum;
    if (amicableSums[sum] && amicableSums[sum] === i && sum !== i) {
      total = [...total, i, sum];
    }
  }
  return total.reduce((sum, v) => sum + v, 0);
}
