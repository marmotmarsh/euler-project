import BigNumber from 'bignumber.js';
import _ from 'lodash';

function isDiophantineX(x, d) {
  const result = Math.sqrt((x * x - 1) / d);
  return result > 0 && Number.isInteger(result);
}

function isDiophantineY(y, d) {
  const result = y.times(y).times(d).plus(1).sqrt();
  return result.gt(0) && result.isInteger();
}

export function solve66() {
  const n = 1000;

  // let noDiophantinesYet = Array.from({ length: n }, (_, i) => ++i).filter((v) => !Number.isInteger(Math.sqrt(v)));
  // let x = 0;

  // while (noDiophantinesYet.length > 1) {
  //   const noDiophsIter = _.clone(noDiophantinesYet);
  //   x++;
  //   let pulls = [];
  //   for (let i = noDiophsIter.length - 1; i >= 0; i--) {
  //     const d = noDiophsIter[i];
  //     if (isDiophantine(x, d)) {
  //       pulls.push(i);
  //     }
  //   }
  //   _.pullAt(noDiophantinesYet, pulls);
  // }

  // return noDiophantinesYet[0];

  let diophs = [new BigNumber(0)];

  for (let d = 1; d <= n; d++) {
    if (Number.isInteger(Math.sqrt(d))) {
      diophs.push(new BigNumber(0));
      continue;
    }
    let y = new BigNumber(1);
    while (!isDiophantineY(y, d)) {
      y = y.plus(1);
    }
    diophs.push(y.times(y).times(d).plus(1).sqrt());
  }

  let copy = _.cloneDeep(diophs);
  copy.sort((a, b) => b.minus(a));

  // console.log(diophs);
  // console.log(copy);

  return diophs.findIndex((v) => v.eq(copy[0]));
}

// solve66();
