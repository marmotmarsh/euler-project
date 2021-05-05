import _ from 'lodash';
import { factorial } from '../util.js';

function lexicographicPerms(n, digits) {
  let curN = n;
  let start = 0;
  const numPermsEnd = factorial(digits.length - 1);
  while (curN >= 1) {
    if (curN === 1) {
      return [digits[start], ..._.remove(digits, (v) => v !== digits[start])];
    }
    start += 1;
    curN -= numPermsEnd;
  }
  start -= 1;
  return [
    digits[start],
    ...lexicographicPerms(
      curN + numPermsEnd,
      _.remove(digits, (v) => v !== digits[start])
    ),
  ];
}

export async function solve24() {
  const n = 1000000;
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  return lexicographicPerms(n, digits).join('');
}

// solve24();
