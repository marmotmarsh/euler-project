import { parseFileAs2DArray } from '../util.js';

function findLongest(pyramid, memo, x = 0, y = 0) {
  if (x === pyramid.length - 1) {
    return pyramid[x][y];
  }
  const left = findLongest(pyramid, memo, x + 1, y);
  const right = findLongest(pyramid, memo, x + 1, y + 1);
  const max = Math.max(left, right);
  memo[x][y] = max;
  return max + pyramid[x][y];
}

export async function solve18() {
  const pyramid = parseFileAs2DArray('./data/x0018.txt').map((r) =>
    r.map((v) => parseInt(v, 10))
  );
  const n = pyramid.length;
  let memo = {};
  for (var i = 0; i < n; i++) {
    memo[i] = {};
  }
  return findLongest(pyramid, memo);
}
