import BigNumber from 'bignumber.js';
BigNumber.config({ EXPONENTIAL_AT: 1e9 });

export async function solve16() {
  var n = 1000;
  return new Array(parseInt(n, 10))
    .fill(2)
    .reduce((mult, x) => mult.multipliedBy(x), BigNumber(1))
    .toString()
    .split('')
    .reduce((sum, x) => sum + parseInt(x, 10), 0);
}
