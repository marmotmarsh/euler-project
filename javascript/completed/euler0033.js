import { simplifyFraction } from '../util.js';

export async function solve33() {
  const n = 100;
  let pairs = [];
  for (let num = 10; num < n - 1; num++) {
    for (let den = num + 1; den < n; den++) {
      const numStr = num.toString();
      const denStr = den.toString();
      if (numStr[0] === denStr[1]) {
        const frac = parseInt(numStr[1], 10) / parseInt(denStr[0], 10);
        const origFrac = num / den;
        if (frac === origFrac) {
          pairs.push([num, den]);
        }
      } else if (numStr[1] === denStr[0]) {
        const frac = parseInt(numStr[0], 10) / parseInt(denStr[1], 10);
        const origFrac = num / den;
        if (frac === origFrac) {
          pairs.push([num, den]);
        }
      }
    }
  }

  return simplifyFraction(...pairs.reduce((prod, v) => [prod[0] * v[0], prod[1] * v[1]], [1, 1]))[1];
}
