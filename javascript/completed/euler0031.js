// Coin values = 1, 2, 5, 10, 20, 50, 100, 200

function calcSub(vals) {
  return (
    (vals.c200 || 0 || 0) * 200 +
    (vals.c100 || 0) * 100 +
    (vals.c50 || 0) * 50 +
    (vals.c20 || 0) * 20 +
    (vals.c10 || 0) * 10 +
    (vals.c5 || 0) * 5 +
    (vals.c2 || 0) * 2 +
    (vals.c1 || 0) * 1
  );
}

export async function solve31() {
  const total = 200;
  let possibleCombinations = 0;
  for (let c200 = 0; calcSub({ c200 }) <= total; c200++) {
    for (let c100 = 0; calcSub({ c200, c100 }) <= total; c100++) {
      for (let c50 = 0; calcSub({ c200, c100, c50 }) <= total; c50++) {
        for (let c20 = 0; calcSub({ c200, c100, c50, c20 }) <= total; c20++) {
          for (let c10 = 0; calcSub({ c200, c100, c50, c20, c10 }) <= total; c10++) {
            for (let c5 = 0; calcSub({ c200, c100, c50, c20, c10, c5 }) <= total; c5++) {
              for (let c2 = 0; calcSub({ c200, c100, c50, c20, c10, c5, c2 }) <= total; c2++) {
                possibleCombinations++;
              }
            }
          }
        }
      }
    }
  }

  return possibleCombinations;
}
