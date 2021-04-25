import { parseFileAsString } from '../util.js';

function multDigits(digits, k) {
  return digits.slice(digits.length - k).reduce((prod, n) => prod * n, 1);
}

export async function solve8() {
  var k = 13;
  var n = parseFileAsString('./data/x0008.txt');
  var digits = n
    .toString()
    .split('')
    .map((v) => parseInt(v, 10));
  var curr = multDigits(digits, k);
  var max = curr;
  var last;
  while (digits.length > k) {
    last = digits.pop();
    curr =
      last === 0 ? multDigits(digits, k) : (curr / last) * digits.slice(-k)[0];
    max = curr > max ? curr : max;
  }
  return max;
}
