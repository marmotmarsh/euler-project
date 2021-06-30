function calcHexagonal(n) {
  return n * (2 * n - 1);
}

function isPentagonal(p) {
  return Number.isInteger((Math.sqrt(24 * p + 1) + 1) / 6);
}

function isTriangle(t) {
  return Number.isInteger((Math.sqrt(8 * t + 1) - 1) / 2);
}

export function solve45() {
  let n = 143;
  let base = calcHexagonal(n);
  let result = base;

  while (base === result) {
    n++;
    const hex = calcHexagonal(n);
    if (isPentagonal(hex) && isTriangle(hex)) {
      result = hex;
    }
  }

  return result;
}
