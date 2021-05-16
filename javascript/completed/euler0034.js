import { combinations, factorial, findSum } from '../util.js';
import _ from 'lodash';

export async function solve34() {
  const n = 6;

  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const factorialMap = {};
  for (var i = 0; i <= 9; i++) {
    factorialMap[i] = factorial(i);
  }

  let combs = [];
  for (let i = 2; i <= n; i++) {
    combs = [...combs, ...combinations(i, digits)];
  }

  let sum = 0;
  combs.forEach((digs) => {
    const facSum = findSum(digs.map((d) => factorialMap[d]));
    let facSumDigs = facSum.toString().split('');
    facSumDigs.sort();
    if (_.isEqual(digs, facSumDigs)) {
      sum += facSum;
    }
  });

  return sum;
}
