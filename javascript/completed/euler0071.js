import BigNumber from 'bignumber.js';

export function solve71() {
  BigNumber.set({ DECIMAL_PLACES: 50 });
  const maxD = 1000000;
  const targetN = 3;
  const targetD = 7;
  const targetReduction = new BigNumber(3).dividedBy(7);
  let nearestN = 0;
  let nearestD = 1;
  let nearestReduction = new BigNumber(0);

  for (let d = 1; d <= maxD; d++) {
    const n = new BigNumber(targetN).times(d).dividedBy(targetD);
    if (n.isInteger()) {
      continue;
    }

    const intN = Math.floor(n.toNumber());
    const newReduction = new BigNumber(intN).dividedBy(d);
    if (newReduction.gt(nearestReduction) && newReduction.lt(targetReduction)) {
      nearestReduction = newReduction;
      nearestN = intN;
      nearestD = d;
    }
  }

  return nearestN;
}
