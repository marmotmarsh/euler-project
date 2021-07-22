import BigNumber from 'bignumber.js';

function findNthTerm(prev) {
  return { n: prev.n.plus(prev.d.multipliedBy(2)), d: prev.n.plus(prev.d) };
}

export function solve57() {
  const n = 1000;
  let count = 0;
  let prev = { n: new BigNumber(1), d: new BigNumber(1) };

  for (let i = 1; i <= n; i++) {
    const result = findNthTerm(prev);
    if (prev.n.valueOf().length > prev.d.valueOf().length) {
      count++;
    }
    prev = result;
  }

  return count;
}
