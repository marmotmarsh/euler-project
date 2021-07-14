import _ from 'lodash';

function getMults(base, maxMult) {
  let mults = [];
  for (let x = 1; x <= maxMult; x++) {
    mults.push(base * x);
  }
  return mults;
}

export function solve52() {
  const n = 6;
  let pow = 2;
  let result = 0;

  while (result === 0) {
    for (let base = Math.pow(10, pow); base <= Math.pow(10, pow + 1) / n; base++) {
      const baseDigs = base.toString().split('').sort();
      if (_.every(getMults(base, n), (mult) => _.isEqual(mult.toString().split('').sort(), baseDigs))) {
        result = base;
        break;
      }
    }
    pow++;
  }

  return result;
}
