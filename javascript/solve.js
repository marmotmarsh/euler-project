import { solve1 } from './completed/euler0001.js';
import { solve2 } from './completed/euler0002.js';
import { solve3 } from './completed/euler0003.js';
import { solve4 } from './completed/euler0004.js';
import { solve5 } from './completed/euler0005.js';
import { solve6 } from './completed/euler0006.js';
import { solve7 } from './completed/euler0007.js';
import { solve8 } from './completed/euler0008.js';
import { solve9 } from './completed/euler0009.js';
import { solve10 } from './completed/euler0010.js';
import { solve11 } from './completed/euler0011.js';
import { solve12 } from './completed/euler0012.js';
import { solve13 } from './completed/euler0013.js';
import { solve14 } from './completed/euler0014.js';
import { solve15 } from './completed/euler0015.js';
import { solve16 } from './completed/euler0016.js';
import { solve17 } from './completed/euler0017.js';
import { solve18 } from './completed/euler0018.js';
import { solve19 } from './completed/euler0019.js';
import { solve20 } from './completed/euler0020.js';
import { solve21 } from './completed/euler0021.js';
import { solve22 } from './completed/euler0022.js';
import { solve23 } from './completed/euler0023.js';
import { solve24 } from './completed/euler0024.js';
import { solve25 } from './completed/euler0025.js';
import { solve26 } from './completed/euler0026.js';
import { solve27 } from './completed/euler0027.js';
import { solve28 } from './completed/euler0028.js';
import { solve29 } from './completed/euler0029.js';
import { solve30 } from './completed/euler0030.js';
import { solve31 } from './completed/euler0031.js';
import { solve32 } from './completed/euler0032.js';
import { solve33 } from './completed/euler0033.js';

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
  14: solve14,
  15: solve15,
  16: solve16,
  17: solve17,
  18: solve18,
  19: solve19,
  20: solve20,
  21: solve21,
  22: solve22,
  23: solve23,
  24: solve24,
  25: solve25,
  26: solve26,
  27: solve27,
  28: solve28,
  29: solve29,
  30: solve30,
  31: solve31,
  32: solve32,
  33: solve33,
  34: undefined,
  35: undefined,
  36: undefined,
  37: undefined,
  38: undefined,
  39: undefined,
  40: undefined,
};

export async function solve(n) {
  if (!n) {
    throw new Error('You must enter a problem number');
  }
  const result = await solutions[n]();
  console.log(result);
  return;
}
