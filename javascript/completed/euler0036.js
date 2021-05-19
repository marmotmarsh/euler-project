import { reverseString } from '../util.js';

export async function solve36() {
  const n = 6;
  let sum = 0;

  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    for (let x = Math.pow(10, i - 1); x < Math.pow(10, i); x++) {
      const start = x.toString();
      const even = parseInt(`${start}${reverseString(start)}`, 10);
      const odd = parseInt(`${start}${reverseString(start).slice(1)}`);

      const evenBin = even.toString(2);
      const oddBin = odd.toString(2);

      if (even < Math.pow(10, n) && evenBin === reverseString(evenBin)) {
        sum += even;
      }

      if (oddBin === reverseString(oddBin)) {
        sum += odd;
      }
    }
  }

  return sum;
}
