import { solve1 } from './completed/euler0001.js';
import { solve2 } from './completed/euler0002.js';
import { solve3 } from './working/euler0003.js';
import { solve4 } from './completed/euler0004.js';
import { solve5 } from './completed/euler0005.js';
import { solve6 } from './completed/euler0006.js';
import { solve7 } from './completed/euler0007.js';
import { solve8 } from './completed/euler0008.js';
import { solve9 } from './completed/euler0009.js';
import { solve10 } from './completed/euler0010.js';

export const solutions = {
  1: solve1,
  2: solve2,
  3: solve3,
  4: solve4,
  5: solve5,
  6: solve6,
  7: solve7,
  8: solve8,
  9: solve9,
  10: solve10,
};

export async function solve(n) {
  if (!n) {
    throw new Error('You must enter a problem numer');
  }
  const result = await solutions[n]();
  console.log(result);
  return;
}
