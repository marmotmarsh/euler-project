import BigNumber from 'bignumber.js';

let factorialMap = new Map();
factorialMap.set(1, new BigNumber(1));

function factorial(n) {
  if (factorialMap.get(n) === undefined) {
    factorialMap.set(n, new BigNumber(n).multipliedBy(factorial(n - 1)));
  }
  return factorialMap.get(n);
}

function findCombs(n, r) {
  return parseInt(
    factorial(n)
      .dividedBy(factorial(r).multipliedBy(factorial(n - r)))
      .toString(),
    10
  );
}

export function solve53() {
  const maxN = 100;
  const minComb = 1000000;
  let count = 0;

  for (let n = 2; n <= maxN; n++) {
    for (let r = Math.floor(n / 2); r > 0; r--) {
      if (findCombs(n, r) > minComb) {
        count++;
        if (n / r !== 2) {
          count++;
        }
      } else {
        break;
      }
    }
  }

  return count;
}
