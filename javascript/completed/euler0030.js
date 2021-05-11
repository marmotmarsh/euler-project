import { findSum } from '../util.js';

export async function solve30() {
  const n = 5;
  let solutions = [];
  let powDigits = {};

  for (let i = 0; i <= 9; i++) {
    powDigits[i] = Math.pow(i, n);
  }

  for (let i = 10; i < Math.pow(10, n + 1); i++) {
    const sum = i
      .toString()
      .split('')
      .reduce((accum, v) => accum + powDigits[v], 0);
    if (sum === i) {
      solutions.push(i);
    }
  }

  return findSum(solutions);
}
