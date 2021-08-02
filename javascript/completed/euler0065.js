import BigNumber from 'bignumber.js';

function getDenom(i) {
  if (i === 1) {
    return new BigNumber(2);
  }
  if (i % 3 === 0) {
    return new BigNumber((i * 2) / 3);
  }
  return new BigNumber(1);
}

export function solve65() {
  const n = 100;
  const start = 2;
  let num, den;
  for (let i = n; i >= 1; i--) {
    if (i === n) {
      num = new BigNumber(1);
      den = getDenom(i);
    } else {
      const newDen = num;
      num = num.multipliedBy(getDenom(i)).plus(den);
      den = newDen;
    }
  }

  return num
    .valueOf()
    .split('')
    .reduce((sum, v) => sum + parseInt(v, 10), 0);
}
