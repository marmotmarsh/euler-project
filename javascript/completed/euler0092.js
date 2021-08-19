function findSquareEnd(n, squaresMap, chain = []) {
  if (!squaresMap.get(n)) {
    if (chain.includes(n) && (n === 1 || n === 89)) {
      squaresMap.set(n, n);
    } else {
      const newNum = n
        .toString()
        .split('')
        .reduce((sum, i) => sum + Math.pow(parseInt(i, 10), 2), 0);
      const result = findSquareEnd(newNum, squaresMap, [...chain, n]);
      squaresMap.set(n, result);
    }
  }
  return squaresMap.get(n);
}

export function solve92() {
  const n = 10000000;
  let squaresMap = new Map();
  let eightyNineCount = 0;

  for (let i = 1; i < n; i++) {
    const result = findSquareEnd(i, squaresMap);
    if (result === 89) {
      eightyNineCount++;
    }
  }

  return eightyNineCount;
}
