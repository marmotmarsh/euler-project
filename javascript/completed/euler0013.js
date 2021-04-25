import { parseFileAs1DArray } from '../util.js';

export async function solve13() {
  var arrayed = parseFileAs1DArray('./data/x0013.txt');
  console.log(arrayed);
  var l = 12;
  var remainder = [];
  var total = [];
  for (var i = l - 1; i >= 0; i--) {
    var digits = arrayed.map((num) => num[i]);
    var sum = digits
      .reduce(
        (sum, d) => sum + Number(d),
        remainder.map((v) => v.pop()).reduce((sum, v) => sum + Number(v), 0)
      )
      .toString()
      .split('');
    total = [sum.pop(), ...total];
    remainder = [...remainder, sum].filter((rem) => rem.length);
  }
  while (remainder.length) {
    var sum = remainder
      .map((v) => v.pop())
      .reduce((sum, v) => sum + Number(v), 0)
      .toString()
      .split('');
    total = [sum.pop(), ...total];
    remainder = [...remainder, sum].filter((rem) => rem.length);
  }
  return total.slice(0, 10).join('');
}
