function findNthDigit(n, l = 1) {
  if (n <= 0) {
    return 0;
  }

  const allIntsLength = l === 1 ? 9 : Math.pow(10, l - 1) * 9 * l;
  if (n > allIntsLength) {
    return findNthDigit(n - allIntsLength, l + 1);
  }

  let b = Math.pow(10, l - 1);
  while (n > l) {
    b++;
    n -= l;
  }

  return parseInt(b.toString()[n - 1], 10);
}

export async function solve40() {
  const n = 6; // up to 10^6
  let product = 1;
  for (let i = 0; i <= n; i++) {
    product *= findNthDigit(Math.pow(10, i));
  }

  return product;
}
