import BigNumber from 'bignumber.js';

export function solve62() {
  const n = 5;
  let base = 3;
  let permsMap = new Map();
  let sortDigits;
  // let numDigits = ;

  do {
    const next = new BigNumber(base).pow(3).valueOf();
    sortDigits = next.split('').sort().join();
    permsMap.set(sortDigits, [...(permsMap.get(sortDigits) || []), next]);
    base++;
  } while (permsMap.get(sortDigits).length < n);

  return permsMap.get(sortDigits)[0];
}

// solve62();
