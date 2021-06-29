function isPentagonal(p, pentagonalNums) {
  if (pentagonalNums.get(p) === undefined) {
    const n = (Math.sqrt(24 * p + 1) + 1) / 6;
    pentagonalNums.set(p, Number.isInteger(n));
  }
  return pentagonalNums.get(p);
}

function findPentagonal(n) {
  return (n * (3 * n - 1)) / 2;
}

export function solve44() {
  let pentagonalNums = new Map();
  let n = 2;
  let d = 0;
  let p1 = 1;
  let p2 = 5;
  pentagonalNums.set(p1, true);
  pentagonalNums.set(p2, true);

  while (d === 0 && p2 - p1 > d) {
    n++;
    p1 = p2;
    p2 = findPentagonal(n);
    pentagonalNums.set(p2, true);

    if (d === 0) {
      for (let n0 = n - 1; n0 >= 1; n0--) {
        const p0 = findPentagonal(n0);
        if (isPentagonal(p2 - p0, pentagonalNums) && isPentagonal(p2 + p0, pentagonalNums)) {
          d = p2 - p0;
          break;
        }
      }
    } else {
      let n0 = n - 1;
      let p0 = p1;
      while (p2 - p0 < d || n0 > 0) {
        if (isPentagonal(p2 - p0, pentagonalNums) && isPentagonal(p2 + p0, pentagonalNums)) {
          d = p2 - p0;
          break;
        }
        n0--;
        p0 = findPentagonal(n0);
      }
    }
  }

  return d;
}
