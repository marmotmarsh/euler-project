import _ from 'lodash';

function constructDartMap(dartMultiplier) {
  let dartMap = [];
  const prefix = dartMultiplier === 1 ? 'S' : dartMultiplier === 2 ? 'D' : 'T';
  for (let i = 1; i <= 20; i++) {
    dartMap.push({
      dart: `${prefix}${i}`,
      value: i * dartMultiplier,
    });
  }
  if (dartMultiplier <= 2) {
    dartMap.push({
      dart: `${prefix}25`,
      value: 25 * dartMultiplier,
    });
  }
  return dartMap;
}

function findFinalDartCount(capScore, doubles) {
  return _.reduce(doubles, (darts, d) => (d.value < capScore ? [...darts, d] : darts), []);
}

function findDartCombsForEndDart(endDart, allDarts) {
  // Case where we don't use any darts
  let dartCombs = [[endDart]];

  for (let i = 0; i < allDarts.length; i++) {
    const d1 = allDarts[i];
    // Case where we use one dart
    dartCombs.push([d1, endDart]);

    // Case where we use two darts
    for (let j = i; j < allDarts.length; j++) {
      const d2 = allDarts[j];
      dartCombs.push([d1, d2, endDart]);
    }
  }

  return dartCombs;
}

export function solve109() {
  const capScore = 100;
  const singles = constructDartMap(1);
  const doubles = constructDartMap(2);
  const triples = constructDartMap(3);
  const allDarts = [...singles, ...doubles, ...triples];

  const finalDarts = findFinalDartCount(capScore, doubles);

  let allCombs = [];

  for (let dart of finalDarts) {
    allCombs = [...allCombs, ...findDartCombsForEndDart(dart, allDarts)];
  }

  const filteredCombs = allCombs.filter((comb) => _.sumBy(comb, 'value') < capScore);

  return filteredCombs.length;
}
