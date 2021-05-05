import BigNumber from 'bignumber.js';
import { fibonacci } from '../util.js';

export async function solve25() {
  const n = 1000;
  const threshold = new BigNumber(10).pow(1000 - 1);
  let fibN = 2;
  let fib = new BigNumber(1);
  let fibMemo = { 1: 1, 2: 1 };
  while (threshold.gt(fib)) {
    fibN += 1;
    fib = fibonacci(fibN, fibMemo);
    fibMemo[fibN] = fib;
  }
  return fibN;
}
