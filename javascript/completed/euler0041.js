import { isPrime, permutations } from '../util.js';

export function solve41() {
  const n = 9;
  let digits = '';
  for (let i = 1; i <= n; i++) {
    digits = i + digits;
  }

  while (digits.length > 0) {
    const perms = permutations(digits);

    for (let perm of perms) {
      if (isPrime(perm)) {
        return perm;
      }
    }

    digits = digits.slice(1);
  }
}
