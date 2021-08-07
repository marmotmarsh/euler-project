import BigNumber from 'bignumber.js';

export function solve97() {
  const n = 10;
  const mod = Math.pow(10, n);
  const x = 28433;
  const p = 7830457;
  let result = 1;

  for (let _i = 0; _i < p; _i++) {
    result = (result * 2) % mod;
  }

  return (result * x + 1).toString().slice(-10);
}
