import BigNumber from 'bignumber.js';

const MODULO = 1000000007;
// const MAX_SMALLEST_SUM_DIGITS = 999999999;
// const MAX_SMALLEST_SUM = 81;

const SMALLEST_SUM_MAP = new Map();
// const SUM_OF_SMALLEST_SUMS_MAP = new Map();
const FIB_MAP = new Map();

function findSmallestSum(n) {
  if (!SMALLEST_SUM_MAP.get(n)) {
    const num = (n % 9).toString() + new Array(Math.floor(n / 9) + 1).join('9');
    SMALLEST_SUM_MAP.set(n, new BigNumber(num));
  }

  return SMALLEST_SUM_MAP.get(n);
}

// function findSumOfSmallestSums(n) {
//   if (!SUM_OF_SMALLEST_SUMS_MAP.get(n)) {
//     let start = SUM_OF_SMALLEST_SUMS_MAP.size || 1;
//     do {
//       SUM_OF_SMALLEST_SUMS_MAP.set(
//         start,
//         findSmallestSum(start)
//           .plus(SUM_OF_SMALLEST_SUMS_MAP.get(start - 1) || 0)
//           .modulo(MODULO)
//       );
//       start++;
//     } while (start <= n);
//   }
//   return SUM_OF_SMALLEST_SUMS_MAP.get(n);
// }

function findFib(n) {
  if (n <= 0) {
    FIB_MAP.set(0, new BigNumber(0));
    return FIB_MAP.get(0);
  }
  if (n === 1) {
    FIB_MAP.set(1, new BigNumber(1));
    return FIB_MAP.get(1);
  }
  const fib1 = FIB_MAP.get(n - 1) || findFib(n - 1);
  const fib2 = FIB_MAP.get(n - 2) || findFib(n - 2);
  const fib = fib1.plus(fib2);
  FIB_MAP.set(n, fib);
  return fib;
}

// function findFibSum(n) {
//   const fib = findFib(n);
//   return findSumOfSmallestSums(fib);
// }

export function solve684() {
  let n = 20;
  let sum = new BigNumber(0);
  let start = new BigNumber(1);
  let end = new BigNumber(0);

  for (let i = 2; i <= n; i++) {
    let currentSum = new BigNumber(0);
    start = end.plus(1);
    end = findFib(i);
    for (let k = start; k <= end; k++) {
      currentSum = currentSum.plus(findSmallestSum(k).times(n + 1 - i)).modulo(MODULO);
    }

    sum = sum.plus(currentSum).modulo(MODULO);
  }

  return sum.toString();
}

// solve684();
