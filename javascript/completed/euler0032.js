import { findSum, permutations } from '../util.js';

export async function solve32() {
  const digits = '123456789';
  const perms = permutations(digits);
  let productsMap = new Map();
  perms.forEach((num) => {
    for (let i = 1; i <= 4; i++) {
      for (let j = i + 1; j <= 7; j++) {
        const multiplicand = parseInt(num.slice(0, i), 10);
        const multiplier = parseInt(num.slice(i, j), 10);
        const product = parseInt(num.slice(j), 10);
        if (multiplicand * multiplier === product) {
          productsMap.set(product, true);
        }
      }
    }
  });
  return findSum([...productsMap.keys()]);
}

// solve32();
