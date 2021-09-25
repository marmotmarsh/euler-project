import BigNumber from 'bignumber.js';
import _ from 'lodash';

function isDiophantineY(y, d) {
  const result = y.times(y).times(d).plus(1).sqrt();
  return result.gt(0) && result.isInteger();
}

function isDiophantineX(x, d) {
  const result = x.times(x).minus(1).dividedBy(d).sqrt();
  return result.gt(0) && result.isInteger();
}

// export function solve66() {
//   const n = 1000;

//   let diophs = [new BigNumber(0)];

//   for (let d = 1; d <= n; d++) {
//     if (Number.isInteger(Math.sqrt(d))) {
//       diophs.push(new BigNumber(0));
//       continue;
//     }
//     let y = new BigNumber(1);
//     while (!isDiophantineY(y, d)) {
//       y = y.plus(1);
//     }
//     diophs.push(y.times(y).times(d).plus(1).sqrt());
//   }

//   let copy = _.cloneDeep(diophs);
//   copy.sort((a, b) => b.minus(a));

//   return diophs.findIndex((v) => v.eq(copy[0]));
// }

export function solve66() {
  const n = 65;
  let remainingDs = new Array(n)
    .fill(null)
    .map((_v, i) => i + 1)
    .filter((v) => !_.isInteger(Math.sqrt(v)));
  let x = new BigNumber(0);

  while (remainingDs.length > 1) {
    x = x.plus(1);
    let copyDs = _.clone(remainingDs);
    for (let d of copyDs) {
      if (isDiophantineX(x, d)) {
        _.remove(remainingDs, (v) => v === d);
      }
    }
  }

  return remainingDs[0];
}

// solve66();
