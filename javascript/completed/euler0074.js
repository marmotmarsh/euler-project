import _ from 'lodash';
import { factorial as _factorial } from '../util.js';

const FACTORIAL_MAP = new Map();
const FACTORIAL_SUM_MAP = new Map();

function factorial(n) {
  return FACTORIAL_MAP.get(n);
}

function getDigitFactSum(n) {
  if (!FACTORIAL_SUM_MAP.has(n)) {
    const sum = _.sum(
      n
        .toString()
        .split('')
        .map((x) => factorial(parseInt(x, 10)))
    );
    FACTORIAL_SUM_MAP.set(n, sum);
  }

  return FACTORIAL_SUM_MAP.get(n);
}

export function solve74() {
  const max = 1000000;
  const n = 60;
  let count = 0;

  for (let i = 0; i <= 9; i++) {
    FACTORIAL_MAP.set(i, _factorial(i));
  }

  for (let start = 1; start < max; start++) {
    let terms = [start];
    let next = getDigitFactSum(start);
    while (!terms.includes(next)) {
      terms.push(next);
      next = getDigitFactSum(next);
    }

    if (terms.length === n) {
      count++;
    }
  }

  return count;
}
