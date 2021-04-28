function findLattice(x, y, memo) {
  if (memo[x][y] !== undefined) {
    return memo[x][y];
  }
  if (x === 0 || y === 0) {
    return 1;
  }
  let paths;
  if (x === y) {
    paths = findLattice(x - 1, y, memo) * 2;
  } else if (x === 1) {
    paths = findLattice(x, y - 1, memo) + 1;
  } else {
    paths = findLattice(x - 1, y, memo) + findLattice(x, y - 1, memo);
  }
  memo[x][y] = paths;
  return paths;
}

export async function solve15() {
  const n = 20;
  var memo = {};
  for (var i = 1; i <= n; i++) {
    memo[i] = {};
  }
  memo[1] = { 1: 2 };
  return findLattice(n, n, memo);
}
