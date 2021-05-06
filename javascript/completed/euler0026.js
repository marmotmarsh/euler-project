import BigNumber from 'bignumber.js';

export async function solve26() {
  const n = 1000;
  BigNumber.config({ DECIMAL_PLACES: 5000 });
  let max = 1;
  let maxLen = 0;

  let repMap = {};

  for (let i = 2; i < n; i++) {
    const frac = new BigNumber(1)
      .dividedBy(i)
      .toString()
      .split('.')[1]
      .replace(/^0+/, '');
    if (!frac) {
      continue;
    }
    let start = '';
    let foundRep = false;
    for (let c = 0; c < frac.length; c++) {
      start += frac[c];
      if (frac.length >= start.length * 3) {
        const next = frac.slice(start.length);
        for (let j = 0; j < start.length; j++) {
          const newLen = start.length - j;
          if (
            start.slice(j) === next.slice(0, newLen) &&
            start.slice(j) === next.slice(newLen, newLen * 2) &&
            start.slice(j) === next.slice(newLen * 2, newLen * 3) &&
            start.slice(j) === next.slice(newLen * 3, newLen * 4)
          ) {
            if (newLen > maxLen) {
              maxLen = newLen;
              max = i;
            }
            foundRep = true;
            break;
          }
        }
      }

      if (foundRep) {
        break;
      }
    }
  }

  return max;
}
