import BigNumber from 'bignumber.js';

export async function solve29() {
  const n = 100;
  const uniqueTerms = new Map();
  for (let a = 2; a <= n; a++) {
    for (let b = 2; b <= n; b++) {
      const term = new BigNumber(a).pow(b).toString();
      uniqueTerms.set(term, true);
    }
  }

  return uniqueTerms.size;
}
