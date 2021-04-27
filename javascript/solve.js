import { solve1 } from './completed/euler0001.js';
import { solve2 } from './completed/euler0002.js';
import { solve3 } from './completed/euler0003.js';
import { solve4 } from './completed/euler0004.js';
import { solve5 } from './completed/euler0005.js';
import { solve6 } from './completed/euler0006.js';
import { solve7 } from './completed/euler0007.js';
import { solve8 } from './completed/euler0008.js';
import { solve9 } from './completed/euler0009.js';
import { solve10 } from './working/euler0010.js';
import { solve11 } from './completed/euler0011.js';
import { solve12 } from './completed/euler0012.js';
import { solve13 } from './completed/euler0013.js';
import { solve16 } from './completed/euler0016.js';
import { solve17 } from './completed/euler0017.js';
import { solve20 } from './completed/euler0020.js';
import { solve22 } from './completed/euler0022.js';

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
  11: solve11,
  12: solve12,
  13: solve13,
  14: undefined,
  15: undefined,
  16: solve16,
  17: solve17,
  18: undefined,
  19: undefined,
  20: solve20,
  21: undefined,
  22: solve22,
};

export async function solve(n) {
  if (!n) {
    throw new Error('You must enter a problem numer');
  }
  const result = await solutions[n]();
  console.log(result);
  return;
}
