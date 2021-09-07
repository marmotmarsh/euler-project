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
import { solve34 } from './completed/euler0034.js';
import { solve35 } from './completed/euler0035.js';
import { solve36 } from './completed/euler0036.js';
import { solve37 } from './completed/euler0037.js';
import { solve38 } from './completed/euler0038.js';
import { solve39 } from './completed/euler0039.js';
import { solve40 } from './completed/euler0040.js';
import { solve41 } from './completed/euler0041.js';
import { solve42 } from './completed/euler0042.js';
import { solve43 } from './completed/euler0043.js';
import { solve44 } from './completed/euler0044.js';
import { solve45 } from './completed/euler0045.js';
import { solve46 } from './completed/euler0046.js';
import { solve47 } from './working/euler0047.js';
import { solve48 } from './completed/euler0048.js';
import { solve49 } from './completed/euler0049.js';
import { solve50 } from './completed/euler0050.js';
import { solve51 } from './working/euler0051.js';
import { solve52 } from './completed/euler0052.js';
import { solve53 } from './completed/euler0053.js';
import { solve54 } from './completed/euler0054.js';
import { solve55 } from './completed/euler0055.js';
import { solve56 } from './completed/euler0056.js';
import { solve57 } from './completed/euler0057.js';
import { solve58 } from './working/euler0058.js';
import { solve59 } from './completed/euler0059.js';
import { solve60 } from './working/euler0060.js';
import { solve61 } from './working/euler0061.js';
import { solve62 } from './completed/euler0062.js';
import { solve63 } from './completed/euler0063.js';
import { solve64 } from './completed/euler0064.js';
import { solve65 } from './completed/euler0065.js';
import { solve66 } from './working/euler0066.js';
import { solve67 } from './completed/euler0067.js';
import { solve68 } from './completed/euler0068.js';
import { solve69 } from './working/euler0069.js';
import { solve70 } from './working/euler0070.js';
import { solve71 } from './completed/euler0071.js';
import { solve79 } from './completed/euler0079.js';
import { solve80 } from './working/euler0080.js';
import { solve81 } from './completed/euler0081.js';
import { solve82 } from './completed/euler0082.js';
import { solve83 } from './completed/euler0083.js';
import { solve92 } from './completed/euler0092.js';
import { solve97 } from './completed/euler0097.js';
import { solve206 } from './working/euler0206.js';
import { solve684 } from './working/euler0684.js';

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
  34: solve34,
  35: solve35,
  36: solve36,
  37: solve37,
  38: solve38,
  39: solve39,
  40: solve40,
  41: solve41,
  42: solve42,
  43: solve43,
  44: solve44,
  45: solve45,
  46: solve46,
  47: solve47,
  48: solve48,
  49: solve49,
  50: solve50,
  51: solve51,
  52: solve52,
  53: solve53,
  54: solve54,
  55: solve55,
  56: solve56,
  57: solve57,
  58: solve58,
  59: solve59,
  60: solve60,
  61: solve61,
  62: solve62,
  63: solve63,
  64: solve64,
  65: solve65,
  66: solve66,
  67: solve67,
  68: solve68,
  69: solve69,
  70: solve70,
  71: solve71,
  // 72 => 78
  79: solve79,
  80: solve80,
  81: solve81,
  82: solve82,
  83: solve83,
  // 84 => 91
  92: solve92,
  // 93 => 96
  97: solve97,
  //
  // 98 -> 205
  //
  206: solve206,
  //
  // 207 => 683
  //
  684: solve684,
};

export function solve(n) {
  if (!n) {
    throw new Error('You must enter a problem number');
  }
  const result = solutions[n]();
  console.log(result);
  return;
}
