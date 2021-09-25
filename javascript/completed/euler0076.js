// 2
//
// 1 + 1

// 3
//
// 2 + 1
// 1 + 1 + 1

// 4
//
// 3 + 1
// 2 + 2
// 2 + 1 + 1
// 1 + 1 + 1 + 1

// 5
//
// 4 + 1
// 3 + 2
// 3 + 1 + 1
// 2 + 2 + 1
// 2 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1

// 6
//
// 5 + 1
// 4 + 2
// 4 + 1 + 1
// 3 + 3
// 3 + 2 + 1
// 3 + 1 + 1 + 1
// 2 + 2 + 2
// 2 + 2 + 1 + 1
// 2 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1 + 1

// 7
//
// 6 + 1
// 5 + 2
// 5 + 1 + 1
// 4 + 3
// 4 + 2 + 1
// 4 + 1 + 1 + 1
// 3 + 3 + 1
// 3 + 2 + 2
// 3 + 2 + 1 + 1
// 3 + 1 + 1 + 1 + 1
// 2 + 2 + 2 + 1
// 2 + 2 + 1 + 1 + 1
// 2 + 1 + 1 + 1 + 1 + 1
// 1 + 1 + 1 + 1 + 1 + 1 + 1

let digitsMap = {
  2: {
    1: 1,
  },
  3: {
    2: 1,
    1: 1,
  },
  4: {
    3: 1,
    2: 2,
    1: 1,
  },
  5: {
    4: 1,
    3: 2,
    2: 2,
    1: 1,
  },
};

function getSumsForMaxDig(n, maxDig) {
  let sum = 0;
  for (let i = 1; i <= maxDig; i++) {
    sum += digitsMap[n][i] || 0;
  }
  return sum;
}

function findSums(n, maxDig = n) {
  if (maxDig === 1) {
    return 1;
  }
  if (digitsMap[n] === undefined) {
    digitsMap[n] = {};
    for (let x = 1; x < n; x++) {
      const diff = n - x;
      let result = findSums(diff, x);
      result += x >= diff ? 1 : 0;
      digitsMap[n][x] = result;
    }
  }

  return getSumsForMaxDig(n, maxDig);
}

export function solve76() {
  const n = 100;
  findSums(n);

  return getSumsForMaxDig(n, n);
}
