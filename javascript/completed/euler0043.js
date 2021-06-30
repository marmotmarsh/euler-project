import { isPrime as _isPrime } from '../util.js';

function subStringDivis(digits, fullNum, results) {
  const subNum = fullNum.slice(0, 3);
  switch (fullNum.length) {
    case 3: {
      if (subNum % 17 !== 0) {
        return;
      }
      break;
    }
    case 4: {
      if (subNum % 13 !== 0) {
        return;
      }
      break;
    }
    case 5: {
      if (subNum % 11 !== 0) {
        return;
      }
      break;
    }
    case 6: {
      if (subNum % 7 !== 0) {
        return;
      }
      break;
    }
    case 7: {
      if (subNum % 5 !== 0) {
        return;
      }
      break;
    }
    case 8: {
      if (subNum % 3 !== 0) {
        return;
      }
      break;
    }
    case 9: {
      if (subNum % 2 === 0) {
        results.push(parseInt(digits[0] + fullNum, 10));
      }
      return;
    }
    default: {
      break;
    }
  }

  digits.forEach((d) => {
    subStringDivis(
      digits.filter((v) => v !== d),
      d + fullNum,
      results
    );
  });
}

export function solve43() {
  let results = [];
  let digits = [];
  for (let i = 0; i <= 9; i++) {
    digits.push(i.toString());
  }
  subStringDivis(digits, '', results);
  return results.reduce((sum, v) => sum + v, 0);
}
