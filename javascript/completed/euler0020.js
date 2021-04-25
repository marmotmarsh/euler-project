import BigNumber from 'bignumber.js';

export async function solve20() {
  var n = 100;
  if (n === 0) {
    return 1;
  }
  var prod = new Array(parseInt(n, 10))
    .fill(0)
    .map((_v, i) => i + 1)
    .reduce((prod, v) => prod.multipliedBy(v), new BigNumber(1));
  // console.log(prod.toString());
  return prod
    .toString()
    .replace('.', '')
    .split('e')[0]
    .split('')
    .reduce((sum, v) => sum + parseInt(v, 10), 0);
}
