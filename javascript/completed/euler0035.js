import { isPrime } from '../util.js';
import _ from 'lodash';

function getIndices(array) {
  let indices = [];
  for (let i = 0; i < array.length; i++) {
    indices.push(i);
  }
  return indices;
}

export async function solve35() {
  const n = 1000000;
  let count = 1;
  let circularPrimes = new Map();
  circularPrimes.set(2, true);
  for (let v = 3; v < n; v += 2) {
    if (circularPrimes.get(v) !== undefined) {
      if (circularPrimes.get(v)) {
        count++;
      }
      continue;
    }
    if (isPrime(v)) {
      const strV = v.toString();
      let rotations = [];
      for (let i = 0; i < strV.length; i++) {
        rotations.push(parseInt(`${strV.slice(i)}${strV.slice(0, i)}`, 10));
      }
      if (_.every(rotations, (v) => isPrime(v))) {
        rotations.forEach((v) => circularPrimes.set(v, true));
        count++;
      } else {
        rotations.forEach((v) => circularPrimes.set(v, false));
      }
    }
  }
  return count;
}
