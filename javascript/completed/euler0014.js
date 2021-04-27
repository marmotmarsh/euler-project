function findCollatz(n, collatzMap) {
  if (n === 1) {
    return 1;
  }
  if (collatzMap.has(n)) {
    return collatzMap.get(n);
  }
  var sum = 1 + findCollatz(n % 2 === 0 ? n / 2 : 3 * n + 1, collatzMap);
  collatzMap.set(n, sum);
  return sum;
}

export async function solve14() {
  var n = 1000000;
  let collatzMap = new Map();
  for (var i = 1; i < n; i++) {
    findCollatz(i, collatzMap);
  }

  let max = 0;
  let maxKey = 0;
  for (let [k, v] of collatzMap) {
    if (k < n && v > max) {
      max = v;
      maxKey = k;
    }
  }

  return maxKey;
}
