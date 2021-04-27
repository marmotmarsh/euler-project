var singlesMap = {
  0: '',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
};

var teensMap = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
};

var doublesMap = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety',
};

var tenPowerMap = {
  2: 'Hundred',
  3: 'Thousand',
};

export async function solve17() {
  const n = 1000;
  let sum = 0;

  if (n > 1000) {
    throw new Error(
      `Can only calculate for numbers 1000 or less, ${n} is too large`
    );
  }

  // Thousand's digit
  if (n === 1000) {
    sum += tenPowerMap[3].length;
    sum += singlesMap[1].length;
  }

  // Hundred's Digit
  if (n >= 100) {
    for (var i = 1; i <= 9; i++) {
      if (Math.floor(n / 100) > i) {
        sum += 100 * (singlesMap[i].length + tenPowerMap[2].length) + 99 * 3; // 'AND'
      } else {
        sum +=
          ((n % 100) + 1) * (singlesMap[i].length + tenPowerMap[2].length) +
          (n % 100) * 3;
      }
    }
  }

  // Ten's Digit
  if (n >= 10) {
    for (var i = 10; i <= 19; i++) {
      if (i <= n) {
        sum += Math.floor((n + 100 - i) / 100) * teensMap[i].length;
      }
    }
    for (var i = 2; i <= 9; i++) {
      if (i * 10 <= n) {
        sum +=
          Math.floor((n + 100 - (i + 1) * 10) / 100) *
          10 *
          doublesMap[i].length;
        if (Math.floor((n % 100) / 10) === i) {
          sum += ((n % 10) + 1) * doublesMap[i].length;
        }
      }
    }
  }

  // One's Digit
  for (var i = 1; i <= 9; i++) {
    if (n % 10 === i && Math.floor(n / 10) % 10 !== 1) {
      sum += singlesMap[i].length;
    }
    sum +=
      (Math.ceil(n / 10) - (n >= 10 ? Math.ceil((n - 10) / 100) : 0)) *
      singlesMap[i].length;
  }

  return sum;
}
