import _ from 'lodash';

function findPeriod(base, start, num, den, period = []) {
  const newNum = (base - Math.pow(den, 2)) / num;
  if (newNum === 1) {
    return [...period, den + start];
  }

  let newDen = start;
  while ((newDen + den) % newNum !== 0) {
    newDen -= 1;
  }

  return findPeriod(base, start, newNum, newDen, [...period, (den + newDen) / newNum]);
}

function findFullPeriod(base) {
  const start = Math.floor(Math.sqrt(base));
  return {
    start,
    period: findPeriod(base, start, 1, start),
  };
}

export function solve64() {
  const n = 10000;
  let sqrtPeriodMap = new Map();
  for (let base = 2; base <= n; base++) {
    const sqrt = Math.sqrt(base);
    if (sqrt !== Math.floor(sqrt)) {
      sqrtPeriodMap.set(base, findFullPeriod(base));
    }
  }

  return _.reduce([...sqrtPeriodMap.values()], (count, v) => count + (v.period.length % 2 === 1 ? 1 : 0), 0);
}
